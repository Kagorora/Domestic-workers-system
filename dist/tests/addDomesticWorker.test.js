"use strict";

var _interopRequireDefault = require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _index = _interopRequireDefault(require("../index"));

var _mockData = _interopRequireDefault(require("./mockData"));

_dotenv["default"].config();

_chai["default"].use(_chaiHttp["default"]);

_chai["default"].should();

var addDomesticTests = function addDomesticTests() {
  describe('add domestic Emp', function () {
    it('should be able to register a Domestic worker', function (done) {
      var Signed = _mockData["default"].admin;
      var newDome = _mockData["default"].user1;

      var Token = _jsonwebtoken["default"].sign(Signed, process.env.PRIVATE_KEY, {
        expiresIn: '24h'
      });

      _chai["default"].request(_index["default"]).post('/api/v1/auth/addDomestic').set('token', Token).send(newDome).end(function (err, res) {
        (0, _chai.expect)(res.status).to.equal(201);
        done();
      });
    });
    it('should not be able to register a Domestic worker', function (done) {
      var newDome2 = '';
      var Signed = _mockData["default"].admin;

      var Token = _jsonwebtoken["default"].sign(Signed, process.env.PRIVATE_KEY, {
        expiresIn: '24h'
      });

      _chai["default"].request(_index["default"]).post('/api/v1/auth/addDomestic').set('token', Token).send(newDome2).end(function (err, res) {
        (0, _chai.expect)(res.status).to.equal(422);
        done();
      });
    });
  });
};

