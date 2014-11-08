var vinylfs = require("vinyl-fs")
var through = require("through2")

var markdown = require("./lib/marked")

function mdParser(glob){
  return (
    vinylfs.src(glob).pipe(markdown())
  )
}

module.exports = mdParser
