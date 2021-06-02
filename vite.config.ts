import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const vuePlugin = require('@vitejs/plugin-vue')


/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  plugins: [
    vuePlugin(),
    {
      name: 'virtual',
      resolveId(id) {
        if (id === '@foo') {
          return id
        }
      },
      load(id) {
        if (id === '@foo') {
          return `export default { msg: 'hi' }`
        }
      }
    }
  ],
  build: {
    minify: false
  }
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
