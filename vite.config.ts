const vuePlugin = require('@vitejs/plugin-vue')


/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  plugins: [vuePlugin()]
}

// https://vitejs.dev/config/
// module.exports={
//   plugins: [    vuePlugin(),],
//   optimizeDeps: {
//     include: ['@kangc/v-md-editor/lib/theme/vuepress.js'],
//   },
//   build: {
//     minify: false
//   }
// }
