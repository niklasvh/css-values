var CSSColor = require('./csscolor');

function RGBColor(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a === undefined ? 255 : a;
    this.defaultStringifier = 'rgb';
}

RGBColor.prototype = Object.create(CSSColor.prototype);

RGBColor.prototype.stringifiers = {
    "rgb": function(color) {
        var r = color.r;
        var g = color.g;
        var b = color.b;
        var a = color.a;
        return a !== 255 ? "rgba(" + [r, g, b, a].join(", ") + ")" : "rgb(" + [r, g, b].join(", ") + ")";
    },
    "hsl": function(color) {
        return "" + color.toHSL();
    },
    "hex": function(color) {
        return "" + color.toHex();
    },
    "cmyk": function(color) {
        return "" + color.toCMYK();
    }
};

module.exports = RGBColor;
