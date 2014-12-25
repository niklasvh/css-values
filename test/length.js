var values = require('../index');
var assert = require('assert');
var length = values.type.length;

describe('Distance Units: the <length> type', function() {
    describe('Relative lengths', function() {
        it('em', function() {
            assert.deepEqual(
                values.format(length).parse('12em'),
                {type: 'length', value: 12, unit: 'em'}
            );
        });

        it('ex', function() {
            assert.deepEqual(
                values.format(length).parse('4.01ex'),
                {type: 'length', value: 4.01, unit: 'ex'}
            );
        });

        it('ch', function() {
            assert.deepEqual(
                values.format(length).parse('-456.8ch'),
                {type: 'length', value: -456.8, unit: 'ch'}
            );
        });

        it('rem', function() {
            assert.deepEqual(
                values.format(length).parse('0.0rem'),
                {type: 'length', value: 0, unit: 'rem'}
            );
        });

        it('vw', function() {
            assert.deepEqual(
                values.format(length).parse('+0.0vw'),
                {type: 'length', value: 0, unit: 'vw'}
            );
        });

        it('vh', function() {
            assert.deepEqual(
                values.format(length).parse('-0.0vh'),
                {type: 'length', value: 0, unit: 'vh'}
            );
        });

        it('vmin', function() {
            assert.deepEqual(
                values.format(length).parse('.60vmin'),
                {type: 'length', value: 0.6, unit: 'vmin'}
            );
        });

        it('vmax', function() {
            assert.deepEqual(
                values.format(length).parse('10e3vmax'),
                {type: 'length', value: 10000, unit: 'vmax'}
            );
        });
    });
});