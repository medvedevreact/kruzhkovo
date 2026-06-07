import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Включает статический экспорт
  distDir: 'build',  // Меняем имя папки на 'build'
  images: {
    unoptimized: true, // отключает API оптимизации
  }
};

export default nextConfig;