module.exports = addDomesticTests;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9hZGREb21lc3RpY1dvcmtlci50ZXN0LmpzIl0sIm5hbWVzIjpbImRvdGVudiIsImNvbmZpZyIsImNoYWkiLCJ1c2UiLCJjaGFpSHR0cCIsInNob3VsZCIsImFkZERvbWVzdGljVGVzdHMiLCJkZXNjcmliZSIsIml0IiwiZG9uZSIsIlNpZ25lZCIsIm1vY2tEYXRhIiwiYWRtaW4iLCJuZXdEb21lIiwidXNlcjEiLCJUb2tlbiIsImp3dCIsInNpZ24iLCJwcm9jZXNzIiwiZW52IiwiUFJJVkFURV9LRVkiLCJleHBpcmVzSW4iLCJyZXF1ZXN0Iiwic2VydmVyIiwicG9zdCIsInNldCIsInNlbmQiLCJlbmQiLCJlcnIiLCJyZXMiLCJzdGF0dXMiLCJ0byIsImVxdWFsIiwibmV3RG9tZTIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQUEsbUJBQU9DLE1BQVA7O0FBQ0FDLGlCQUFLQyxHQUFMLENBQVNDLG9CQUFUOztBQUNBRixpQkFBS0csTUFBTDs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0JDLEVBQUFBLFFBQVEsQ0FBQyxrQkFBRCxFQUFxQixZQUFNO0FBQ2pDQyxJQUFBQSxFQUFFLENBQUMsOENBQUQsRUFBaUQsVUFBQ0MsSUFBRCxFQUFVO0FBQzNELFVBQU1DLE1BQU0sR0FBR0MscUJBQVNDLEtBQXhCO0FBQ0EsVUFBTUMsT0FBTyxHQUFHRixxQkFBU0csS0FBekI7O0FBQ0EsVUFBTUMsS0FBSyxHQUFHQyx5QkFBSUMsSUFBSixDQUFTUCxNQUFULEVBQWlCUSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBN0IsRUFBMEM7QUFBRUMsUUFBQUEsU0FBUyxFQUFFO0FBQWIsT0FBMUMsQ0FBZDs7QUFDQW5CLHVCQUFLb0IsT0FBTCxDQUFhQyxpQkFBYixFQUNHQyxJQURILENBQ1EsMEJBRFIsRUFFR0MsR0FGSCxDQUVPLE9BRlAsRUFFZ0JWLEtBRmhCLEVBR0dXLElBSEgsQ0FHUWIsT0FIUixFQUlHYyxHQUpILENBSU8sVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDakIsMEJBQU9BLEdBQUcsQ0FBQ0MsTUFBWCxFQUFtQkMsRUFBbkIsQ0FBc0JDLEtBQXRCLENBQTRCLEdBQTVCO0FBQ0F2QixRQUFBQSxJQUFJO0FBQ0wsT0FQSDtBQVFELEtBWkMsQ0FBRjtBQWFBRCxJQUFBQSxFQUFFLENBQUMsa0RBQUQsRUFBcUQsVUFBQ0MsSUFBRCxFQUFVO0FBQy9ELFVBQU13QixRQUFRLEdBQUcsRUFBakI7QUFDQSxVQUFNdkIsTUFBTSxHQUFHQyxxQkFBU0MsS0FBeEI7O0FBQ0EsVUFBTUcsS0FBSyxHQUFHQyx5QkFBSUMsSUFBSixDQUFTUCxNQUFULEVBQWlCUSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBN0IsRUFBMEM7QUFBRUMsUUFBQUEsU0FBUyxFQUFFO0FBQWIsT0FBMUMsQ0FBZDs7QUFFQW5CLHVCQUFLb0IsT0FBTCxDQUFhQyxpQkFBYixFQUNHQyxJQURILENBQ1EsMEJBRFIsRUFFR0MsR0FGSCxDQUVPLE9BRlAsRUFFZ0JWLEtBRmhCLEVBR0dXLElBSEgsQ0FHUU8sUUFIUixFQUlHTixHQUpILENBSU8sVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDakIsMEJBQU9BLEdBQUcsQ0FBQ0MsTUFBWCxFQUFtQkMsRUFBbkIsQ0FBc0JDLEtBQXRCLENBQTRCLEdBQTVCO0FBQ0F2QixRQUFBQSxJQUFJO0FBQ0wsT0FQSDtBQVFELEtBYkMsQ0FBRjtBQWNELEdBNUJPLENBQVI7QUE2QkQsQ0E5QkQ7O0FBZ0NBeUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCN0IsZ0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWksIHsgZXhwZWN0IH0gZnJvbSAnY2hhaSdcbmltcG9ydCBjaGFpSHR0cCBmcm9tICdjaGFpLWh0dHAnXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52J1xuaW1wb3J0IHNlcnZlciBmcm9tICcuLi9pbmRleCdcbmltcG9ydCBtb2NrRGF0YSBmcm9tICcuL21vY2tEYXRhJ1xuXG5kb3RlbnYuY29uZmlnKClcbmNoYWkudXNlKGNoYWlIdHRwKVxuY2hhaS5zaG91bGQoKVxuXG5jb25zdCBhZGREb21lc3RpY1Rlc3RzID0gKCkgPT4ge1xuICBkZXNjcmliZSgnYWRkIGRvbWVzdGljIEVtcCcsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIGJlIGFibGUgdG8gcmVnaXN0ZXIgYSBEb21lc3RpYyB3b3JrZXInLCAoZG9uZSkgPT4ge1xuICAgICAgY29uc3QgU2lnbmVkID0gbW9ja0RhdGEuYWRtaW5cbiAgICAgIGNvbnN0IG5ld0RvbWUgPSBtb2NrRGF0YS51c2VyMVxuICAgICAgY29uc3QgVG9rZW4gPSBqd3Quc2lnbihTaWduZWQsIHByb2Nlc3MuZW52LlBSSVZBVEVfS0VZLCB7IGV4cGlyZXNJbjogJzI0aCcgfSlcbiAgICAgIGNoYWkucmVxdWVzdChzZXJ2ZXIpXG4gICAgICAgIC5wb3N0KCcvYXBpL3YxL2F1dGgvYWRkRG9tZXN0aWMnKVxuICAgICAgICAuc2V0KCd0b2tlbicsIFRva2VuKVxuICAgICAgICAuc2VuZChuZXdEb21lKVxuICAgICAgICAuZW5kKChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgIGV4cGVjdChyZXMuc3RhdHVzKS50by5lcXVhbCgyMDEpXG4gICAgICAgICAgZG9uZSgpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBpdCgnc2hvdWxkIG5vdCBiZSBhYmxlIHRvIHJlZ2lzdGVyIGEgRG9tZXN0aWMgd29ya2VyJywgKGRvbmUpID0+IHtcbiAgICAgIGNvbnN0IG5ld0RvbWUyID0gJydcbiAgICAgIGNvbnN0IFNpZ25lZCA9IG1vY2tEYXRhLmFkbWluXG4gICAgICBjb25zdCBUb2tlbiA9IGp3dC5zaWduKFNpZ25lZCwgcHJvY2Vzcy5lbnYuUFJJVkFURV9LRVksIHsgZXhwaXJlc0luOiAnMjRoJyB9KVxuXG4gICAgICBjaGFpLnJlcXVlc3Qoc2VydmVyKVxuICAgICAgICAucG9zdCgnL2FwaS92MS9hdXRoL2FkZERvbWVzdGljJylcbiAgICAgICAgLnNldCgndG9rZW4nLCBUb2tlbilcbiAgICAgICAgLnNlbmQobmV3RG9tZTIpXG4gICAgICAgIC5lbmQoKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgZXhwZWN0KHJlcy5zdGF0dXMpLnRvLmVxdWFsKDQyMilcbiAgICAgICAgICBkb25lKClcbiAgICAgICAgfSlcbiAgICB9KVxuICB9KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZERvbWVzdGljVGVzdHNcbiJdfQ==