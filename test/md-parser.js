var path = require("path")

var tape = require("tape")
var mdParser = require("..")

tape("md-parser", function(test){
  var result = []
  var expected = [
    {
      html:
        "<h1 id=\"helloworld\">helloworld</h1>\n<p>this is a markdown file</p>\n",
      meta: {
        Language: "JavaScript",
        Name: "bloodyowl",
        Tags: [
          "markdown",
          "yaml",
          "metadata",
          "streams"
        ]
      }
    }
  ]
  var stream = mdParser(path.resolve(__dirname, "fixtures/my-file.md"))
    .on("data", function(file){
      test.pass("emits a data event")
      result.push(file)
    })
    .on("end", function(){
      test.deepEqual(result, expected)
      test.end()
    })
  test.equal(typeof stream.pipe, "function", "returns a stream")
})
