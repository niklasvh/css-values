var values = require('../index');
var assert = require('assert');
var percentage = values.type.percentage;

describe('Percentages: the <percentage> type', function() {
    it('Support <percentage> format', function() {
        assert.deepEqual(
            values.format('<percentage>').parse('12.5%'),
            {type: 'percentage', value: 0.125, unit: null}
        );
    });

    it('Serialize correctly', function() {
        assert.deepEqual(
            values.format('<percentage>').parse('5.5%').serialize(),
            '5.5%'
        );
    });

    it('12%', function() {
        assert.deepEqual(
            values.format(percentage).parse('12%'),
            {type: 'percentage', value: 0.12, unit: null}
        );
    });

    it('12.5%', function() {
        assert.deepEqual(
            values.format(percentage).parse('12.5%'),
            {type: 'percentage', value: 0.125, unit: null}
        );
    });

    it('-12.5%', function() {
        assert.deepEqual(
            values.format(percentage).parse('-12.5%'),
            {type: 'percentage', value: -0.125, unit: null}
        );
    });

    it('-12.5%px', function() {
        assert.deepEqual(
            values.format(percentage).parse('-12.5%px'),
            null
        );
    });
});