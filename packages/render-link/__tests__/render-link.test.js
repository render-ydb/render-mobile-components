"use strict";

const renderLink = require("..");
const assert = require("assert").strict;

assert.strictEqual(renderLink(), "Hello from renderLink");
console.info("renderLink tests passed");
