"use strict";

var _interopRequireDefault = require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/asyncToGenerator"));

var _chai = require("chai");

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

(0, _chai.use)(_chaiHttp["default"]);

var userSignUp = function userSignUp() {
  describe('user SignUp', function () {
    it('will retrun 201 status', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var response;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _chai.request)(_index["default"]).post('/api/v1/auth/signup').send({
                firstName: 'eugene',
                lastName: 'sadmm',
                email: 'weod@gmail.com',
                password: 'sad123'
              });

            case 2:
              response = _context.sent;
              console.log("response : ".concat(JSON.stringify(response)));
              (0, _chai.expect)(response).to.have.status(201);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
  });
};

var _default = userSignUp;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy91c2VTaWdudXAudGVzdC5qcyJdLCJuYW1lcyI6WyJjaGFpSHR0cCIsInVzZXJTaWduVXAiLCJkZXNjcmliZSIsIml0Iiwic2VydmVyIiwicG9zdCIsInNlbmQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwidG8iLCJoYXZlIiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsZUFBSUEsb0JBQUo7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QkMsRUFBQUEsUUFBUSxDQUFDLGFBQUQsRUFBZ0IsWUFBTTtBQUM1QkMsSUFBQUEsRUFBRSxDQUFDLHdCQUFELDZGQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNKLG1CQUFRQyxpQkFBUixFQUNwQkMsSUFEb0IsQ0FDZixxQkFEZSxFQUVwQkMsSUFGb0IsQ0FFZjtBQUNKQyxnQkFBQUEsU0FBUyxFQUFFLFFBRFA7QUFFSkMsZ0JBQUFBLFFBQVEsRUFBRSxPQUZOO0FBR0pDLGdCQUFBQSxLQUFLLEVBQUUsZ0JBSEg7QUFJSkMsZ0JBQUFBLFFBQVEsRUFBRTtBQUpOLGVBRmUsQ0FESTs7QUFBQTtBQUNyQkMsY0FBQUEsUUFEcUI7QUFTekJDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixzQkFBMEJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixRQUFmLENBQTFCO0FBQ0YsZ0NBQU9BLFFBQVAsRUFBaUJLLEVBQWpCLENBQW9CQyxJQUFwQixDQUF5QkMsTUFBekIsQ0FBZ0MsR0FBaEM7O0FBVjJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTNCLEdBQUY7QUFZRCxHQWJPLENBQVI7QUFjRCxDQWZEOztlQWlCZWpCLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHBlY3QsIHVzZSwgcmVxdWVzdCB9IGZyb20gJ2NoYWknXG5pbXBvcnQgY2hhaUh0dHAgZnJvbSAnY2hhaS1odHRwJ1xuaW1wb3J0IHNlcnZlciBmcm9tICcuLi9pbmRleCdcblxudXNlKGNoYWlIdHRwKVxuY29uc3QgdXNlclNpZ25VcCA9ICgpID0+IHtcbiAgZGVzY3JpYmUoJ3VzZXIgU2lnblVwJywgKCkgPT4ge1xuICAgIGl0KCd3aWxsIHJldHJ1biAyMDEgc3RhdHVzJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0KHNlcnZlcilcbiAgICAgICAgLnBvc3QoJy9hcGkvdjEvYXV0aC9zaWdudXAnKVxuICAgICAgICAuc2VuZCh7XG4gICAgICAgICAgZmlyc3ROYW1lOiAnZXVnZW5lJyxcbiAgICAgICAgICBsYXN0TmFtZTogJ3NhZG1tJyxcbiAgICAgICAgICBlbWFpbDogJ3dlb2RAZ21haWwuY29tJyxcbiAgICAgICAgICBwYXNzd29yZDogJ3NhZDEyMycsXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKGByZXNwb25zZSA6ICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpfWApXG4gICAgICBleHBlY3QocmVzcG9uc2UpLnRvLmhhdmUuc3RhdHVzKDIwMSlcbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VyU2lnblVwXG4iXX0=