import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },

// 👇👇👇 新增的部分 👇👇👇
  server: {
    // 1. 允许通过 IP 访问 (必填，否则 Docker 容器外无法访问)
    host: '0.0.0.0', 
    
    // 2. 指定端口
    port: 5173,      

    // 3. 开启轮询监听 (必填，解决 Windows Docker 下热更新失效的问题)
    watch: {
      usePolling: true
    }
  }
})