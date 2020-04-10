"use strict";

var _interopRequireDefault = require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/createClass"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _models = _interopRequireDefault(require("../db/models"));

_dotenv["default"].config();

var signUpController = /*#__PURE__*/function () {
  function signUpController() {
    (0, _classCallCheck2["default"])(this, signUpController);
  }

  (0, _createClass2["default"])(signUpController, null, [{
    key: "signUp",
    value: function () {
      var _signUp = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(request, response) {
        var _request$body, firstName, lastName, email, password, userIsExist;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _request$body = request.body, firstName = _request$body.firstName, lastName = _request$body.lastName, email = _request$body.email, password = _request$body.password;
                _context2.next = 3;
                return _models["default"].user.findAll({
                  where: {
                    email: email
                  }
                });

              case 3:
                userIsExist = _context2.sent;

                if (!(userIsExist.length > 0)) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", response.status(409).json({
                  message: 'User already exist'
                }));

              case 6:
                _bcrypt["default"].hash(password, 9, /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err, hashedPassword) {
                    var newUser, token;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _models["default"].user.create({
                              firstName: firstName,
                              lastName: lastName,
                              email: email,
                              password: hashedPassword,
                              type: 'client'
                            });

                          case 2:
                            newUser = _context.sent;
                            token = _jsonwebtoken["default"].sign({
                              userId: newUser.id,
                              email: newUser.email
                            }, process.env.PRIVATE_KEY);
                            response.status(201).json({
                              token: token,
                              message: 'user successfully created'
                            });

                          case 5:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x3, _x4) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function signUp(_x, _x2) {
        return _signUp.apply(this, arguments);
      }

      return signUp;
    }()
  }]);
  return signUpController;
}();

