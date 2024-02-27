'use strict';

const renderPicture = require('..');
const assert = require('assert').strict;

assert.strictEqual(renderPicture(), 'Hello from renderPicture');
console.info('renderPicture tests passed');
