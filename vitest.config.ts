import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/flat.test.ts'],
  },
});
