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

var _models = _interopRequireDefault(require("../db/models"));

var addDomWorkController = /*#__PURE__*/function () {
  function addDomWorkController() {
    (0, _classCallCheck2["default"])(this, addDomWorkController);
  }

  (0, _createClass2["default"])(addDomWorkController, null, [{
    key: "addDomesticWorker",
    value: function () {
      var _addDomesticWorker = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var _req$body, firstName, lastName, phoneNumber, nid, status, type, description, userExist, newDomesticEmployee;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, phoneNumber = _req$body.phoneNumber, nid = _req$body.nid, status = _req$body.status, type = _req$body.type, description = _req$body.description;
                _context.next = 3;
                return _models["default"].user.findAll({
                  where: {
                    nid: nid
                  }
                });

              case 3:
                userExist = _context.sent;

                if (!(userExist.length > 0)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", res.status(409).json({
                  status: 409,
                  message: 'User already exists'
                }));

              case 6:
                _context.next = 8;
                return _models["default"].user.create({
                  firstName: firstName,
                  lastName: lastName,
                  phoneNumber: phoneNumber,
                  nid: nid,
                  status: status,
                  type: type,
                  description: description
                });

              case 8:
                newDomesticEmployee = _context.sent;
                return _context.abrupt("return", res.status(201).json({
                  status: 201,
                  message: 'Domestic employee successfully registered',
                  data: newDomesticEmployee
                }));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function addDomesticWorker(_x, _x2) {
        return _addDomesticWorker.apply(this, arguments);
      }

      return addDomesticWorker;
    }()
  }]);
  return addDomWorkController;
}();

exports["default"] = addDomWorkController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9hZGREb21lc3RpY1dvcmtlci5qcyJdLCJuYW1lcyI6WyJhZGREb21Xb3JrQ29udHJvbGxlciIsInJlcSIsInJlcyIsImJvZHkiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInBob25lTnVtYmVyIiwibmlkIiwic3RhdHVzIiwidHlwZSIsImRlc2NyaXB0aW9uIiwibW9kZWxzIiwidXNlciIsImZpbmRBbGwiLCJ3aGVyZSIsInVzZXJFeGlzdCIsImxlbmd0aCIsImpzb24iLCJtZXNzYWdlIiwiY3JlYXRlIiwibmV3RG9tZXN0aWNFbXBsb3llZSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQSxvQjs7Ozs7Ozs7OEhBQ1lDLEcsRUFBS0MsRzs7Ozs7Ozs0QkFHOUJELEdBQUcsQ0FBQ0UsSSxFQUROQyxTLGFBQUFBLFMsRUFBV0MsUSxhQUFBQSxRLEVBQVVDLFcsYUFBQUEsVyxFQUFhQyxHLGFBQUFBLEcsRUFBS0MsTSxhQUFBQSxNLEVBQVFDLEksYUFBQUEsSSxFQUFNQyxXLGFBQUFBLFc7O3VCQUUvQkMsbUJBQU9DLElBQVAsQ0FBWUMsT0FBWixDQUFvQjtBQUFFQyxrQkFBQUEsS0FBSyxFQUFFO0FBQUVQLG9CQUFBQSxHQUFHLEVBQUhBO0FBQUY7QUFBVCxpQkFBcEIsQzs7O0FBQWxCUSxnQkFBQUEsUzs7c0JBQ0ZBLFNBQVMsQ0FBQ0MsTUFBVixHQUFtQixDOzs7OztpREFDZGQsR0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQlMsSUFBaEIsQ0FBcUI7QUFDMUJULGtCQUFBQSxNQUFNLEVBQUUsR0FEa0I7QUFFMUJVLGtCQUFBQSxPQUFPLEVBQUU7QUFGaUIsaUJBQXJCLEM7Ozs7dUJBS3lCUCxtQkFBT0MsSUFBUCxDQUFZTyxNQUFaLENBQW1CO0FBQ25EZixrQkFBQUEsU0FBUyxFQUFUQSxTQURtRDtBQUN4Q0Msa0JBQUFBLFFBQVEsRUFBUkEsUUFEd0M7QUFDOUJDLGtCQUFBQSxXQUFXLEVBQVhBLFdBRDhCO0FBQ2pCQyxrQkFBQUEsR0FBRyxFQUFIQSxHQURpQjtBQUNaQyxrQkFBQUEsTUFBTSxFQUFOQSxNQURZO0FBQ0pDLGtCQUFBQSxJQUFJLEVBQUpBLElBREk7QUFDRUMsa0JBQUFBLFdBQVcsRUFBWEE7QUFERixpQkFBbkIsQzs7O0FBQTVCVSxnQkFBQUEsbUI7aURBSUNsQixHQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCUyxJQUFoQixDQUFxQjtBQUMxQlQsa0JBQUFBLE1BQU0sRUFBRSxHQURrQjtBQUUxQlUsa0JBQUFBLE9BQU8sRUFBRSwyQ0FGaUI7QUFHMUJHLGtCQUFBQSxJQUFJLEVBQUVEO0FBSG9CLGlCQUFyQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZGVscyBmcm9tICcuLi9kYi9tb2RlbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGFkZERvbVdvcmtDb250cm9sbGVyIHtcbiAgc3RhdGljIGFzeW5jIGFkZERvbWVzdGljV29ya2VyKHJlcSwgcmVzKSB7XG4gICAgY29uc3Qge1xuICAgICAgZmlyc3ROYW1lLCBsYXN0TmFtZSwgcGhvbmVOdW1iZXIsIG5pZCwgc3RhdHVzLCB0eXBlLCBkZXNjcmlwdGlvbixcbiAgICB9ID0gcmVxLmJvZHlcbiAgICBjb25zdCB1c2VyRXhpc3QgPSBhd2FpdCBtb2RlbHMudXNlci5maW5kQWxsKHsgd2hlcmU6IHsgbmlkIH0gfSlcbiAgICBpZiAodXNlckV4aXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7XG4gICAgICAgIHN0YXR1czogNDA5LFxuICAgICAgICBtZXNzYWdlOiAnVXNlciBhbHJlYWR5IGV4aXN0cycsXG4gICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBuZXdEb21lc3RpY0VtcGxveWVlID0gYXdhaXQgbW9kZWxzLnVzZXIuY3JlYXRlKHtcbiAgICAgIGZpcnN0TmFtZSwgbGFzdE5hbWUsIHBob25lTnVtYmVyLCBuaWQsIHN0YXR1cywgdHlwZSwgZGVzY3JpcHRpb24sXG4gICAgfSlcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih7XG4gICAgICBzdGF0dXM6IDIwMSxcbiAgICAgIG1lc3NhZ2U6ICdEb21lc3RpYyBlbXBsb3llZSBzdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZCcsXG4gICAgICBkYXRhOiBuZXdEb21lc3RpY0VtcGxveWVlLFxuICAgIH0pXG4gIH1cbn1cbiJdfQ==