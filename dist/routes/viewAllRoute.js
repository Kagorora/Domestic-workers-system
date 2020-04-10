"use strict";

var _interopRequireDefault = require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _housekeepersController = _interopRequireDefault(require("../controllers/housekeepersController"));

var router = _express["default"].Router();

router.get('/maids', _housekeepersController["default"].viewAll);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdmlld0FsbFJvdXRlLmpzIl0sIm5hbWVzIjpbInJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJnZXQiLCJHZXRIb3VzZU1haWRzIiwidmlld0FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxvQkFBUUMsTUFBUixFQUFmOztBQUdBRixNQUFNLENBQUNHLEdBQVAsQ0FBVyxRQUFYLEVBQXFCQyxtQ0FBY0MsT0FBbkM7ZUFFZUwsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgR2V0SG91c2VNYWlkcyBmcm9tICcuLi9jb250cm9sbGVycy9ob3VzZWtlZXBlcnNDb250cm9sbGVyJ1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cblxucm91dGVyLmdldCgnL21haWRzJywgR2V0SG91c2VNYWlkcy52aWV3QWxsKVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJcbiJdfQ==