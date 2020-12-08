@babel-plugin-transform-d3-imports/example-basic
================================================
![preview](https://raw.githubusercontent.com/shirohana/babel-plugin-transform-d3-imports/develop/example/basic/assets/preview.jpg)

Quick Start
-----------
```sh
# Install
yarn install

# Run analyzer without babel-plugin-transform-d3-imports
yarn analyze

# Run analyzer with babel-plugin-transform-d3-imports
yarn analyze-with-plugin
```

Analyze
-------
This example only used 4 d3-modules:

```js
import { arc, pie } from 'd3-shape'
import { create } from 'd3-selection'
import { scaleOrdinal } from 'd3-scale'
import { schemePastel1 } from 'd3-scale-chromatic'
```

and the result:

![before-after](https://raw.githubusercontent.com/shirohana/babel-plugin-transform-d3-imports/develop/example/basic/assets/before-after.jpg)
