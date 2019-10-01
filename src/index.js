// @flow
import { declare } from '@babel/helper-plugin-utils'
import * as t from '@babel/types'

import type {
  ImportSpecifier
} from '@babel/types'

import {
  isAvailableSource,
  isParsableImportSpecifiers,
  isTypeImport
} from './utils'

const { D3Modules } = require('./resources')

type ImportSource = string
type ImportLocalName = string
type ImportedName = string
type ParsedImportSourceMap = {
  [ImportSource]: Array<ImportLocalName | [ImportLocalName, ImportedName]>
}

export default declare((api, options) => {
  api.assertVersion(7)

  return {
    name: 'transform-d3-imports',
    visitor: {
      ImportDeclaration (path) {
        const { node } = path
        const escape = isTypeImport(node) ||
          !isAvailableSource(node) ||
          !isParsableImportSpecifiers(node)

        if (escape) {
          return
        }

        const d3Module = D3Modules[node.source.value]
        const parsedImportSourceMap: ParsedImportSourceMap = {}
        let containsUnknownImport = false

        node.specifiers.forEach((spec: ImportSpecifier) => {
          const newImportSource = d3Module[spec.imported.name]
          if (!newImportSource) {
            containsUnknownImport = true
          } else {
            if (typeof newImportSource === 'string') {
              parsedImportSourceMap[newImportSource] = [spec.local.name]
            } else {
              const [source, opts] = newImportSource
              parsedImportSourceMap[source] = (parsedImportSourceMap[source] || [])
              parsedImportSourceMap[source].push([spec.local.name, opts.as])
            }
          }
        })

        if (containsUnknownImport) {
          return
        }

        const replacementImportNodes = Object.entries(parsedImportSourceMap)
          .map(([source, imports]) => {
            // $FlowFixMe
            const specifiers = imports.map(
              pair => typeof pair === 'string'
                ? t.importDefaultSpecifier(t.identifier(pair))
                : t.importSpecifier(t.identifier(pair[0]), t.identifier(pair[1]))
            )
            return t.importDeclaration(
              specifiers,
              t.stringLiteral(source)
            )
          })

        path.replaceWithMultiple(replacementImportNodes)
      }
    }
  }
})
