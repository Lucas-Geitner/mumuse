'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _usersReducer = require('./usersReducer');

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _tweetsReducer = require('./tweetsReducer');

var _tweetsReducer2 = _interopRequireDefault(_tweetsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  tweets: _tweetsReducer2.default,
  user: user
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbInR3ZWV0cyIsInVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBOzs7O0FBQ0E7Ozs7OztrQkFFZSw0QkFBZ0I7QUFDN0JBLGlDQUQ2QjtBQUU3QkM7QUFGNkIsQ0FBaEIsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbHVjYXNnZWl0bmVyL2NvZGUvbGVhcm4vZ3JhcGhxbE5leHQvbXVtdXNlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCJcblxuaW1wb3J0IHVzZXJzIGZyb20gJy4vdXNlcnNSZWR1Y2VyJ1xuaW1wb3J0IHR3ZWV0cyBmcm9tICcuL3R3ZWV0c1JlZHVjZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHR3ZWV0cyxcbiAgdXNlcixcbn0pXG4iXX0=