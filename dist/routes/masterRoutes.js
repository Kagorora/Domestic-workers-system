"use strict";

var _interopRequireDefault = require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _userRoutes = _interopRequireDefault(require("./userRoutes"));

var _clients = _interopRequireDefault(require("./clients"));

var _viewAllRoute = _interopRequireDefault(require("./viewAllRoute"));

var _default = function _default(app) {
  app.use('/api/v1', _userRoutes["default"]);
  app.use('/api/v1', _clients["default"]);
  app.use('/api/v1', _viewAllRoute["default"]);
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvbWFzdGVyUm91dGVzLmpzIl0sIm5hbWVzIjpbImFwcCIsInVzZSIsInVzZXJSb3V0ZXMiLCJjbGllbnQiLCJhbGxXb3JrZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7ZUFFZSxrQkFBQ0EsR0FBRCxFQUFTO0FBQ3RCQSxFQUFBQSxHQUFHLENBQUNDLEdBQUosQ0FBUSxTQUFSLEVBQW1CQyxzQkFBbkI7QUFDQUYsRUFBQUEsR0FBRyxDQUFDQyxHQUFKLENBQVEsU0FBUixFQUFtQkUsbUJBQW5CO0FBQ0FILEVBQUFBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLFNBQVIsRUFBbUJHLHdCQUFuQjtBQUNELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlclJvdXRlcyBmcm9tICcuL3VzZXJSb3V0ZXMnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4vY2xpZW50cydcbmltcG9ydCBhbGxXb3JrZXJzIGZyb20gJy4vdmlld0FsbFJvdXRlJ1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwKSA9PiB7XG4gIGFwcC51c2UoJy9hcGkvdjEnLCB1c2VyUm91dGVzKVxuICBhcHAudXNlKCcvYXBpL3YxJywgY2xpZW50KVxuICBhcHAudXNlKCcvYXBpL3YxJywgYWxsV29ya2Vycylcbn1cbiJdfQ==