# md-parser

[![Build Status](https://travis-ci.org/bloodyowl/md-parser.svg)](https://travis-ci.org/bloodyowl/md-parser)

> returns a stream of parsed markdown from a given glob

## install

```console
$ npm install bloody-mdparser
```

## require

```javascript
var mdParser = require("bloody-mdparser")
```

## api

### mdParser(glob) > stream

fetches files matching the given [glob](https://github.com/isaacs/node-glob)
and passes to the returned stream the given structure :

```javascript
{
  html : "string <em>(parsed markdown)</em>",
  meta : { /* metadata object */ }
}
```
