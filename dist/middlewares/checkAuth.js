"use strict";

var _interopRequireDefault = require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var auth = function auth(req, res, next) {
  var token = req.header('token');

  if (!token) {
    return res.status(401).json({
      message: 'Access denied. no token provided.'
    });
  }

  try {
    var decoded = _jsonwebtoken["default"].verify(token, process.env.PRIVATE_KEY);

    req.user = decoded;
    next();
  } catch (ex) {
    return res.status(401).json({
      message: 'invalid token.'
    });
  }

  return token;
};

var _default = {
  auth: auth
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9jaGVja0F1dGguanMiXSwibmFtZXMiOlsiYXV0aCIsInJlcSIsInJlcyIsIm5leHQiLCJ0b2tlbiIsImhlYWRlciIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZGVjb2RlZCIsImp3dCIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJQUklWQVRFX0tFWSIsInVzZXIiLCJleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsRUFBb0I7QUFDL0IsTUFBTUMsS0FBSyxHQUFHSCxHQUFHLENBQUNJLE1BQUosQ0FBVyxPQUFYLENBQWQ7O0FBQ0EsTUFBSSxDQUFDRCxLQUFMLEVBQVk7QUFDVixXQUFPRixHQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFyQixDQUFQO0FBQ0Q7O0FBQ0QsTUFBSTtBQUNGLFFBQU1DLE9BQU8sR0FBR0MseUJBQUlDLE1BQUosQ0FBV1AsS0FBWCxFQUFrQlEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQTlCLENBQWhCOztBQUNBYixJQUFBQSxHQUFHLENBQUNjLElBQUosR0FBV04sT0FBWDtBQUVBTixJQUFBQSxJQUFJO0FBQ0wsR0FMRCxDQUtFLE9BQU9hLEVBQVAsRUFBVztBQUNYLFdBQU9kLEdBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCLENBQVA7QUFDRDs7QUFDRCxTQUFRSixLQUFSO0FBQ0QsQ0FkRDs7ZUFlZTtBQUNiSixFQUFBQSxJQUFJLEVBQUpBO0FBRGEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuXG5cbmNvbnN0IGF1dGggPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVyKCd0b2tlbicpXG4gIGlmICghdG9rZW4pIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiAnQWNjZXNzIGRlbmllZC4gbm8gdG9rZW4gcHJvdmlkZWQuJyB9KVxuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LlBSSVZBVEVfS0VZKVxuICAgIHJlcS51c2VyID0gZGVjb2RlZFxuXG4gICAgbmV4dCgpXG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ2ludmFsaWQgdG9rZW4uJyB9KVxuICB9XG4gIHJldHVybiAodG9rZW4pXG59XG5leHBvcnQgZGVmYXVsdCB7XG4gIGF1dGgsXG59XG4iXX0=