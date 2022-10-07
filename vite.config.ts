import {defineConfig} from 'vite';
import visualizer from 'rollup-plugin-visualizer';

export default defineConfig(({mode}) => ({
  publicDir: false,
  plugins: [
    visualizer({
      open: true,
      filename: './stats.html',
    })
  ],
  build: {
    emptyOutDir: true,
    sourcemap: mode === 'production',
    outDir: 'build',
    minify: false,
    rollupOptions: {
      input: './src/app.ts',
    },
  }
}));