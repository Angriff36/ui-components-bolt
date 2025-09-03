import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PrepChefUIComponents',
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
    },
    sourcemap: true,
    minify: 'esbuild',
    rollupOptions: {
      external: ['react', 'react-dom', 'tailwindcss', 'lucide-react'],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          'lucide-react': 'LucideReact',
        },
        exports: 'named',
      },
    },
    emptyOutDir: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  }
});
