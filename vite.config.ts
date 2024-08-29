import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { createStyleImportPlugin } from 'vite-plugin-style-import'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({ importStyle: false })
      ]
    }),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => `ant-design-vue/es/${name}/style/index.js`,
        },
      ],
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#426DA9',
          'error-color': '#CF4520',
          'warning-color': '#F7B216',
          'success-color': '#4B9560',
          'info-color': '#426DA9'
        },
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          antd: ['ant-design-vue'],
          anti: ['@ant-design/icons-vue'],
          dayjs: ['dayjs'],
          lodash: ['lodash'],
          vue: ['vue']
        }
      }
    },
    chunkSizeWarningLimit: 750
  }
})
