function CSSValue(type, value, unit) {
    this.type = type;
    this.value = value;
    this.unit = unit || null;
}

CSSValue.prototype.serialize = function(type) {
    switch(this.type) {
        case 'absolute-size':
        case 'relative-size':
        case 'font-weight':
        case 'string':
        case 'integer':
        case 'number': return String(this.value);
        case 'percentage': return (this.value * 100) + '%';
        case 'length': return this.value + this.unit;
        case 'color': return this.value.toString(type);
    }
};

CSSValue.prototype.computeRelativeTo = function(relative) {
    if (this.type !== 'percentage') {
        throw new Error('Cannot compute relative value for type ' + this.type);
    }

    return new CSSValue(relative.type, relative.value * this.value, relative.unit);
};

module.exports = CSSValue;
