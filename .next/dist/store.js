'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPromiseMiddleware = require('redux-promise-middleware');

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = (0, _redux.applyMiddleware)((0, _reduxPromiseMiddleware2.default)(), _reduxThunk2.default, (0, _reduxLogger2.default)());

exports.default = store = (0, _redux.createStore)(reducers, {
  user: {
    name: "Louvre",
    open: "9 h - 19 h",
    like: 0
  },
  tweets: []
}, middleware);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbIm1pZGRsZXdhcmUiLCJzdG9yZSIsInJlZHVjZXJzIiwidXNlciIsIm5hbWUiLCJvcGVuIiwibGlrZSIsInR3ZWV0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBLElBQU1BLGFBQWEsNEJBQWdCLHVDQUFoQix3QkFBa0MsNEJBQWxDLENBQW5COztrQkFFZUMsUUFBUSx3QkFBWUMsUUFBWixFQUFzQjtBQUMzQ0MsUUFBTTtBQUNKQyxVQUFNLFFBREY7QUFFSkMsVUFBTSxZQUZGO0FBR0pDLFVBQU07QUFIRixHQURxQztBQU0zQ0MsVUFBUTtBQU5tQyxDQUF0QixFQU9wQlAsVUFQb0IsQyIsImZpbGUiOiJzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbHVjYXNnZWl0bmVyL2NvZGUvbGVhcm4vZ3JhcGhxbE5leHQvbXVtdXNlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCBwcm9taXNlIGZyb20gJ3JlZHV4LXByb21pc2UtbWlkZGxld2FyZSdcblxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VycydcblxuY29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZShwcm9taXNlKCksIHRodW5rLCBsb2dnZXIoKSlcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2Vycywge1xuICB1c2VyOiB7XG4gICAgbmFtZTogXCJMb3V2cmVcIixcbiAgICBvcGVuOiBcIjkgaCAtIDE5IGhcIixcbiAgICBsaWtlOiAwLFxuICB9LFxuICB0d2VldHM6IFtdLFxufSwgbWlkZGxld2FyZSk7XG4iXX0=