"use strict";

var _interopRequireDefault = require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/regenerator"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/objectWithoutProperties"));

var _asyncToGenerator2 = _interopRequireDefault(require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../db/models"));

var _decryptPswd = _interopRequireDefault(require("../helpers/decryptPswd"));

var _generateToken = _interopRequireDefault(require("../helpers/generateToken"));

var loginController = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, email, password, userExists, encryptedPswd, pswdMatches, token, _password, nid, _email, userInfo;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context.next = 4;
            return _models["default"].user.findOne({
              where: {
                email: email
              },
              raw: true
            });

          case 4:
            userExists = _context.sent;

            if (!userExists) {
              res.status(401).json({
                status: res.statusCode,
                result: 'Invalid email or password!'
              });
            } else if (userExists) {
              encryptedPswd = userExists.password;
              pswdMatches = (0, _decryptPswd["default"])(password, encryptedPswd);

              if (pswdMatches) {
                token = (0, _generateToken["default"])({
                  userId: userExists.id,
                  email: userExists.email
                });
                _password = userExists.password, nid = userExists.nid, _email = userExists.email, userInfo = (0, _objectWithoutProperties2["default"])(userExists, ["password", "nid", "email"]);
                res.status(200).json({
                  status: 200,
                  token: token
                });
              }
            }

            _context.next = 10;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function loginController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = loginController;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9sb2dpbkNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsibG9naW5Db250cm9sbGVyIiwicmVxIiwicmVzIiwiYm9keSIsImVtYWlsIiwicGFzc3dvcmQiLCJtb2RlbHMiLCJ1c2VyIiwiZmluZE9uZSIsIndoZXJlIiwicmF3IiwidXNlckV4aXN0cyIsInN0YXR1cyIsImpzb24iLCJzdGF0dXNDb2RlIiwicmVzdWx0IiwiZW5jcnlwdGVkUHN3ZCIsInBzd2RNYXRjaGVzIiwidG9rZW4iLCJ1c2VySWQiLCJpZCIsIm5pZCIsInVzZXJJbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxlQUFlO0FBQUEsMkZBQUcsaUJBQU9DLEdBQVAsRUFBWUMsR0FBWjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFFUUQsR0FBRyxDQUFDRSxJQUZaLEVBRVpDLEtBRlksYUFFWkEsS0FGWSxFQUVMQyxRQUZLLGFBRUxBLFFBRks7QUFBQTtBQUFBLG1CQUdLQyxtQkFBT0MsSUFBUCxDQUFZQyxPQUFaLENBQW9CO0FBQzNDQyxjQUFBQSxLQUFLLEVBQUU7QUFDTEwsZ0JBQUFBLEtBQUssRUFBTEE7QUFESyxlQURvQztBQUkzQ00sY0FBQUEsR0FBRyxFQUFFO0FBSnNDLGFBQXBCLENBSEw7O0FBQUE7QUFHZEMsWUFBQUEsVUFIYzs7QUFVcEIsZ0JBQUksQ0FBQ0EsVUFBTCxFQUFpQjtBQUNmVCxjQUFBQSxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNuQkQsZ0JBQUFBLE1BQU0sRUFBRVYsR0FBRyxDQUFDWSxVQURPO0FBRW5CQyxnQkFBQUEsTUFBTSxFQUFFO0FBRlcsZUFBckI7QUFJRCxhQUxELE1BS08sSUFBSUosVUFBSixFQUFnQjtBQUNmSyxjQUFBQSxhQURlLEdBQ0NMLFVBQVUsQ0FBQ04sUUFEWjtBQUVmWSxjQUFBQSxXQUZlLEdBRUQsNkJBQVFaLFFBQVIsRUFBa0JXLGFBQWxCLENBRkM7O0FBR3JCLGtCQUFJQyxXQUFKLEVBQWlCO0FBQ1RDLGdCQUFBQSxLQURTLEdBQ0QsK0JBQWM7QUFDMUJDLGtCQUFBQSxNQUFNLEVBQUVSLFVBQVUsQ0FBQ1MsRUFETztBQUUxQmhCLGtCQUFBQSxLQUFLLEVBQUVPLFVBQVUsQ0FBQ1A7QUFGUSxpQkFBZCxDQURDO0FBTWJDLGdCQUFBQSxTQU5hLEdBT1hNLFVBUFcsQ0FNYk4sUUFOYSxFQU1IZ0IsR0FORyxHQU9YVixVQVBXLENBTUhVLEdBTkcsRUFNRWpCLE1BTkYsR0FPWE8sVUFQVyxDQU1FUCxLQU5GLEVBTVlrQixRQU5aLDZDQU9YWCxVQVBXO0FBUWZULGdCQUFBQSxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNuQkQsa0JBQUFBLE1BQU0sRUFBRSxHQURXO0FBRW5CTSxrQkFBQUEsS0FBSyxFQUFMQTtBQUZtQixpQkFBckI7QUFJRDtBQUNGOztBQS9CbUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZmxCLGVBQWU7QUFBQTtBQUFBO0FBQUEsR0FBckI7O2VBb0NlQSxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZGVscyBmcm9tICcuLi9kYi9tb2RlbHMnXG5pbXBvcnQgY29tcGFyZSBmcm9tICcuLi9oZWxwZXJzL2RlY3J5cHRQc3dkJ1xuaW1wb3J0IGdlbmVyYXRlVG9rZW4gZnJvbSAnLi4vaGVscGVycy9nZW5lcmF0ZVRva2VuJ1xuXG5jb25zdCBsb2dpbkNvbnRyb2xsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHlcbiAgICBjb25zdCB1c2VyRXhpc3RzID0gYXdhaXQgbW9kZWxzLnVzZXIuZmluZE9uZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBlbWFpbCxcbiAgICAgIH0sXG4gICAgICByYXc6IHRydWUsXG4gICAgfSlcbiAgICBcbiAgICBpZiAoIXVzZXJFeGlzdHMpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtcbiAgICAgICAgc3RhdHVzOiByZXMuc3RhdHVzQ29kZSxcbiAgICAgICAgcmVzdWx0OiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCEnLFxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHVzZXJFeGlzdHMpIHtcbiAgICAgIGNvbnN0IGVuY3J5cHRlZFBzd2QgPSB1c2VyRXhpc3RzLnBhc3N3b3JkXG4gICAgICBjb25zdCBwc3dkTWF0Y2hlcyA9IGNvbXBhcmUocGFzc3dvcmQsIGVuY3J5cHRlZFBzd2QpXG4gICAgICBpZiAocHN3ZE1hdGNoZXMpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBnZW5lcmF0ZVRva2VuKHtcbiAgICAgICAgICB1c2VySWQ6IHVzZXJFeGlzdHMuaWQsXG4gICAgICAgICAgZW1haWw6IHVzZXJFeGlzdHMuZW1haWwsXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBwYXNzd29yZCwgbmlkLCBlbWFpbCwgLi4udXNlckluZm9cbiAgICAgICAgfSA9IHVzZXJFeGlzdHNcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICAgIHRva2VuLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvciB9KVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBsb2dpbkNvbnRyb2xsZXJcbiJdfQ==