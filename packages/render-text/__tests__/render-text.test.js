"use strict";

const renderText = require("..");
const assert = require("assert").strict;

assert.strictEqual(renderText(), "Hello from renderText");
console.info("renderText tests passed");
