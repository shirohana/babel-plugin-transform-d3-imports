import { readdirSync } from 'fs'
import { join, relative } from 'path'
import rollupBabel from 'rollup-plugin-babel'

const srcDir = 'src'
const destDir = 'lib'
const srcToDest = filename => join(destDir, relative(srcDir, filename))

function readdirSyncRecursive (dirname) {
  const result = []

  readdirSync(dirname, { withFileTypes: true })
    .forEach(dirent => {
      const filename = join(dirname, dirent.name)
      dirent.isFile()
        ? result.push(filename)
        : result.push(...readdirSyncRecursive(filename))
    })

  return result
}

function createFileConfig (srcFilename) {
  return {
    input: srcFilename,
    output: {
      file: srcToDest(srcFilename),
      format: 'cjs',
      sourcemap: process.env.BABEL_COVERAGE === 'true'
    },
    plugins: [
      rollupBabel({
        exclude: 'node_modules/**'
      })
    ]
  }
}

const srcFiles = readdirSyncRecursive(srcDir)
const config = srcFiles.map(createFileConfig)

export default config
