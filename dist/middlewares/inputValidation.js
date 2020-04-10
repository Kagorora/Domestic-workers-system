"use strict";

var _interopRequireDefault = require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/createClass"));

var _userValidation = _interopRequireDefault(require("../helpers/userValidation"));

var userValidate = /*#__PURE__*/function () {
  function userValidate() {
    (0, _classCallCheck2["default"])(this, userValidate);
  }

  (0, _createClass2["default"])(userValidate, null, [{
    key: "validateDomesticWorkers",
    value: function validateDomesticWorkers(req, res, next) {
      var validationResult = _userValidation["default"].validate({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        nid: req.body.nid,
        status: req.body.status,
        type: req.body.type,
        description: req.body.description,
        profile: req.body.profile,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt
      });

      if (!validationResult.error) {
        req.user = validationResult;
        next();
      } else {
        var wrongInput = validationResult.error.details[0].message.replace('"', ' ').replace('"', '');
        return res.status(422).json({
          status: 422,
          error: wrongInput
        });
      }
    }
  }]);
  return userValidate;
}();

var _default = userValidate;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9pbnB1dFZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsidXNlclZhbGlkYXRlIiwicmVxIiwicmVzIiwibmV4dCIsInZhbGlkYXRpb25SZXN1bHQiLCJ1c2VyVmFsaWRhdGlvbiIsInZhbGlkYXRlIiwiZmlyc3ROYW1lIiwiYm9keSIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInBob25lTnVtYmVyIiwibmlkIiwic3RhdHVzIiwidHlwZSIsImRlc2NyaXB0aW9uIiwicHJvZmlsZSIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsImVycm9yIiwidXNlciIsIndyb25nSW5wdXQiLCJkZXRhaWxzIiwibWVzc2FnZSIsInJlcGxhY2UiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLFk7Ozs7Ozs7NENBQzJCQyxHLEVBQUtDLEcsRUFBS0MsSSxFQUFNO0FBQzdDLFVBQU1DLGdCQUFnQixHQUFHQywyQkFBZUMsUUFBZixDQUF3QjtBQUMvQ0MsUUFBQUEsU0FBUyxFQUFFTixHQUFHLENBQUNPLElBQUosQ0FBU0QsU0FEMkI7QUFFL0NFLFFBQUFBLFFBQVEsRUFBRVIsR0FBRyxDQUFDTyxJQUFKLENBQVNDLFFBRjRCO0FBRy9DQyxRQUFBQSxLQUFLLEVBQUVULEdBQUcsQ0FBQ08sSUFBSixDQUFTRSxLQUgrQjtBQUkvQ0MsUUFBQUEsUUFBUSxFQUFFVixHQUFHLENBQUNPLElBQUosQ0FBU0csUUFKNEI7QUFLL0NDLFFBQUFBLFdBQVcsRUFBRVgsR0FBRyxDQUFDTyxJQUFKLENBQVNJLFdBTHlCO0FBTS9DQyxRQUFBQSxHQUFHLEVBQUVaLEdBQUcsQ0FBQ08sSUFBSixDQUFTSyxHQU5pQztBQU8vQ0MsUUFBQUEsTUFBTSxFQUFFYixHQUFHLENBQUNPLElBQUosQ0FBU00sTUFQOEI7QUFRL0NDLFFBQUFBLElBQUksRUFBRWQsR0FBRyxDQUFDTyxJQUFKLENBQVNPLElBUmdDO0FBUy9DQyxRQUFBQSxXQUFXLEVBQUVmLEdBQUcsQ0FBQ08sSUFBSixDQUFTUSxXQVR5QjtBQVUvQ0MsUUFBQUEsT0FBTyxFQUFFaEIsR0FBRyxDQUFDTyxJQUFKLENBQVNTLE9BVjZCO0FBVy9DQyxRQUFBQSxTQUFTLEVBQUVqQixHQUFHLENBQUNPLElBQUosQ0FBU1UsU0FYMkI7QUFZL0NDLFFBQUFBLFNBQVMsRUFBRWxCLEdBQUcsQ0FBQ08sSUFBSixDQUFTVztBQVoyQixPQUF4QixDQUF6Qjs7QUFjQSxVQUFJLENBQUNmLGdCQUFnQixDQUFDZ0IsS0FBdEIsRUFBNkI7QUFDM0JuQixRQUFBQSxHQUFHLENBQUNvQixJQUFKLEdBQVdqQixnQkFBWDtBQUNBRCxRQUFBQSxJQUFJO0FBQ0wsT0FIRCxNQUdPO0FBQ0wsWUFBTW1CLFVBQVUsR0FBR2xCLGdCQUFnQixDQUFDZ0IsS0FBakIsQ0FBdUJHLE9BQXZCLENBQStCLENBQS9CLEVBQWtDQyxPQUFsQyxDQUNoQkMsT0FEZ0IsQ0FDUixHQURRLEVBQ0gsR0FERyxFQUVoQkEsT0FGZ0IsQ0FFUixHQUZRLEVBRUgsRUFGRyxDQUFuQjtBQUdBLGVBQU92QixHQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCWSxJQUFoQixDQUFxQjtBQUMxQlosVUFBQUEsTUFBTSxFQUFFLEdBRGtCO0FBRTFCTSxVQUFBQSxLQUFLLEVBQUVFO0FBRm1CLFNBQXJCLENBQVA7QUFJRDtBQUNGOzs7OztlQUdZdEIsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VyVmFsaWRhdGlvbiBmcm9tICcuLi9oZWxwZXJzL3VzZXJWYWxpZGF0aW9uJ1xuXG5jbGFzcyB1c2VyVmFsaWRhdGUge1xuICBzdGF0aWMgdmFsaWRhdGVEb21lc3RpY1dvcmtlcnMocmVxLCByZXMsIG5leHQpIHtcbiAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0ID0gdXNlclZhbGlkYXRpb24udmFsaWRhdGUoe1xuICAgICAgZmlyc3ROYW1lOiByZXEuYm9keS5maXJzdE5hbWUsXG4gICAgICBsYXN0TmFtZTogcmVxLmJvZHkubGFzdE5hbWUsXG4gICAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXG4gICAgICBwYXNzd29yZDogcmVxLmJvZHkucGFzc3dvcmQsXG4gICAgICBwaG9uZU51bWJlcjogcmVxLmJvZHkucGhvbmVOdW1iZXIsXG4gICAgICBuaWQ6IHJlcS5ib2R5Lm5pZCxcbiAgICAgIHN0YXR1czogcmVxLmJvZHkuc3RhdHVzLFxuICAgICAgdHlwZTogcmVxLmJvZHkudHlwZSxcbiAgICAgIGRlc2NyaXB0aW9uOiByZXEuYm9keS5kZXNjcmlwdGlvbixcbiAgICAgIHByb2ZpbGU6IHJlcS5ib2R5LnByb2ZpbGUsXG4gICAgICBjcmVhdGVkQXQ6IHJlcS5ib2R5LmNyZWF0ZWRBdCxcbiAgICAgIHVwZGF0ZWRBdDogcmVxLmJvZHkudXBkYXRlZEF0LFxuICAgIH0pXG4gICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LmVycm9yKSB7XG4gICAgICByZXEudXNlciA9IHZhbGlkYXRpb25SZXN1bHRcbiAgICAgIG5leHQoKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB3cm9uZ0lucHV0ID0gdmFsaWRhdGlvblJlc3VsdC5lcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2VcbiAgICAgICAgLnJlcGxhY2UoJ1wiJywgJyAnKVxuICAgICAgICAucmVwbGFjZSgnXCInLCAnJylcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuanNvbih7XG4gICAgICAgIHN0YXR1czogNDIyLFxuICAgICAgICBlcnJvcjogd3JvbmdJbnB1dCxcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJWYWxpZGF0ZVxuIl19