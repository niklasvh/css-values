var ColorStringifierType = ["rgb", "hsl", "hex", "cmyk"];
var _hex3 = /^#([a-f0-9]{3})$/i;
var _hex6 = /^#([a-f0-9]{6})$/i;
var _rgb = /^rgb\((\d{1,3}) *, *(\d{1,3}) *, *(\d{1,3})\)$/;
var _rgba = /^rgba\((\d{1,3}) *, *(\d{1,3}) *, *(\d{1,3}) *, *(\d+\.?\d*)\)$/;

function CSSColor() {

}

CSSColor.prototype.toString = function(type) {
    var undefined = void 0;

    if (type !== undefined) {
        type = "" + type;
        if(ColorStringifierType.indexOf(type) === -1) {
            throw Error("Invalid stringifier type: " + type);
        }
    } else if(this.defaultStringifier !== undefined) {
        type = "" + this.defaultStringifier;
    } else {
        type = "rgb";
    }

    if(this.stringifiers && this.stringifiers[type]) {
        return this.stringifiers[type](this);
    } else {
        return (new (require('./rgbcolor'))).stringifiers[type](this.toRGB());
    }
};

CSSColor.parse = function(css) {
    var match = null;
    if (match = css.match(_hex3)) {
        return new (require('./hexcolor'))(
            parseInt(match[1][0] + match[1][0], 16),
            parseInt(match[1][1] + match[1][1], 16),
            parseInt(match[1][2] + match[1][2], 16)
        );
    } else if (match = css.match(_hex6)) {
        return new (require('./hexcolor'))(
            parseInt(match[1].substring(0, 2), 16),
            parseInt(match[1].substring(2, 4), 16),
            parseInt(match[1].substring(4, 6), 16)
        );
    } else if (match = css.match(_rgb)) {
        return new (require('./rgbcolor'))(
            Number(match[1]),
            Number(match[2]),
            Number(match[3])
        );
    } else if (match = require('./namedcolor').parse(css)) {
        return match;
    }
};

module.exports = CSSColor;
