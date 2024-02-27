'use strict';

const renderWaterfall = require('..');
const assert = require('assert').strict;

assert.strictEqual(renderWaterfall(), 'Hello from renderWaterfall');
console.info('renderWaterfall tests passed');
