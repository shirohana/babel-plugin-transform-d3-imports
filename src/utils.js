// @flow
import * as t from '@babel/types'

import type { ImportDeclaration } from '@babel/types'

const { AvailableD3Modules } = require('./resources')

export function isTypeImport (node: ImportDeclaration): boolean {
  /* istanbul ignore next */
  return node.importKind && node.importKind !== 'value'
}

export function isAvailableSource (node: ImportDeclaration): boolean {
  return t.isStringLiteral(node.source) &&
    AvailableD3Modules.indexOf(node.source.value) !== -1
}

export function isParsableImportSpecifiers (node: ImportDeclaration): boolean {
  return node.specifiers.every(spec =>
    // flow-types should be stripped before apply this plugin
    !isTypeImport(spec) &&
    // Import-default is unparsable
    !t.isImportDefaultSpecifier(spec)
  )
}
