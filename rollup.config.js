import localResolve from 'rollup-plugin-local-resolve'
import nodeResolve from 'rollup-plugin-node-resolve'

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'cjs'
    },
    plugins: [
      localResolve()
    ]
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/es.js',
      format: 'es',
      name: 'stx-persist-rocksdb',
      sourcemap: 'inline'
    },
    plugins: [
      nodeResolve({ browser: true })
    ]
  }
]
