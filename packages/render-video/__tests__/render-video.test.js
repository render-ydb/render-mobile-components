"use strict";

const renderVideo = require("..");
const assert = require("assert").strict;

assert.strictEqual(renderVideo(), "Hello from renderVideo");
console.info("renderVideo tests passed");
