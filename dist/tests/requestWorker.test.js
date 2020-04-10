"use strict";

var _interopRequireDefault = require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

_chai["default"].use(_chaiHttp["default"]);

_chai["default"].should();

var RequestWorkerTests = function RequestWorkerTests() {
  describe('Client requesting for a domestic Worker', function () {
    it('It should return 401 for when no token provided', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/clientRequest').end(function (err, res) {
        (0, _chai.expect)(res.status).to.equal(401);
        done();
      });
    });
    it('It should return 401 for invalid token', function (done) {
      var Token = 'token';

      _chai["default"].request(_index["default"]).post('/api/v1/clientRequest').set('token', Token).end(function (err, res) {
        (0, _chai.expect)(res.status).to.equal(401);
        done();
      });
    });
  });
};

module.exports = RequestWorkerTests;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9yZXF1ZXN0V29ya2VyLnRlc3QuanMiXSwibmFtZXMiOlsiY2hhaSIsInVzZSIsImNoYWlIdHRwIiwic2hvdWxkIiwiUmVxdWVzdFdvcmtlclRlc3RzIiwiZGVzY3JpYmUiLCJpdCIsImRvbmUiLCJyZXF1ZXN0IiwiYXBwIiwicG9zdCIsImVuZCIsImVyciIsInJlcyIsInN0YXR1cyIsInRvIiwiZXF1YWwiLCJUb2tlbiIsInNldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBQSxpQkFBS0MsR0FBTCxDQUFTQyxvQkFBVDs7QUFDQUYsaUJBQUtHLE1BQUw7O0FBRUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQy9CQyxFQUFBQSxRQUFRLENBQUMseUNBQUQsRUFBNEMsWUFBTTtBQUN4REMsSUFBQUEsRUFBRSxDQUFDLGlEQUFELEVBQW9ELFVBQUNDLElBQUQsRUFBVTtBQUM5RFAsdUJBQ0dRLE9BREgsQ0FDV0MsaUJBRFgsRUFFR0MsSUFGSCxDQUVRLHVCQUZSLEVBR0dDLEdBSEgsQ0FHTyxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNqQiwwQkFBT0EsR0FBRyxDQUFDQyxNQUFYLEVBQW1CQyxFQUFuQixDQUFzQkMsS0FBdEIsQ0FBNEIsR0FBNUI7QUFDQVQsUUFBQUEsSUFBSTtBQUNMLE9BTkg7QUFPRCxLQVJDLENBQUY7QUFTQUQsSUFBQUEsRUFBRSxDQUFDLHdDQUFELEVBQTJDLFVBQUNDLElBQUQsRUFBVTtBQUNyRCxVQUFNVSxLQUFLLEdBQUcsT0FBZDs7QUFDQWpCLHVCQUNHUSxPQURILENBQ1dDLGlCQURYLEVBRUdDLElBRkgsQ0FFUSx1QkFGUixFQUdHUSxHQUhILENBR08sT0FIUCxFQUdnQkQsS0FIaEIsRUFJR04sR0FKSCxDQUlPLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ2pCLDBCQUFPQSxHQUFHLENBQUNDLE1BQVgsRUFBbUJDLEVBQW5CLENBQXNCQyxLQUF0QixDQUE0QixHQUE1QjtBQUNBVCxRQUFBQSxJQUFJO0FBQ0wsT0FQSDtBQVFELEtBVkMsQ0FBRjtBQVdELEdBckJPLENBQVI7QUFzQkQsQ0F2QkQ7O0FBd0JBWSxNQUFNLENBQUNDLE9BQVAsR0FBaUJoQixrQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaSwgeyBleHBlY3QgfSBmcm9tICdjaGFpJ1xuaW1wb3J0IGNoYWlIdHRwIGZyb20gJ2NoYWktaHR0cCdcbmltcG9ydCBhcHAgZnJvbSAnLi4vaW5kZXgnXG5cbmNoYWkudXNlKGNoYWlIdHRwKVxuY2hhaS5zaG91bGQoKVxuXG5jb25zdCBSZXF1ZXN0V29ya2VyVGVzdHMgPSAoKSA9PiB7XG4gIGRlc2NyaWJlKCdDbGllbnQgcmVxdWVzdGluZyBmb3IgYSBkb21lc3RpYyBXb3JrZXInLCAoKSA9PiB7XG4gICAgaXQoJ0l0IHNob3VsZCByZXR1cm4gNDAxIGZvciB3aGVuIG5vIHRva2VuIHByb3ZpZGVkJywgKGRvbmUpID0+IHtcbiAgICAgIGNoYWlcbiAgICAgICAgLnJlcXVlc3QoYXBwKVxuICAgICAgICAucG9zdCgnL2FwaS92MS9jbGllbnRSZXF1ZXN0JylcbiAgICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICBleHBlY3QocmVzLnN0YXR1cykudG8uZXF1YWwoNDAxKVxuICAgICAgICAgIGRvbmUoKVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgaXQoJ0l0IHNob3VsZCByZXR1cm4gNDAxIGZvciBpbnZhbGlkIHRva2VuJywgKGRvbmUpID0+IHtcbiAgICAgIGNvbnN0IFRva2VuID0gJ3Rva2VuJ1xuICAgICAgY2hhaVxuICAgICAgICAucmVxdWVzdChhcHApXG4gICAgICAgIC5wb3N0KCcvYXBpL3YxL2NsaWVudFJlcXVlc3QnKVxuICAgICAgICAuc2V0KCd0b2tlbicsIFRva2VuKVxuICAgICAgICAuZW5kKChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgIGV4cGVjdChyZXMuc3RhdHVzKS50by5lcXVhbCg0MDEpXG4gICAgICAgICAgZG9uZSgpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgfSlcbn1cbm1vZHVsZS5leHBvcnRzID0gUmVxdWVzdFdvcmtlclRlc3RzXG4iXX0=