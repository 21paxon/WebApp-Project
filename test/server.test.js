const { test } = require('node:test');
const assert = require('node:assert');

test('Application response should contain Hello from Docker', () => {
    const message = 'Hello from Docker!';
    assert.strictEqual(message, 'Hello from Docker!');
});

