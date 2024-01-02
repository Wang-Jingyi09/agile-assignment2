"use strict";

var _app = _interopRequireDefault(require("./app.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var port = process.env.PORT || 8080;
_app["default"].listen(port, function () {
  console.info("Server running at ".concat(port));
});