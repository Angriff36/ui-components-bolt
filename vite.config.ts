import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { readFileSync } from 'fs';

// Read version from package.json
const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));

export default defineConfig(({ command, mode }) => {
  // Development configuration for component preview
  if (command === 'serve') {
    return {
      plugins: [react()],
      root: './demo',
      resolve: {
        alias: {
          '@': resolve(__dirname, './src')
        }
      },
      server: {
        port: 3001,
        open: true
      }
    };
  }

  // Build configuration for library
  return {
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
  };
});
