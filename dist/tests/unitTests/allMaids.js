"use strict";

var _interopRequireWildcard = require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/asyncToGenerator"));

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../../index"));

var _housekeepersController = _interopRequireDefault(require("../../controllers/housekeepersController"));

_chai["default"].use(_chaiHttp["default"]);

var maidsUnitTest = function maidsUnitTest() {
  describe('Single Unit Testing', function () {
    it('Should check the functionality of viewAll method', function (done) {
      _chai["default"].request(_index["default"]).get('/api/v1/maids').end( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var getAll;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _housekeepersController["default"].viewAll();

              case 2:
                getAll = _context.sent;
                console.log('The maids', getAll); //   assert.equal(getAll)

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));

      done();
    });
  });
};

var _default = maidsUnitTest;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0cy91bml0VGVzdHMvYWxsTWFpZHMuanMiXSwibmFtZXMiOlsiY2hhaSIsInVzZSIsImNoYWlIdHRwIiwibWFpZHNVbml0VGVzdCIsImRlc2NyaWJlIiwiaXQiLCJkb25lIiwicmVxdWVzdCIsImFwcCIsImdldCIsImVuZCIsIkdldEhvdXNlTWFpZHMiLCJ2aWV3QWxsIiwiZ2V0QWxsIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0FBLGlCQUFLQyxHQUFMLENBQVNDLG9CQUFUOztBQUdBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQkMsRUFBQUEsUUFBUSxDQUFDLHFCQUFELEVBQXdCLFlBQU07QUFDcENDLElBQUFBLEVBQUUsQ0FBQyxrREFBRCxFQUFxRCxVQUFDQyxJQUFELEVBQVU7QUFDL0ROLHVCQUNHTyxPQURILENBQ1dDLGlCQURYLEVBRUdDLEdBRkgsQ0FFTyxlQUZQLEVBR0dDLEdBSEgsNkZBR087QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFa0JDLG1DQUFjQyxPQUFkLEVBRmxCOztBQUFBO0FBRUdDLGdCQUFBQSxNQUZIO0FBR0hDLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCRixNQUF6QixFQUhHLENBSUw7O0FBSks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FIUDs7QUFTQVAsTUFBQUEsSUFBSTtBQUNMLEtBWEMsQ0FBRjtBQVlELEdBYk8sQ0FBUjtBQWNELENBZkQ7O2VBaUJlSCxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWksIHsgZXhwZWN0LCBhc3NlcnQgfSBmcm9tICdjaGFpJ1xuaW1wb3J0IGNoYWlIdHRwIGZyb20gJ2NoYWktaHR0cCdcbmltcG9ydCBhcHAgZnJvbSAnLi4vLi4vaW5kZXgnXG5pbXBvcnQgR2V0SG91c2VNYWlkcyBmcm9tICcuLi8uLi9jb250cm9sbGVycy9ob3VzZWtlZXBlcnNDb250cm9sbGVyJ1xuXG5cbmNoYWkudXNlKGNoYWlIdHRwKVxuXG5cbmNvbnN0IG1haWRzVW5pdFRlc3QgPSAoKSA9PiB7XG4gIGRlc2NyaWJlKCdTaW5nbGUgVW5pdCBUZXN0aW5nJywgKCkgPT4ge1xuICAgIGl0KCdTaG91bGQgY2hlY2sgdGhlIGZ1bmN0aW9uYWxpdHkgb2Ygdmlld0FsbCBtZXRob2QnLCAoZG9uZSkgPT4ge1xuICAgICAgY2hhaVxuICAgICAgICAucmVxdWVzdChhcHApXG4gICAgICAgIC5nZXQoJy9hcGkvdjEvbWFpZHMnKVxuICAgICAgICAuZW5kKGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnVGhlIE1haWRzIFRlc3QnLCB0eXBlb2YgKEdldEhvdXNlTWFpZHMudmlld0FsbCkpXG4gICAgICAgICAgY29uc3QgZ2V0QWxsID0gYXdhaXQgR2V0SG91c2VNYWlkcy52aWV3QWxsKClcbiAgICAgICAgICBjb25zb2xlLmxvZygnVGhlIG1haWRzJywgZ2V0QWxsKVxuICAgICAgICAvLyAgIGFzc2VydC5lcXVhbChnZXRBbGwpXG4gICAgICAgIH0pXG4gICAgICBkb25lKClcbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWlkc1VuaXRUZXN0XG4iXX0=