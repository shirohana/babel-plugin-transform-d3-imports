Changelog
=========

[Unreleased]
------------
> Bump lockfile due to [security vulnerability](https://github.com/shirohana/babel-plugin-transform-d3-imports/pull/5).

[0.2.1] - 2020-07-28
--------------------
> Bump lockfile due to [security vulnerability](https://github.com/shirohana/babel-plugin-transform-d3-imports/pull/5).

[0.2.0] - 2020-03-29
--------------------

### New Feature
- Support new aliases added between `d3@5.12.0` and `d3@5.15.0`

    from:
    ```
    import { csvFormatRow, csvFormatValue, tsvFormatRow, tsvFormatValue } from 'd3-dsv'
    import { interpolateNumberArray } from 'd3-interpolate'
    ```
    to:
    ```
    import { csvFormatRow, csvFormatValue } from "d3-dsv/src/csv";
    import { tsvFormatRow, tsvFormatValue } from "d3-dsv/src/tsv";
    import interpolateNumberArray from "d3-interpolate/src/numberArray";
    ```

[0.1.0] - 2019-10-01
--------------------

### :tada: First Release

[Unreleased]: #user-content-unreleased
[0.2.1]: https://github.com/shirohana/babel-plugin-transform-d3-imports/releases/tag/v0.2.1
[0.2.0]: https://github.com/shirohana/babel-plugin-transform-d3-imports/releases/tag/v0.2.0
[0.1.0]: https://github.com/shirohana/babel-plugin-transform-d3-imports/releases/tag/v0.1.0
