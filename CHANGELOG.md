Changelog
=========

[Unreleased]
------------

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
[0.1.0]: https://github.com/shirohana/babel-plugin-transform-d3-imports/releases/tag/v0.1.0
