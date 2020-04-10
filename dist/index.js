"use strict";

var _interopRequireDefault = require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _dotenv = require("dotenv");

var _masterRoutes = _interopRequireDefault(require("./routes/masterRoutes"));

(0, _dotenv.config)();
var app = (0, _express["default"])();
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use((0, _bodyParser.urlencoded)({
  extended: false
}));
app.use((0, _bodyParser.json)());
var port = process.env.PORT || 4000;
(0, _masterRoutes["default"])(app);
app.listen(port, function () {
  console.log("App listening on port ".concat(port, "..."));
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJ1c2UiLCJyZXEiLCJyZXMiLCJuZXh0IiwiaGVhZGVyIiwiZXh0ZW5kZWQiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBLElBQU1BLEdBQUcsR0FBRywwQkFBWjtBQUVBQSxHQUFHLENBQUNDLEdBQUosQ0FBUSxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxFQUFvQjtBQUMxQkQsRUFBQUEsR0FBRyxDQUFDRSxNQUFKLENBQVcsNkJBQVgsRUFBMEMsR0FBMUM7QUFDQUYsRUFBQUEsR0FBRyxDQUFDRSxNQUFKLENBQ0UsOEJBREYsRUFFRSxnREFGRjtBQUlBRCxFQUFBQSxJQUFJO0FBQ0wsQ0FQRDtBQVNBSixHQUFHLENBQUNDLEdBQUosQ0FBUSw0QkFBVztBQUFFSyxFQUFBQSxRQUFRLEVBQUU7QUFBWixDQUFYLENBQVI7QUFDQU4sR0FBRyxDQUFDQyxHQUFKLENBQVEsdUJBQVI7QUFFQSxJQUFNTSxJQUFJLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFaLElBQW9CLElBQWpDO0FBQ0EsOEJBQVlWLEdBQVo7QUFDQUEsR0FBRyxDQUFDVyxNQUFKLENBQVdKLElBQVgsRUFBaUIsWUFBTTtBQUNyQkssRUFBQUEsT0FBTyxDQUFDQyxHQUFSLGlDQUFxQ04sSUFBckM7QUFDRCxDQUZEO2VBSWVQLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IGpzb24sIHVybGVuY29kZWQgfSBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IG1hc3RlclJvdXRlIGZyb20gJy4vcm91dGVzL21hc3RlclJvdXRlcyc7XG5cbmNvbmZpZygpO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xuICByZXMuaGVhZGVyKFxuICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJyxcbiAgICAnT3JpZ2luLCBYLVJlcXVlc3RlZC1XaXRoLCBDb250ZW50LVR5cGUsIEFjY2VwdCdcbiAgKTtcbiAgbmV4dCgpO1xufSk7XG5cbmFwcC51c2UodXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XG5hcHAudXNlKGpzb24oKSk7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQwMDA7XG5tYXN0ZXJSb3V0ZShhcHApO1xuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBBcHAgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fS4uLmApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiJdfQ==