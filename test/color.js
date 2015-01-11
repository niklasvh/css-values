var values = require('../index');
var assert = require('assert');
var color = values.type.color;

describe('Colors: the <color> type', function() {
    it('Support <color> format', function() {
        assert.deepEqual(
            values.format('<color>').parse('#96c'),
            {type: 'color', value: {r: 153, g: 102, b: 204, a: 255, defaultStringifier: 'hex'}, unit: null}
        );
    });

    it('Serialize correctly', function() {
        assert.deepEqual(
            values.format('<color>').parse('#96c').serialize(),
            '#9966cc'
        );
    });

    it('Serialize correctly with type', function() {
        assert.deepEqual(
            values.format('<color>').parse('#96c').serialize('rgb'),
            'rgb(153, 102, 204)'
        );
    });
});
