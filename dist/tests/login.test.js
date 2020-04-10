"use strict";

var _interopRequireDefault = require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

_chai["default"].use(_chaiHttp["default"]);

var expect = _chai["default"].expect;

var testLogin = function testLogin() {
  describe('Test /auth/login', function () {
    it('should return 222 if invalid email', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/auth/login').send({
        email: 'william.com',
        password: 'password'
      }).end(function (err, res) {
        expect(res.body.status).to.equal(222);
        expect(res.body).to.have.property('error');
      });

      done();
    });
    it('should return 401 if invalid password or email passed', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/auth/login').send({
        email: 'nobody@gmail.com',
        password: 'password'
      }).end(function (err, res) {
        expect(res.body.status).to.equal(401);
        expect(res.body.result).to.be.equal('Invalid email or password!');
      });

      done();
    });
    it('should return 200 if valid password and email passed', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/auth/login').send({
        email: 'weod@gmail.com',
        password: 'sad123'
      }).end(function (err, res) {
        expect(res.body.status).to.be.equal(200);
      });

      done();
    });
  });
};

var _default = testLogin;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9sb2dpbi50ZXN0LmpzIl0sIm5hbWVzIjpbImNoYWkiLCJ1c2UiLCJjaGFpSHR0cCIsImV4cGVjdCIsInRlc3RMb2dpbiIsImRlc2NyaWJlIiwiaXQiLCJkb25lIiwicmVxdWVzdCIsImFwcCIsInBvc3QiLCJzZW5kIiwiZW1haWwiLCJwYXNzd29yZCIsImVuZCIsImVyciIsInJlcyIsImJvZHkiLCJzdGF0dXMiLCJ0byIsImVxdWFsIiwiaGF2ZSIsInByb3BlcnR5IiwicmVzdWx0IiwiYmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBQSxpQkFBS0MsR0FBTCxDQUFTQyxvQkFBVDs7SUFDUUMsTSxHQUFXSCxnQixDQUFYRyxNOztBQUNSLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJDLEVBQUFBLFFBQVEsQ0FBQyxrQkFBRCxFQUFxQixZQUFNO0FBQ2pDQyxJQUFBQSxFQUFFLENBQUMsb0NBQUQsRUFBdUMsVUFBQ0MsSUFBRCxFQUFVO0FBQ2pEUCx1QkFDR1EsT0FESCxDQUNXQyxpQkFEWCxFQUVHQyxJQUZILENBRVEsb0JBRlIsRUFHR0MsSUFISCxDQUdRO0FBQ0pDLFFBQUFBLEtBQUssRUFBRSxhQURIO0FBRUpDLFFBQUFBLFFBQVEsRUFBRTtBQUZOLE9BSFIsRUFPR0MsR0FQSCxDQU9PLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ2pCYixRQUFBQSxNQUFNLENBQUNhLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxNQUFWLENBQU4sQ0FBd0JDLEVBQXhCLENBQTJCQyxLQUEzQixDQUFpQyxHQUFqQztBQUNBakIsUUFBQUEsTUFBTSxDQUFDYSxHQUFHLENBQUNDLElBQUwsQ0FBTixDQUFpQkUsRUFBakIsQ0FBb0JFLElBQXBCLENBQXlCQyxRQUF6QixDQUFrQyxPQUFsQztBQUNELE9BVkg7O0FBV0FmLE1BQUFBLElBQUk7QUFDTCxLQWJDLENBQUY7QUFjQUQsSUFBQUEsRUFBRSxDQUFDLHVEQUFELEVBQTBELFVBQUNDLElBQUQsRUFBVTtBQUNwRVAsdUJBQ0dRLE9BREgsQ0FDV0MsaUJBRFgsRUFFR0MsSUFGSCxDQUVRLG9CQUZSLEVBR0dDLElBSEgsQ0FHUTtBQUNKQyxRQUFBQSxLQUFLLEVBQUUsa0JBREg7QUFFSkMsUUFBQUEsUUFBUSxFQUFFO0FBRk4sT0FIUixFQU9HQyxHQVBILENBT08sVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDakJiLFFBQUFBLE1BQU0sQ0FBQ2EsR0FBRyxDQUFDQyxJQUFKLENBQVNDLE1BQVYsQ0FBTixDQUF3QkMsRUFBeEIsQ0FBMkJDLEtBQTNCLENBQWlDLEdBQWpDO0FBQ0FqQixRQUFBQSxNQUFNLENBQUNhLEdBQUcsQ0FBQ0MsSUFBSixDQUFTTSxNQUFWLENBQU4sQ0FBd0JKLEVBQXhCLENBQTJCSyxFQUEzQixDQUE4QkosS0FBOUIsQ0FBb0MsNEJBQXBDO0FBQ0QsT0FWSDs7QUFXQWIsTUFBQUEsSUFBSTtBQUNMLEtBYkMsQ0FBRjtBQWNBRCxJQUFBQSxFQUFFLENBQUMsc0RBQUQsRUFBeUQsVUFBQ0MsSUFBRCxFQUFVO0FBQ25FUCx1QkFDR1EsT0FESCxDQUNXQyxpQkFEWCxFQUVHQyxJQUZILENBRVEsb0JBRlIsRUFHR0MsSUFISCxDQUdRO0FBQ0pDLFFBQUFBLEtBQUssRUFBRSxnQkFESDtBQUVKQyxRQUFBQSxRQUFRLEVBQUU7QUFGTixPQUhSLEVBT0dDLEdBUEgsQ0FPTyxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNqQmIsUUFBQUEsTUFBTSxDQUFDYSxHQUFHLENBQUNDLElBQUosQ0FBU0MsTUFBVixDQUFOLENBQXdCQyxFQUF4QixDQUEyQkssRUFBM0IsQ0FBOEJKLEtBQTlCLENBQW9DLEdBQXBDO0FBQ0QsT0FUSDs7QUFVQWIsTUFBQUEsSUFBSTtBQUNMLEtBWkMsQ0FBRjtBQWFELEdBMUNPLENBQVI7QUEyQ0QsQ0E1Q0Q7O2VBNkNlSCxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSdcbmltcG9ydCBjaGFpSHR0cCBmcm9tICdjaGFpLWh0dHAnXG5pbXBvcnQgYXBwIGZyb20gJy4uL2luZGV4J1xuXG5jaGFpLnVzZShjaGFpSHR0cClcbmNvbnN0IHsgZXhwZWN0IH0gPSBjaGFpXG5jb25zdCB0ZXN0TG9naW4gPSAoKSA9PiB7XG4gIGRlc2NyaWJlKCdUZXN0IC9hdXRoL2xvZ2luJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgcmV0dXJuIDIyMiBpZiBpbnZhbGlkIGVtYWlsJywgKGRvbmUpID0+IHtcbiAgICAgIGNoYWlcbiAgICAgICAgLnJlcXVlc3QoYXBwKVxuICAgICAgICAucG9zdCgnL2FwaS92MS9hdXRoL2xvZ2luJylcbiAgICAgICAgLnNlbmQoe1xuICAgICAgICAgIGVtYWlsOiAnd2lsbGlhbS5jb20nLFxuICAgICAgICAgIHBhc3N3b3JkOiAncGFzc3dvcmQnLFxuICAgICAgICB9KVxuICAgICAgICAuZW5kKChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgIGV4cGVjdChyZXMuYm9keS5zdGF0dXMpLnRvLmVxdWFsKDIyMilcbiAgICAgICAgICBleHBlY3QocmVzLmJvZHkpLnRvLmhhdmUucHJvcGVydHkoJ2Vycm9yJylcbiAgICAgICAgfSlcbiAgICAgIGRvbmUoKVxuICAgIH0pXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gNDAxIGlmIGludmFsaWQgcGFzc3dvcmQgb3IgZW1haWwgcGFzc2VkJywgKGRvbmUpID0+IHtcbiAgICAgIGNoYWlcbiAgICAgICAgLnJlcXVlc3QoYXBwKVxuICAgICAgICAucG9zdCgnL2FwaS92MS9hdXRoL2xvZ2luJylcbiAgICAgICAgLnNlbmQoe1xuICAgICAgICAgIGVtYWlsOiAnbm9ib2R5QGdtYWlsLmNvbScsXG4gICAgICAgICAgcGFzc3dvcmQ6ICdwYXNzd29yZCcsXG4gICAgICAgIH0pXG4gICAgICAgIC5lbmQoKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgZXhwZWN0KHJlcy5ib2R5LnN0YXR1cykudG8uZXF1YWwoNDAxKVxuICAgICAgICAgIGV4cGVjdChyZXMuYm9keS5yZXN1bHQpLnRvLmJlLmVxdWFsKCdJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkIScpXG4gICAgICAgIH0pXG4gICAgICBkb25lKClcbiAgICB9KVxuICAgIGl0KCdzaG91bGQgcmV0dXJuIDIwMCBpZiB2YWxpZCBwYXNzd29yZCBhbmQgZW1haWwgcGFzc2VkJywgKGRvbmUpID0+IHtcbiAgICAgIGNoYWlcbiAgICAgICAgLnJlcXVlc3QoYXBwKVxuICAgICAgICAucG9zdCgnL2FwaS92MS9hdXRoL2xvZ2luJylcbiAgICAgICAgLnNlbmQoe1xuICAgICAgICAgIGVtYWlsOiAnd2VvZEBnbWFpbC5jb20nLFxuICAgICAgICAgIHBhc3N3b3JkOiAnc2FkMTIzJyxcbiAgICAgICAgfSlcbiAgICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICBleHBlY3QocmVzLmJvZHkuc3RhdHVzKS50by5iZS5lcXVhbCgyMDApXG4gICAgICAgIH0pXG4gICAgICBkb25lKClcbiAgICB9KVxuICB9KVxufVxuZXhwb3J0IGRlZmF1bHQgdGVzdExvZ2luXG4iXX0=