function CSSValue(type, value, unit) {
    this.type = type;
    this.value = value;
    this.unit = unit || null;
}

module.exports = CSSValue;