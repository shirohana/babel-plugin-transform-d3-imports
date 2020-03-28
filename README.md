babel-plugin-transform-d3-imports
=================================
> Optimize bundle size for [D3][d3js_github]@5 with ESModule

[d3js_github]: https://github.com/d3/d3

[![npm](https://img.shields.io/npm/v/babel-plugin-transform-d3-imports.svg)](https://www.npmjs.com/package/babel-plugin-transform-d3-imports)
[![travis](https://img.shields.io/travis/shirohana/babel-plugin-transform-d3-imports.svg)](https://www.npmjs.com/package/babel-plugin-transform-d3-imports)
[![codecov](https://codecov.io/gh/shirohana/babel-plugin-transform-d3-imports/branch/develop/graph/badge.svg)](https://codecov.io/gh/shirohana/babel-plugin-transform-d3-imports)
[![license](https://img.shields.io/npm/l/babel-plugin-transform-d3-imports.svg)](https://www.npmjs.com/package/babel-plugin-transform-d3-imports)

[Example][]．[Installation][]．[Usage][]．[Options][]．[Why][]．[How it works][]．[Q&A][]

[Example]: #user-content-example
[Installation]: #user-content-example
[Usage]: #user-content-usage
[Options]: #user-content-options
[Why]: #user-content-why
[How it works]: #user-content-how-it-works
[Q&A]: #user-content-q--a

Example
-------

#### In
```javascript
import { select, event } from "d3-selection";
import { arc, pie } from "d3-shape";
import { scaleBand } from "d3-scale";
import { csv } from "d3-fetch";
```

#### Out
```javascript
import select from "d3-selection/src/select";
import { event } from "d3-selection/src/selection/on";
import arc from "d3-shape/src/arc";
import pie from "d3-shape/src/pie";
import scaleBand from "d3-scale/src/band";
import { csv } from "d3-fetch/src/dsv";
```

Installation
------------

#### Via yarn
```shell
yarn add -D babel-plugin-transform-d3-imports
```

#### Via npm
```shell
npm install --save-dev babel-plugin-transform-d3-imports
```

Usage
-----

### Via `babel.config.js` (aka `.babelrc`)

#### babel.config.js
```javascript
module.exports = function () {
  return {
    plugins: ['babel-plugin-transform-d3-imports']
  }
}
```

Options
-------

Currently none.

Why
---

Since you import any of:

- `default`: `import shape from "d3-shape";`,
    _(p.s. this won't work, `d3-*` doesnot contains default exports)_
- `named`: `import { arc } from "d3-shape";`, or
- `namespaced`: `import * as d3Shape from "d3-shape";`,

you're importing **the whole** `d3-shape` module, includes a lot you've didn't need
like `area`, `line`, `pie`, ...everything of `d3-shape`.

#### Why webpack/my bundler don't do a tree-shake for me?
**D3** uses _import-then-export_ syntax for all the documented API in an single
  entry file, once you import, you're importing everything.

But **D3** packed their source code together with NPM, so we can import
  the source code directly like:

```javascript
import arc from "d3-shape/src/arc";
import pie from "d3-shape/src/pie";
import select from "d3-selection/src/select";
```

to shrink the bundle size.

Of course you can do the same way by yourself, but
  with `babel-plugin-transform-d3-imports`, you can just:

```javascript
import { arc, pie } from "d3-shape";
import { select } from "d3-selection";
```

How it works
------------

We created a static mapping for all dependencies of `d3@^5.15.0`, so we can
rewrite all importDeclaration correctly.

Don't worry about if the map had inconsistent between this plugins and latest
version of **D3**. If it contains any not-matched import, we will not modify
your imports.

Q & A
-----

### Who may need this plugin?
If you're using **D3** with any bundler which can parsed by Babel,
  you'll need this plugin.

And if you're meet the followings, you will **NOT** suitable for this plugin:

- When using CDN, or already packed **D3** distribution
- When still using ES5 or unable to parse ESModule
- Didn't care about the additional several kb of bundle size
