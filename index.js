var fs = require('fs');

exports.moduleName = 'beagle-style'; // Should eventually be manifest-like object
exports.css = fs.readFileSync('../beagle-style/style.min.css', 'utf8');