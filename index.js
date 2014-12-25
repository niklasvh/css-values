var Parser = require('./src/parser');
exports.type = require('./src/types');

exports.format = function() {
    var values = new Array(arguments.length);
    for(var i = 0; i < values.length; ++i) {
        values[i] = arguments[i];
    }

    return new Parser(values);
};