"use strict";

var _interopRequireDefault = require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var generateToken = function generateToken(payload) {
  return _jsonwebtoken["default"].sign(payload, process.env.PRIVATE_KEY, {
    expiresIn: '4h'
  });
};

var _default = generateToken;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2dlbmVyYXRlVG9rZW4uanMiXSwibmFtZXMiOlsiZW52IiwiY29uZmlnIiwiZ2VuZXJhdGVUb2tlbiIsInBheWxvYWQiLCJqd3QiLCJzaWduIiwicHJvY2VzcyIsIlBSSVZBVEVfS0VZIiwiZXhwaXJlc0luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQUEsbUJBQUlDLE1BQUo7O0FBRUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxPQUFEO0FBQUEsU0FBYUMseUJBQUlDLElBQUosQ0FBU0YsT0FBVCxFQUFrQkcsT0FBTyxDQUFDTixHQUFSLENBQVlPLFdBQTlCLEVBQTJDO0FBQUVDLElBQUFBLFNBQVMsRUFBRTtBQUFiLEdBQTNDLENBQWI7QUFBQSxDQUF0Qjs7ZUFFZU4sYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IGVudiBmcm9tICdkb3RlbnYnXG5cbmVudi5jb25maWcoKVxuXG5jb25zdCBnZW5lcmF0ZVRva2VuID0gKHBheWxvYWQpID0+IGp3dC5zaWduKHBheWxvYWQsIHByb2Nlc3MuZW52LlBSSVZBVEVfS0VZLCB7IGV4cGlyZXNJbjogJzRoJyB9KVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVRva2VuXG4iXX0=