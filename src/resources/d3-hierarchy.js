// @flow
import type { NamedModuleImportMap } from '../typed'

const defaultD3Hierarchy: NamedModuleImportMap = {
  cluster: 'd3-hierarchy/src/cluster',
  hierarchy: 'd3-hierarchy/src/hierarchy/index',
  pack: 'd3-hierarchy/src/pack/index',
  packSiblings: 'd3-hierarchy/src/pack/siblings',
  packEnclose: 'd3-hierarchy/src/pack/enclose',
  partition: 'd3-hierarchy/src/partition',
  stratify: 'd3-hierarchy/src/stratify',
  tree: 'd3-hierarchy/src/tree',
  treemap: 'd3-hierarchy/src/treemap/index',
  treemapBinary: 'd3-hierarchy/src/treemap/binary',
  treemapDice: 'd3-hierarchy/src/treemap/dice',
  treemapSlice: 'd3-hierarchy/src/treemap/slice',
  treemapSliceDice: 'd3-hierarchy/src/treemap/sliceDice',
  treemapSquarify: 'd3-hierarchy/src/treemap/squarify',
  treemapResquarify: 'd3-hierarchy/src/treemap/resquarify'
}

export default defaultD3Hierarchy
