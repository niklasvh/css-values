function CSSValue(type, value, unit) {
    this.type = type;
    this.value = value;
    this.unit = unit || null;
}

CSSValue.prototype.serialize = function() {
    switch(this.type) {
        case 'absolute-size':
        case 'relative-size':
        case 'string':
        case 'integer':
        case 'number': return String(this.value);
        case 'percentage': return this.value + '%';
        case 'length': return this.value + this.unit;
    }
};

module.exports = CSSValue;