exports["default"] = signUpController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9zaWduVXBDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImVudmlyb25tZW50IiwiY29uZmlnIiwic2lnblVwQ29udHJvbGxlciIsInJlcXVlc3QiLCJyZXNwb25zZSIsImJvZHkiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJtb2RlbHMiLCJ1c2VyIiwiZmluZEFsbCIsIndoZXJlIiwidXNlcklzRXhpc3QiLCJsZW5ndGgiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImJjcnlwdCIsImhhc2giLCJlcnIiLCJoYXNoZWRQYXNzd29yZCIsImNyZWF0ZSIsInR5cGUiLCJuZXdVc2VyIiwidG9rZW4iLCJqd3QiLCJzaWduIiwidXNlcklkIiwiaWQiLCJwcm9jZXNzIiwiZW52IiwiUFJJVkFURV9LRVkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUFBLG1CQUFZQyxNQUFaOztJQUVxQkMsZ0I7Ozs7Ozs7O29IQUNFQyxPLEVBQVNDLFE7Ozs7Ozs7Z0NBR3hCRCxPQUFPLENBQUNFLEksRUFEVkMsUyxpQkFBQUEsUyxFQUFXQyxRLGlCQUFBQSxRLEVBQVVDLEssaUJBQUFBLEssRUFBT0MsUSxpQkFBQUEsUTs7dUJBRUpDLG1CQUFPQyxJQUFQLENBQVlDLE9BQVosQ0FBb0I7QUFBRUMsa0JBQUFBLEtBQUssRUFBRTtBQUFFTCxvQkFBQUEsS0FBSyxFQUFMQTtBQUFGO0FBQVQsaUJBQXBCLEM7OztBQUFwQk0sZ0JBQUFBLFc7O3NCQUNGQSxXQUFXLENBQUNDLE1BQVosR0FBcUIsQzs7Ozs7a0RBQVVYLFFBQVEsQ0FBQ1ksTUFBVCxDQUFnQixHQUFoQixFQUFxQkMsSUFBckIsQ0FBMEI7QUFBRUMsa0JBQUFBLE9BQU8sRUFBRTtBQUFYLGlCQUExQixDOzs7QUFDbkNDLG1DQUFPQyxJQUFQLENBQVlYLFFBQVosRUFBc0IsQ0FBdEI7QUFBQSwyR0FBeUIsaUJBQU9ZLEdBQVAsRUFBWUMsY0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUNEWixtQkFBT0MsSUFBUCxDQUFZWSxNQUFaLENBQW1CO0FBQ3ZDakIsOEJBQUFBLFNBQVMsRUFBVEEsU0FEdUM7QUFDNUJDLDhCQUFBQSxRQUFRLEVBQVJBLFFBRDRCO0FBQ2xCQyw4QkFBQUEsS0FBSyxFQUFMQSxLQURrQjtBQUNYQyw4QkFBQUEsUUFBUSxFQUFFYSxjQURDO0FBQ2VFLDhCQUFBQSxJQUFJLEVBQUU7QUFEckIsNkJBQW5CLENBREM7O0FBQUE7QUFDakJDLDRCQUFBQSxPQURpQjtBQUlqQkMsNEJBQUFBLEtBSmlCLEdBSVRDLHlCQUFJQyxJQUFKLENBQVM7QUFBRUMsOEJBQUFBLE1BQU0sRUFBRUosT0FBTyxDQUFDSyxFQUFsQjtBQUFzQnRCLDhCQUFBQSxLQUFLLEVBQUVpQixPQUFPLENBQUNqQjtBQUFyQyw2QkFBVCxFQUF1RHVCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQUFuRSxDQUpTO0FBS3ZCN0IsNEJBQUFBLFFBQVEsQ0FBQ1ksTUFBVCxDQUFnQixHQUFoQixFQUFxQkMsSUFBckIsQ0FBMEI7QUFBRVMsOEJBQUFBLEtBQUssRUFBTEEsS0FBRjtBQUFTUiw4QkFBQUEsT0FBTyxFQUFFO0FBQWxCLDZCQUExQjs7QUFMdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXpCOztBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICdkb3RlbnYnXG5pbXBvcnQgbW9kZWxzIGZyb20gJy4uL2RiL21vZGVscydcblxuZW52aXJvbm1lbnQuY29uZmlnKClcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2lnblVwQ29udHJvbGxlciB7XG4gIHN0YXRpYyBhc3luYyBzaWduVXAgKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gICAgY29uc3Qge1xuICAgICAgZmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIHBhc3N3b3JkLFxuICAgIH0gPSByZXF1ZXN0LmJvZHlcbiAgICBjb25zdCB1c2VySXNFeGlzdCA9IGF3YWl0IG1vZGVscy51c2VyLmZpbmRBbGwoeyB3aGVyZTogeyBlbWFpbCB9IH0pXG4gICAgaWYgKHVzZXJJc0V4aXN0Lmxlbmd0aCA+IDApIHJldHVybiByZXNwb25zZS5zdGF0dXMoNDA5KS5qc29uKHsgbWVzc2FnZTogJ1VzZXIgYWxyZWFkeSBleGlzdCcgfSlcbiAgICBiY3J5cHQuaGFzaChwYXNzd29yZCwgOSwgYXN5bmMgKGVyciwgaGFzaGVkUGFzc3dvcmQpID0+IHtcbiAgICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCBtb2RlbHMudXNlci5jcmVhdGUoe1xuICAgICAgICBmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLCB0eXBlOiAnY2xpZW50JyxcbiAgICAgIH0pXG4gICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHsgdXNlcklkOiBuZXdVc2VyLmlkLCBlbWFpbDogbmV3VXNlci5lbWFpbCB9LCBwcm9jZXNzLmVudi5QUklWQVRFX0tFWSlcbiAgICAgIHJlc3BvbnNlLnN0YXR1cygyMDEpLmpzb24oeyB0b2tlbiwgbWVzc2FnZTogJ3VzZXIgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQnIH0pXG4gICAgfSlcbiAgfVxufVxuIl19