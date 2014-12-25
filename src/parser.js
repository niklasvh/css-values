var CSSValue = require('./cssvalue');

function Parser(values) {
    this.values = values;
}

Parser.prototype.parse = function(value) {
    var values = this.values, result;
    for (var i = 0; i < values.length; i++) {
        if (typeof(values[i]) === 'string' && String(value).toLowerCase() === values[i]) {
            return new CSSValue(values[i], null);
        } else if(typeof(values[i]) === 'function' && (result = values[i](value))) {
            return result;
        }
    }
    return null;
};

module.exports = Parser;