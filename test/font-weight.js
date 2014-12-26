var values = require('../index');
var assert = require('assert');
var fontWeight = values.type.fontWeight;

describe('Font-weight: the <font-weight> type', function() {
    it('Support <absolute-size> format', function() {
        assert.deepEqual(
            values.format('<font-weight>').parse('800'),
            {type: 'font-weight', value: '800', unit: null}
        );
    });

    it('Serialize correctly', function() {
        assert.deepEqual(
            values.format('<font-weight>').parse('800').serialize(),
            '800'
        );
    });

    it('normal', function() {
        assert.deepEqual(
            values.format(fontWeight).parse('normal'),
            {type: 'font-weight', value: 'normal', unit: null}
        );
    });

    it('bold', function() {
        assert.deepEqual(
            values.format(fontWeight).parse('bold'),
            {type: 'font-weight', value: 'bold', unit: null}
        );
    });

    it('bolder', function() {
        assert.deepEqual(
            values.format(fontWeight).parse('bolder'),
            {type: 'font-weight', value: 'bolder', unit: null}
        );
    });

    it('lighter', function() {
        assert.deepEqual(
            values.format(fontWeight).parse('lighter'),
            {type: 'font-weight', value: 'lighter', unit: null}
        );
    });

    it('100', function() {
        assert.deepEqual(
            values.format(fontWeight).parse('100'),
            {type: 'font-weight', value: '100', unit: null}
        );
    });

    it('200', function() {
        assert.deepEqual(
            values.format(fontWeight).parse('200'),
            {type: 'font-weight', value: '200', unit: null}
        );
    });

    it('300', function() {
        assert.deepEqual(
            values.format(fontWeight).parse('300'),
            {type: 'font-weight', value: '300', unit: null}
        );
    });

    it('400', function() {
        assert.deepEqual(
            values.format(fontWeight).parse('400'),
            {type: 'font-weight', value: '400', unit: null}
        );
    });

    it('500', function() {
        assert.deepEqual(
            values.format(fontWeight).parse('500'),
            {type: 'font-weight', value: '500', unit: null}
        );
    });

    it('600', function() {
        assert.deepEqual(
            values.format(fontWeight).parse('600'),
            {type: 'font-weight', value: '600', unit: null}
        );
    });

    it('700', function() {
        assert.deepEqual(
            values.format(fontWeight).parse('700'),
            {type: 'font-weight', value: '700', unit: null}
        );
    });

    it('800', function() {
        assert.deepEqual(
            values.format(fontWeight).parse('800'),
            {type: 'font-weight', value: '800', unit: null}
        );
    });

    it('0', function() {
        assert.deepEqual(
            values.format(fontWeight).parse('0'),
            null
        );
    });

    it('150', function() {
        assert.deepEqual(
            values.format(fontWeight).parse('150'),
            null
        );
    });

    it('1000', function() {
        assert.deepEqual(
            values.format(fontWeight).parse('1000'),
            null
        );
    });

    it('fatter', function() {
        assert.deepEqual(
            values.format(fontWeight).parse('fatter'),
            null
        );
    });
});