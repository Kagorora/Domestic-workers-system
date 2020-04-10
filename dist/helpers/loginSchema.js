"use strict";

var _interopRequireDefault = require("/Users/maximekagororaalain/Documents/Domestic-workers-system/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var loginSchema = _joi["default"].object({
  email: _joi["default"].string().email({
    minDomainSegments: 2,
    tlds: {
      allow: ['com', 'net']
    }
  }).required(),
  password: _joi["default"].string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
});

var _default = loginSchema;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2xvZ2luU2NoZW1hLmpzIl0sIm5hbWVzIjpbImxvZ2luU2NoZW1hIiwiSm9pIiwib2JqZWN0IiwiZW1haWwiLCJzdHJpbmciLCJtaW5Eb21haW5TZWdtZW50cyIsInRsZHMiLCJhbGxvdyIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJwYXR0ZXJuIiwiUmVnRXhwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLGdCQUFJQyxNQUFKLENBQVc7QUFDN0JDLEVBQUFBLEtBQUssRUFBRUYsZ0JBQUlHLE1BQUosR0FDSkQsS0FESSxDQUNFO0FBQUVFLElBQUFBLGlCQUFpQixFQUFFLENBQXJCO0FBQXdCQyxJQUFBQSxJQUFJLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVI7QUFBVDtBQUE5QixHQURGLEVBRUpDLFFBRkksRUFEc0I7QUFJN0JDLEVBQUFBLFFBQVEsRUFBRVIsZ0JBQUlHLE1BQUosR0FDUE0sT0FETyxDQUNDLElBQUlDLE1BQUosQ0FBVyxxQkFBWCxDQURELEVBRVBILFFBRk87QUFKbUIsQ0FBWCxDQUFwQjs7ZUFTZVIsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2kgZnJvbSAnQGhhcGkvam9pJ1xuXG5jb25zdCBsb2dpblNjaGVtYSA9IEpvaS5vYmplY3Qoe1xuICBlbWFpbDogSm9pLnN0cmluZygpXG4gICAgLmVtYWlsKHsgbWluRG9tYWluU2VnbWVudHM6IDIsIHRsZHM6IHsgYWxsb3c6IFsnY29tJywgJ25ldCddIH0gfSlcbiAgICAucmVxdWlyZWQoKSxcbiAgcGFzc3dvcmQ6IEpvaS5zdHJpbmcoKVxuICAgIC5wYXR0ZXJuKG5ldyBSZWdFeHAoJ15bYS16QS1aMC05XXszLDMwfSQnKSlcbiAgICAucmVxdWlyZWQoKSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2luU2NoZW1hXG4iXX0=