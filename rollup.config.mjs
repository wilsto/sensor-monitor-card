import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/sensor-monitor-card.js',
    format: 'umd',
    name: 'SensorMonitorCard',
  },
  plugins: [
    resolve(),
    json(),
  ],
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**',
    chokidar: {
      usePolling: true
		},
  },
};
