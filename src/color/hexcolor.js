var CSSColor = require('./csscolor');

function HexColor(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a === undefined ? 255 : a;
    this.defaultStringifier = 'hex';
}

HexColor.prototype = Object.create(CSSColor.prototype);

HexColor.prototype.toRGB = function() {
    return new (require('./rgbcolor'))(this.r, this.g, this.b, this.a);
};

HexColor.prototype.stringifiers = {
    "hex": function(color) {
        const r = (color.r < 16 ? "0" : "") + color.r.toString(16);
        const g = (color.g < 16 ? "0" : "") + color.g.toString(16);
        const b = (color.b < 16 ? "0" : "") + color.b.toString(16);
        const a = (color.a < 16 ? "0" : "") + color.a.toString(16);
        return '#' + r + g + b + (color.a === 255 ? '' : a);
    }
};

module.exports = HexColor;
