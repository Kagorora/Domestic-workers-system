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

var GetHouseMaids = /*#__PURE__*/function () {
  function GetHouseMaids() {
    (0, _classCallCheck2["default"])(this, GetHouseMaids);
  }

  (0, _createClass2["default"])(GetHouseMaids, null, [{
    key: "viewAll",
    value: function () {
      var _viewAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var allMaids;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].user.findAll({
                  where: {
                    type: 'maid'
                  }
                });

              case 3:
                allMaids = _context.sent;
                return _context.abrupt("return", res.status(200).json({
                  status: 200,
                  message: 'All Maids',
                  allMaids: allMaids
                }));

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(500).json({
                  Error: _context.t0
                }));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function viewAll(_x, _x2) {
        return _viewAll.apply(this, arguments);
      }

      return viewAll;
    }()
  }]);
  return GetHouseMaids;
}();

var _default = GetHouseMaids;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9ob3VzZWtlZXBlcnNDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkdldEhvdXNlTWFpZHMiLCJyZXEiLCJyZXMiLCJtb2RlbHMiLCJ1c2VyIiwiZmluZEFsbCIsIndoZXJlIiwidHlwZSIsImFsbE1haWRzIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsYTs7Ozs7Ozs7b0hBQ2lCQyxHLEVBQUtDLEc7Ozs7Ozs7O3VCQUVDQyxtQkFBT0MsSUFBUCxDQUFZQyxPQUFaLENBQW9CO0FBQ3pDQyxrQkFBQUEsS0FBSyxFQUFFO0FBQUVDLG9CQUFBQSxJQUFJLEVBQUU7QUFBUjtBQURrQyxpQkFBcEIsQzs7O0FBQWpCQyxnQkFBQUEsUTtpREFHQ04sR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUQsa0JBQUFBLE1BQU0sRUFBRSxHQUFWO0FBQWVFLGtCQUFBQSxPQUFPLEVBQUUsV0FBeEI7QUFBcUNILGtCQUFBQSxRQUFRLEVBQVJBO0FBQXJDLGlCQUFyQixDOzs7OztpREFFQU4sR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUUsa0JBQUFBLEtBQUs7QUFBUCxpQkFBckIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFLRVosYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2RlbHMgZnJvbSAnLi4vZGIvbW9kZWxzJ1xuXG5jbGFzcyBHZXRIb3VzZU1haWRzIHtcbiAgc3RhdGljIGFzeW5jIHZpZXdBbGwocmVxLCByZXMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYWxsTWFpZHMgPSBhd2FpdCBtb2RlbHMudXNlci5maW5kQWxsKHtcbiAgICAgICAgd2hlcmU6IHsgdHlwZTogJ21haWQnIH0sXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3RhdHVzOiAyMDAsIG1lc3NhZ2U6ICdBbGwgTWFpZHMnLCBhbGxNYWlkcyB9KVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgRXJyb3I6IGVyciB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHZXRIb3VzZU1haWRzXG4iXX0=