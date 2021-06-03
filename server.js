
const fs = require('fs')
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD

async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production'
) {
  const resolve = (p) => path.resolve(__dirname, p)

  const indexProd = isProd
    ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')
    : ''

  const manifest = isProd
    ? // @ts-ignore
    require('./dist/client/ssr-manifest.json')
    : {}

  const app = express()

  app.use(express.static('public'))
  app.use(express.static('./build'))
  // 声明使用解析post请求的中间件
  app.use(express.urlencoded({ extended: true })) // 请求体参数是: name=tom&pwd=123
  app.use(express.json()) // 请求体参数是json结构: {name: tom, pwd: 123}
  // 声明使用解析cookie数据的中间件
  const cookieParser = require('cookie-parser')
  app.use(cookieParser())
  // 声明使用路由器中间件
  const indexRouter = require('./routers')
  app.use('/', indexRouter)  //


  let vite
  if (!isProd) {
    vite = await require('vite').createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: true,
        watch: {
          // During tests we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100
        }
      }
    })
    // use vite's connect instance as middleware
    app.use(vite.middlewares)
  } else {
    app.use(require('compression')())
    app.use(
      require('serve-static')(resolve('dist/client'), {
        index: false
      })
    )
  }

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl

      let template, render
      if (!isProd) {
        // always read fresh template in dev
        template = fs.readFileSync(resolve('index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule('/src/entry-server.js')).render
      } else {
        template = indexProd
        render = require('./dist/server/entry-server.js').render
      }

      const [appHtml, preloadLinks] = await render(url, manifest)

      const html = template
        .replace(`<!--preload-links-->`, preloadLinks)
        .replace(`<!--app-html-->`, appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      vite && vite.ssrFixStacktrace(e)
      console.log(e.stack)
      res.status(500).end(e.stack)
    }
  })

  return { app, vite }
}

if (!isTest) {
  createServer().then(({ app }) =>
    mongoose.connect('mongodb://localhost/server_db3', { useNewUrlParser: true })
      .then(() => {
        console.log('连接数据库成功!!!')
        // 只有当连接上数据库后才去启动服务器
        app.listen('5000', () => {
          console.log('服务器启动成功, 请访问: http://localhost:5000')
        })
      })
      .catch(error => {
        console.error('连接数据库失败', error)
      })

  )
}

// for test use
exports.createServer = createServer
