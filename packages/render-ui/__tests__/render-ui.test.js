'use strict';

const renderUi = require('..');
const assert = require('assert').strict;

assert.strictEqual(renderUi(), 'Hello from renderUi');
console.info('renderUi tests passed');
