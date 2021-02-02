'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./opl-ui.cjs.prod.js");
} else {
  module.exports = require("./opl-ui.cjs.dev.js");
}
