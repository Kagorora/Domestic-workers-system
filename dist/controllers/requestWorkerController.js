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

var requestWorkerController = /*#__PURE__*/function () {
  function requestWorkerController() {
    (0, _classCallCheck2["default"])(this, requestWorkerController);
  }

  (0, _createClass2["default"])(requestWorkerController, null, [{
    key: "requestWorker",
    value: function () {
      var _requestWorker = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var userId, workerId, checkIfIsClient, userIsMaid, userIsAvailable;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userId = req.user.userId;
                workerId = req.body.workerId;
                _context.next = 4;
                return _models["default"].user.findAll({
                  where: {
                    type: 'maid',
                    id: userId
                  }
                });

              case 4:
                checkIfIsClient = _context.sent;

                if (!(checkIfIsClient.length > 0)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", res.status(403).json({
                  message: 'only clients can make a request'
                }));

              case 7:
                _context.next = 9;
                return _models["default"].user.findAll({
                  where: {
                    type: 'maid',
                    id: workerId
                  }
                });

              case 9:
                userIsMaid = _context.sent;

                if (!(userIsMaid.length <= 0)) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("return", res.status(404).json({
                  message: 'Worker doesnt exist'
                }));

              case 12:
                _context.next = 14;
                return _models["default"].user.findAll({
                  where: {
                    status: 'available',
                    id: workerId
                  }
                });

              case 14:
                userIsAvailable = _context.sent;

                if (!(userIsAvailable.length <= 0)) {
                  _context.next = 17;
                  break;
                }

                return _context.abrupt("return", res.status(404).json({
                  message: 'Worker not available'
                }));

              case 17:
                _models["default"].Client_Requests.create({
                  client_id: userId,
                  domestic_worker_id: workerId
                });

                _models["default"].user.update({
                  status: 'not available'
                }, {
                  where: {
                    id: workerId
                  }
                });

                return _context.abrupt("return", res.status(200).json({
                  message: 'Request made successful'
                }));

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function requestWorker(_x, _x2) {
        return _requestWorker.apply(this, arguments);
      }

      return requestWorker;
    }()
  }]);
  return requestWorkerController;
}();

