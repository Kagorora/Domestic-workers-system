"use strict";

var _interopRequireDefault = require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

/* eslint-disable padded-blocks */

/* eslint-disable arrow-spacing */

/* eslint-disable no-trailing-spaces */

/* eslint-disable no-undef */
_chai["default"].use(_chaiHttp["default"]);

_chai["default"].should();

var houseMaidsTests = function houseMaidsTests() {
  describe('All housemaids testing...', function () {
    it('Should bring all users whose type is "maid"', function (done) {
      _chai["default"].request(_index["default"]).get('/maids').end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
      });

      done();
    });
  });
};

var _default = houseMaidsTests;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9ob3VzZU1haWRzLnRlc3QuanMiXSwibmFtZXMiOlsiY2hhaSIsInVzZSIsImNoYWlIdHRwIiwic2hvdWxkIiwiaG91c2VNYWlkc1Rlc3RzIiwiZGVzY3JpYmUiLCJpdCIsImRvbmUiLCJyZXF1ZXN0IiwiYXBwIiwiZ2V0IiwiZW5kIiwiZXJyIiwicmVzIiwiYm9keSIsInRvIiwiYmUiLCJhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQTs7QUFDQTs7QUFDQTs7QUFOQTs7QUFDQTs7QUFDQTs7QUFDQTtBQUtBQSxpQkFBS0MsR0FBTCxDQUFTQyxvQkFBVDs7QUFDQUYsaUJBQUtHLE1BQUw7O0FBRUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCQyxFQUFBQSxRQUFRLENBQUMsMkJBQUQsRUFBOEIsWUFBSztBQUV6Q0MsSUFBQUEsRUFBRSxDQUFDLDZDQUFELEVBQWdELFVBQUNDLElBQUQsRUFBVTtBQUMxRFAsdUJBQ0dRLE9BREgsQ0FDV0MsaUJBRFgsRUFFR0MsR0FGSCxDQUVPLFFBRlAsRUFHR0MsR0FISCxDQUdPLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ2pCLDBCQUFPQSxHQUFHLENBQUNDLElBQVgsRUFBaUJDLEVBQWpCLENBQW9CQyxFQUFwQixDQUF1QkMsRUFBdkIsQ0FBMEIsUUFBMUI7QUFDRCxPQUxIOztBQU1BVixNQUFBQSxJQUFJO0FBQ0wsS0FSQyxDQUFGO0FBU0QsR0FYTyxDQUFSO0FBWUQsQ0FiRDs7ZUFlZUgsZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHBhZGRlZC1ibG9ja3MgKi9cbi8qIGVzbGludC1kaXNhYmxlIGFycm93LXNwYWNpbmcgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXRyYWlsaW5nLXNwYWNlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbmltcG9ydCBjaGFpLCB7IGV4cGVjdCB9IGZyb20gJ2NoYWknXG5pbXBvcnQgY2hhaUh0dHAgZnJvbSAnY2hhaS1odHRwJ1xuaW1wb3J0IGFwcCBmcm9tICcuLi9pbmRleCdcblxuY2hhaS51c2UoY2hhaUh0dHApXG5jaGFpLnNob3VsZCgpXG5cbmNvbnN0IGhvdXNlTWFpZHNUZXN0cyA9ICgpID0+IHtcbiAgZGVzY3JpYmUoJ0FsbCBob3VzZW1haWRzIHRlc3RpbmcuLi4nLCAoKSA9PntcbiAgXG4gICAgaXQoJ1Nob3VsZCBicmluZyBhbGwgdXNlcnMgd2hvc2UgdHlwZSBpcyBcIm1haWRcIicsIChkb25lKSA9PiB7XG4gICAgICBjaGFpXG4gICAgICAgIC5yZXF1ZXN0KGFwcClcbiAgICAgICAgLmdldCgnL21haWRzJylcbiAgICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICBleHBlY3QocmVzLmJvZHkpLnRvLmJlLmFuKCdvYmplY3QnKVxuICAgICAgICB9KVxuICAgICAgZG9uZSgpXG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG91c2VNYWlkc1Rlc3RzXG4iXX0=