var CSSValue = require('./cssvalue');
var types = require('./types');

function getType(format) {
    switch (format) {
        case '<absolute-size>': return types.absoluteSize;
        case '<color>': return types.color;
        case '<font-weight>': return types.fontWeight;
        case '<integer>': return types.integer;
        case '<length>': return types.length;
        case '<number>': return types.number;
        case '<percentage>': return types.percentage;
        case '<relative-size>': return types.relativeSize;
    }

    throw new Error('Invalid css format ' + format);
}

function Parser(values) {
    this.values = values.map(function(format) {
        return typeof(format) === 'string' && format.charAt(0) === '<' ? getType(format) : format;
    });
}

Parser.prototype.parse = function(value) {
    var values = this.values, result;
    value = typeof(value) === 'string' ? value.toLowerCase().trim() : value;
    for (var i = 0; i < values.length; i++) {
        if (typeof(values[i]) === 'string' && String(value).toLowerCase() === values[i]) {
            return new CSSValue('string', values[i]);
        } else if(typeof(values[i]) === 'function' && (result = values[i](value))) {
            return result;
        }
    }
    return null;
};

module.exports = Parser;
