var values = require('../index');
var assert = require('assert');
var length = values.type.length;

describe('Distance Units: the <length> type', function() {
    it('Support <length> format', function() {
        assert.deepEqual(
            values.format('<length>').parse('12em'),
            {type: 'length', value: 12, unit: 'em'}
        );
    });

    describe('Relative lengths', function() {
        describe('Font-relative lengths', function() {
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
        });

        describe('Viewport-percentage lengths', function() {
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

    describe('Absolute lengths', function() {
        it('cm', function() {
            assert.deepEqual(
                values.format(length).parse('12cm'),
                {type: 'length', value: 12, unit: 'cm'}
            );
        });

        it('mm', function() {
            assert.deepEqual(
                values.format(length).parse('4.01mm'),
                {type: 'length', value: 4.01, unit: 'mm'}
            );
        });

        it('q', function() {
            assert.deepEqual(
                values.format(length).parse('-456.8q'),
                {type: 'length', value: -456.8, unit: 'q'}
            );
        });

        it('in', function() {
            assert.deepEqual(
                values.format(length).parse('1.1in'),
                {type: 'length', value: 1.1, unit: 'in'}
            );
        });

        it('pc', function() {
            assert.deepEqual(
                values.format(length).parse('+0.5pc'),
                {type: 'length', value: 0.5, unit: 'pc'}
            );
        });

        it('pt', function() {
            assert.deepEqual(
                values.format(length).parse('-0.2pt'),
                {type: 'length', value: -0.2, unit: 'pt'}
            );
        });

        it('px', function() {
            assert.deepEqual(
                values.format(length).parse('.60px'),
                {type: 'length', value: 0.6, unit: 'px'}
            );
        });
    });

    describe('Case-insensitive units', function() {
        it('Uppercase', function() {
            assert.deepEqual(
                values.format(length).parse('.60PX'),
                {type: 'length', value: 0.6, unit: 'px'}
            );
        });

        it('Mixed', function() {
            assert.deepEqual(
                values.format(length).parse('.60vMin'),
                {type: 'length', value: 0.6, unit: 'vmin'}
            );
        });
    });
});