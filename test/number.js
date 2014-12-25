var values = require('../index');
var assert = require('assert');
var number = values.type.number;

describe('Real Numbers: the <number> type', function() {
    it('Support <number> format', function() {
        assert.deepEqual(
            values.format('<number>').parse('12.5'),
            {type: 'number', value: 12.5, unit: null}
        );
    });

    it('A raw <integer> is also a <number>', function() {
        assert.deepEqual(
            values.format(number).parse('12'),
            {type: 'number', value: 12, unit: null}
        );
    });

    it('A positive non-integer <number>', function() {
        assert.deepEqual(
            values.format(number).parse('4.01'),
            {type: 'number', value: 4.01, unit: null}
        );
    });

    it('Negative non-integer <number>', function() {
        assert.deepEqual(
            values.format(number).parse('-456.8'),
            {type: 'number', value: -456.8, unit: null}
        );
    });

    it('Zero', function() {
        assert.deepEqual(
            values.format(number).parse('0.0'),
            {type: 'number', value: 0, unit: null}
        );
    });

    it('Zero, with a leading +', function() {
        assert.deepEqual(
            values.format(number).parse('+0.0'),
            {type: 'number', value: 0, unit: null}
        );
    });

    it('Zero, with a leading -', function() {
        assert.deepEqual(
            values.format(number).parse('-0.0'),
            {type: 'number', value: 0, unit: null}
        );
    });

    it('Digits are optional before the dot', function() {
        assert.deepEqual(
            values.format(number).parse('.60'),
            {type: 'number', value: 0.6, unit: null}
        );
    });

    it('The e notation is allowed', function() {
        assert.deepEqual(
            values.format(number).parse('10e3'),
            {type: 'number', value: 10000, unit: null}
        );
    });

    it('The dot should be followed by a number', function() {
        assert.deepEqual(
            values.format(number).parse('12.'),
            null
        );
    });

    it('Only one leading +/- is allowed', function() {
        assert.deepEqual(
            values.format(number).parse('+-12.2'),
            null
        );
    });

    it('Only one dot is allowed', function() {
        assert.deepEqual(
            values.format(number).parse('12.1.1'),
            null
        );
    });
});