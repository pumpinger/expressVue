import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  root: 'src/web',
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue()],
})
