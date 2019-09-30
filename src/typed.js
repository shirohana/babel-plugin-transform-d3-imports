// @flow
export type NamedImportType = string
export type NamedExportType = [string, { as: string }]
export type DefaultExportType = string

export type NamedModuleImportMap = {
  [NamedImportType]: DefaultExportType | NamedExportType
}
