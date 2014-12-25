var values = require('../index');
var assert = require('assert');
var absoluteSize = values.type.absoluteSize;

// xx-small | x-small | small | medium | large | x-large | xx-large

describe('Absolute size: the <absolute-size> type', function() {
    it('Support <absolute-size> format', function() {
        assert.deepEqual(
            values.format('<absolute-size>').parse('xx-small'),
            {type: 'absolute-size', value: 'xx-small', unit: null}
        );
    });

    it('Serialize correctly', function() {
        assert.deepEqual(
            values.format('<absolute-size>').parse('xx-small').serialize(),
            'xx-small'
        );
    });

    it('xx-small', function() {
        assert.deepEqual(
            values.format(absoluteSize).parse('xx-small'),
            {type: 'absolute-size', value: 'xx-small', unit: null}
        );
    });

    it('x-small', function() {
        assert.deepEqual(
            values.format(absoluteSize).parse('x-small'),
            {type: 'absolute-size', value: 'x-small', unit: null}
        );
    });

    it('small', function() {
        assert.deepEqual(
            values.format(absoluteSize).parse('small'),
            {type: 'absolute-size', value: 'small', unit: null}
        );
    });

    it('medium', function() {
        assert.deepEqual(
            values.format(absoluteSize).parse('medium'),
            {type: 'absolute-size', value: 'medium', unit: null}
        );
    });

    it('large', function() {
        assert.deepEqual(
            values.format(absoluteSize).parse('large'),
            {type: 'absolute-size', value: 'large', unit: null}
        );
    });

    it('x-large', function() {
        assert.deepEqual(
            values.format(absoluteSize).parse('x-large'),
            {type: 'absolute-size', value: 'x-large', unit: null}
        );
    });

    it('xx-large', function() {
        assert.deepEqual(
            values.format(absoluteSize).parse('xx-large'),
            {type: 'absolute-size', value: 'xx-large', unit: null}
        );
    });
});