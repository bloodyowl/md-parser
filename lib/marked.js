var through = require("through2")
var marked = require("meta-marked")

function markdown(){
  return through.obj(function(file, enc, cb){
    var contents = file.contents.toString()
    this.push(marked(contents))
    cb()
  })
}

module.exports = markdown
