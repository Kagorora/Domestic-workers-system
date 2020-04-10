"use strict";

var _interopRequireDefault = require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _loginSchema = _interopRequireDefault(require("../helpers/loginSchema"));

var validateLogin = function validateLogin(req, res, next) {
  var _req$body = req.body,
      email = _req$body.email,
      password = _req$body.password;

  var _loginSchema$validate = _loginSchema["default"].validate({
    email: email,
    password: password
  }),
      error = _loginSchema$validate.error;

  if (error) {
    res.status(222).json({
      status: res.statusCode,
      error: error.message
    });
  } else next();
};

var _default = validateLogin;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy92YWxpZGF0ZUxvZ2luLmpzIl0sIm5hbWVzIjpbInZhbGlkYXRlTG9naW4iLCJyZXEiLCJyZXMiLCJuZXh0IiwiYm9keSIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2dpblNjaGVtYSIsInZhbGlkYXRlIiwiZXJyb3IiLCJzdGF0dXMiLCJqc29uIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsRUFBb0I7QUFBQSxrQkFDWkYsR0FBRyxDQUFDRyxJQURRO0FBQUEsTUFDaENDLEtBRGdDLGFBQ2hDQSxLQURnQztBQUFBLE1BQ3pCQyxRQUR5QixhQUN6QkEsUUFEeUI7O0FBQUEsOEJBR3RCQyx3QkFBWUMsUUFBWixDQUFxQjtBQUFFSCxJQUFBQSxLQUFLLEVBQUxBLEtBQUY7QUFBU0MsSUFBQUEsUUFBUSxFQUFSQTtBQUFULEdBQXJCLENBSHNCO0FBQUEsTUFHaENHLEtBSGdDLHlCQUdoQ0EsS0FIZ0M7O0FBS3hDLE1BQUlBLEtBQUosRUFBVztBQUNUUCxJQUFBQSxHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNuQkQsTUFBQUEsTUFBTSxFQUFFUixHQUFHLENBQUNVLFVBRE87QUFFbkJILE1BQUFBLEtBQUssRUFBRUEsS0FBSyxDQUFDSTtBQUZNLEtBQXJCO0FBSUQsR0FMRCxNQUtPVixJQUFJO0FBQ1osQ0FYRDs7ZUFZZUgsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2dpblNjaGVtYSBmcm9tICcuLi9oZWxwZXJzL2xvZ2luU2NoZW1hJ1xuXG5jb25zdCB2YWxpZGF0ZUxvZ2luID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keVxuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGxvZ2luU2NoZW1hLnZhbGlkYXRlKHsgZW1haWwsIHBhc3N3b3JkIH0pXG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cygyMjIpLmpzb24oe1xuICAgICAgc3RhdHVzOiByZXMuc3RhdHVzQ29kZSxcbiAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxuICAgIH0pXG4gIH0gZWxzZSBuZXh0KClcbn1cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlTG9naW5cbiJdfQ==