'use strict';

const renderPullrefresh = require('..');
const assert = require('assert').strict;

assert.strictEqual(renderPullrefresh(), 'Hello from renderPullrefresh');
console.info('renderPullrefresh tests passed');