var _default = requestWorkerController;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9yZXF1ZXN0V29ya2VyQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJyZXF1ZXN0V29ya2VyQ29udHJvbGxlciIsInJlcSIsInJlcyIsInVzZXJJZCIsInVzZXIiLCJ3b3JrZXJJZCIsImJvZHkiLCJtb2RlbHMiLCJmaW5kQWxsIiwid2hlcmUiLCJ0eXBlIiwiaWQiLCJjaGVja0lmSXNDbGllbnQiLCJsZW5ndGgiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInVzZXJJc01haWQiLCJ1c2VySXNBdmFpbGFibGUiLCJDbGllbnRfUmVxdWVzdHMiLCJjcmVhdGUiLCJjbGllbnRfaWQiLCJkb21lc3RpY193b3JrZXJfaWQiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLHVCOzs7Ozs7OzswSEFDdUJDLEcsRUFBS0MsRzs7Ozs7O0FBQ3RCQyxnQkFBQUEsTSxHQUFXRixHQUFHLENBQUNHLEksQ0FBZkQsTTtBQUNBRSxnQkFBQUEsUSxHQUFhSixHQUFHLENBQUNLLEksQ0FBakJELFE7O3VCQUNzQkUsbUJBQU9ILElBQVAsQ0FBWUksT0FBWixDQUFvQjtBQUNoREMsa0JBQUFBLEtBQUssRUFBRTtBQUFFQyxvQkFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0JDLG9CQUFBQSxFQUFFLEVBQUVSO0FBQXBCO0FBRHlDLGlCQUFwQixDOzs7QUFBeEJTLGdCQUFBQSxlOztzQkFHRkEsZUFBZSxDQUFDQyxNQUFoQixHQUF5QixDOzs7OztpREFDcEJYLEdBQUcsQ0FBQ1ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGtCQUFBQSxPQUFPLEVBQUU7QUFBWCxpQkFBckIsQzs7Ozt1QkFHZ0JULG1CQUFPSCxJQUFQLENBQVlJLE9BQVosQ0FBb0I7QUFDM0NDLGtCQUFBQSxLQUFLLEVBQUU7QUFBRUMsb0JBQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCQyxvQkFBQUEsRUFBRSxFQUFFTjtBQUFwQjtBQURvQyxpQkFBcEIsQzs7O0FBQW5CWSxnQkFBQUEsVTs7c0JBR0ZBLFVBQVUsQ0FBQ0osTUFBWCxJQUFxQixDOzs7OztpREFDaEJYLEdBQUcsQ0FBQ1ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGtCQUFBQSxPQUFPLEVBQUU7QUFBWCxpQkFBckIsQzs7Ozt1QkFHcUJULG1CQUFPSCxJQUFQLENBQVlJLE9BQVosQ0FBb0I7QUFDaERDLGtCQUFBQSxLQUFLLEVBQUU7QUFBRUssb0JBQUFBLE1BQU0sRUFBRSxXQUFWO0FBQXVCSCxvQkFBQUEsRUFBRSxFQUFFTjtBQUEzQjtBQUR5QyxpQkFBcEIsQzs7O0FBQXhCYSxnQkFBQUEsZTs7c0JBSUZBLGVBQWUsQ0FBQ0wsTUFBaEIsSUFBMEIsQzs7Ozs7aURBQ3JCWCxHQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxrQkFBQUEsT0FBTyxFQUFFO0FBQVgsaUJBQXJCLEM7OztBQUVUVCxtQ0FBT1ksZUFBUCxDQUF1QkMsTUFBdkIsQ0FBOEI7QUFBRUMsa0JBQUFBLFNBQVMsRUFBRWxCLE1BQWI7QUFBcUJtQixrQkFBQUEsa0JBQWtCLEVBQUVqQjtBQUF6QyxpQkFBOUI7O0FBQ0FFLG1DQUFPSCxJQUFQLENBQVltQixNQUFaLENBQW1CO0FBQUVULGtCQUFBQSxNQUFNLEVBQUU7QUFBVixpQkFBbkIsRUFBZ0Q7QUFBRUwsa0JBQUFBLEtBQUssRUFBRTtBQUFFRSxvQkFBQUEsRUFBRSxFQUFFTjtBQUFOO0FBQVQsaUJBQWhEOztpREFDT0gsR0FBRyxDQUFDWSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsa0JBQUFBLE9BQU8sRUFBRTtBQUFYLGlCQUFyQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUdJaEIsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kZWxzIGZyb20gJy4uL2RiL21vZGVscydcblxuY2xhc3MgcmVxdWVzdFdvcmtlckNvbnRyb2xsZXIge1xuICBzdGF0aWMgYXN5bmMgcmVxdWVzdFdvcmtlcihyZXEsIHJlcykge1xuICAgIGNvbnN0IHsgdXNlcklkIH0gPSByZXEudXNlclxuICAgIGNvbnN0IHsgd29ya2VySWQgfSA9IHJlcS5ib2R5XG4gICAgY29uc3QgY2hlY2tJZklzQ2xpZW50ID0gYXdhaXQgbW9kZWxzLnVzZXIuZmluZEFsbCh7XG4gICAgICB3aGVyZTogeyB0eXBlOiAnbWFpZCcsIGlkOiB1c2VySWQgfSxcbiAgICB9KVxuICAgIGlmIChjaGVja0lmSXNDbGllbnQubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgbWVzc2FnZTogJ29ubHkgY2xpZW50cyBjYW4gbWFrZSBhIHJlcXVlc3QnIH0pXG4gICAgfVxuICAgIC8vIHNlYXJjaCB1c2VyIGluIHRoZSBkYXRhYmFzZVxuICAgIGNvbnN0IHVzZXJJc01haWQgPSBhd2FpdCBtb2RlbHMudXNlci5maW5kQWxsKHtcbiAgICAgIHdoZXJlOiB7IHR5cGU6ICdtYWlkJywgaWQ6IHdvcmtlcklkIH0sXG4gICAgfSlcbiAgICBpZiAodXNlcklzTWFpZC5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ1dvcmtlciBkb2VzbnQgZXhpc3QnIH0pXG4gICAgfVxuXG4gICAgY29uc3QgdXNlcklzQXZhaWxhYmxlID0gYXdhaXQgbW9kZWxzLnVzZXIuZmluZEFsbCh7XG4gICAgICB3aGVyZTogeyBzdGF0dXM6ICdhdmFpbGFibGUnLCBpZDogd29ya2VySWQgfSxcbiAgICB9KVxuXG4gICAgaWYgKHVzZXJJc0F2YWlsYWJsZS5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ1dvcmtlciBub3QgYXZhaWxhYmxlJyB9KVxuICAgIH1cbiAgICBtb2RlbHMuQ2xpZW50X1JlcXVlc3RzLmNyZWF0ZSh7IGNsaWVudF9pZDogdXNlcklkLCBkb21lc3RpY193b3JrZXJfaWQ6IHdvcmtlcklkIH0pXG4gICAgbW9kZWxzLnVzZXIudXBkYXRlKHsgc3RhdHVzOiAnbm90IGF2YWlsYWJsZScgfSwgeyB3aGVyZTogeyBpZDogd29ya2VySWQgfSB9KVxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdSZXF1ZXN0IG1hZGUgc3VjY2Vzc2Z1bCcgfSlcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdFdvcmtlckNvbnRyb2xsZXJcbiJdfQ==