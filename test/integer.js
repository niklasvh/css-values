var values = require('../index');
var assert = require('assert');
var integer = values.type.integer;

describe('Integers: the <integer> type', function() {
    it('Support <integer> format', function() {
        assert.deepEqual(
            values.format('<integer>').parse('12'),
            {type: 'integer', value: 12, unit: null}
        );
    });

    it('Positive integer (without a leading + sign)', function() {
        assert.deepEqual(
            values.format(integer).parse('12'),
            {type: 'integer', value: 12, unit: null}
        );
    });

    it('Positive integer (with a leading + sign)', function() {
        assert.deepEqual(
            values.format(integer).parse('+123'),
            {type: 'integer', value: 123, unit: null}
        );
    });

    it('Negative integer', function() {
        assert.deepEqual(
            values.format(integer).parse('-456'),
            {type: 'integer', value: -456, unit: null}
        );
    });

    it('Zero', function() {
        assert.deepEqual(
            values.format(integer).parse('0'),
            {type: 'integer', value: 0, unit: null}
        );
    });

    it('Zero, with a leading +', function() {
        assert.deepEqual(
            values.format(integer).parse('+0'),
            {type: 'integer', value: 0, unit: null}
        );
    });

    it('Zero, with a leading -', function() {
        assert.deepEqual(
            values.format(integer).parse('-0'),
            {type: 'integer', value: 0, unit: null}
        );
    });

    it('<number> is not an <integer>', function() {
        assert.deepEqual(
            values.format(integer).parse('12.0'),
            null
        );
    });

    it('The dot should not be part of an <integer>', function() {
        assert.deepEqual(
            values.format(integer).parse('12.'),
            null
        );
    });

    it('Only one leading +/- is allowed', function() {
        assert.deepEqual(
            values.format(integer).parse('+---12'),
            null
        );
    });

    it('Letters are not allowed', function() {
        assert.deepEqual(
            values.format(integer).parse('ten'),
            null
        );
    });

    it('Special characters are not allowed', function() {
        assert.deepEqual(
            values.format(integer).parse('_5'),
            null
        );
    });

    it('Escaped Unicode characters are not allowed, even if they are an integer', function() {
        assert.deepEqual(
            values.format(integer).parse('\35'),
            null
        );
    });

    it('Non-arabic numerals are not allowed, even escaped', function() {
        assert.deepEqual(
            values.format(integer).parse('\4E94'),
            null
        );
    });
});