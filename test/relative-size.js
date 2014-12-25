var values = require('../index');
var assert = require('assert');
var relativeSize = values.type.relativeSize;

describe('Relative size: the <relative-size> type', function() {
    it('Support <relative-size> format', function() {
        assert.deepEqual(
            values.format('<relative-size>').parse('larger'),
            {type: 'relative-size', value: 'larger', unit: null}
        );
    });

    it('Serialize correctly', function() {
        assert.deepEqual(
            values.format('<relative-size>').parse('smaller').serialize(),
            'smaller'
        );
    });

    it('smaller', function() {
        assert.deepEqual(
            values.format(relativeSize).parse('smaller'),
            {type: 'relative-size', value: 'smaller', unit: null}
        );
    });

    it('larger', function() {
        assert.deepEqual(
            values.format(relativeSize).parse('larger'),
            {type: 'relative-size', value: 'larger', unit: null}
        );
    });
});