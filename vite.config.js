import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // 使用相對路徑 './'，無論放到哪個 GitHub Pages 儲存庫名稱下都能直接正常運作
  base: './',
  plugins: [react(), tailwindcss()],
});
