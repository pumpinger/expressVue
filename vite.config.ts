import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  root: 'src/web',
  base:'./',
  build: {
    outDir: path.resolve(__dirname, 'build/dist'),
  },
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue()],
})
