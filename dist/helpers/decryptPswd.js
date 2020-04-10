"use strict";

var _interopRequireDefault = require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var compare = function compare(plainPswd, hashedPswd) {
  return _bcrypt["default"].compareSync(plainPswd, hashedPswd);
};

var _default = compare;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2RlY3J5cHRQc3dkLmpzIl0sIm5hbWVzIjpbImNvbXBhcmUiLCJwbGFpblBzd2QiLCJoYXNoZWRQc3dkIiwiYmNyeXB0IiwiY29tcGFyZVN5bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE9BQU8sR0FBSSxTQUFYQSxPQUFXLENBQUNDLFNBQUQsRUFBWUMsVUFBWjtBQUFBLFNBQTJCQyxtQkFBT0MsV0FBUCxDQUFtQkgsU0FBbkIsRUFBOEJDLFVBQTlCLENBQTNCO0FBQUEsQ0FBakI7O2VBQ2VGLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCdcblxuY29uc3QgY29tcGFyZSA9ICgocGxhaW5Qc3dkLCBoYXNoZWRQc3dkKSA9PiBiY3J5cHQuY29tcGFyZVN5bmMocGxhaW5Qc3dkLCBoYXNoZWRQc3dkKSlcbmV4cG9ydCBkZWZhdWx0IGNvbXBhcmVcbiJdfQ==