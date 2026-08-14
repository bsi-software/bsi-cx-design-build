import {defineConfig} from 'vitest/config';

/**
 * Unit tests of the design build itself (npm run test:unit). They run against src/, while
 * 'npm test' builds the example designs in test/templates against dist/.
 */
export default defineConfig({
  test: {
    include: ['test/unit/**/*.test.js'],
    setupFiles: ['test/unit/setup.js'],
  },
});
