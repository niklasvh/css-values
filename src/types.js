var CSSValue = require('./cssvalue');

var numberFormat = "((-|\\+)?\\d*(\\.\\d+)?(e\\d+)?)";
var numberRegExp = new RegExp("^" + numberFormat + "$");

var lengthUnits = "(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pc|pt|px)";
var lengthRegExp = new RegExp("^" + numberFormat + lengthUnits + "$");

exports.number = function(value) {
    var match = String(value).match(numberRegExp);
    if (match) {
        return new CSSValue('number', Number(match[1]));
    }
};

exports.length = function(value) {
    var match = String(value).match(lengthRegExp);
    if (match) {
        return new CSSValue('length', Number(match[1]), match[5]);
    }
};