var fs = require('fs')

// TODO Should eventually be manifest-like object
exports.moduleName = 'beagle-style'
exports.css = fs.readFileSync(__dirname + '/style.min.css', 'utf8')
