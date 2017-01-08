'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/lucasgeitner/code/learn/graphqlNext/mumuse/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('/Users/lucasgeitner/code/learn/graphqlNext/mumuse/node_modules/react/react.js');

var _react4 = _interopRequireDefault(_react3);

var _reactRedux = require('react-redux');

var _store = require('../store.js');

var _store2 = _interopRequireDefault(_store);

require('isomorphic-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const reducer = function(state, action) {
//   if (action.type === "INC") {
//     return state + action.payload
//   }
//   if (action.type === "DEC") {
//     return state - action.payload
//   }
//
//   return state
// }

// const initialState = {
//   fetching: false,
//   fetched: false,
//   users: [],
//   error: null,
// }


//
// store.subscribe(() => {
//   console.log("store changed", store.getState())
// })
//
// store.dispatch({
//   type: "FETCH_USER_START",
//   payload: fetch("http://rest.learncode.academy/api/learncode/friends")
// })
exports.default = function () {
  return _react2.default.createElement(
    _reactRedux.Provider,
    null,
    _react2.default.createElement(
      'div',
      { className: 'elegance' },
      'Hello World '
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBUUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtrQkFwQ2U7QUFBQSxTQUFNO0FBQUE7QUFBQTtBQUVyQjtBQUFBO0FBQUEsUUFBSyxXQUFZLFVBQWpCO0FBQUE7QUFBQTtBQUZxQixHQUFOO0FBQUEsQyIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbHVjYXNnZWl0bmVyL2NvZGUvbGVhcm4vZ3JhcGhxbE5leHQvbXVtdXNlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vc3RvcmUuanNcIlxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiA8UHJvdmlkZXI+XG5cbjxkaXYgY2xhc3NOYW1lID0gXCJlbGVnYW5jZVwiPlxuICBIZWxsbyBXb3JsZCA8L2Rpdj5cbjwvUHJvdmlkZXI+XG5cbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcblxuLy8gY29uc3QgcmVkdWNlciA9IGZ1bmN0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbi8vICAgaWYgKGFjdGlvbi50eXBlID09PSBcIklOQ1wiKSB7XG4vLyAgICAgcmV0dXJuIHN0YXRlICsgYWN0aW9uLnBheWxvYWRcbi8vICAgfVxuLy8gICBpZiAoYWN0aW9uLnR5cGUgPT09IFwiREVDXCIpIHtcbi8vICAgICByZXR1cm4gc3RhdGUgLSBhY3Rpb24ucGF5bG9hZFxuLy8gICB9XG4vL1xuLy8gICByZXR1cm4gc3RhdGVcbi8vIH1cblxuLy8gY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuLy8gICBmZXRjaGluZzogZmFsc2UsXG4vLyAgIGZldGNoZWQ6IGZhbHNlLFxuLy8gICB1c2VyczogW10sXG4vLyAgIGVycm9yOiBudWxsLFxuLy8gfVxuXG5cblxuLy9cbi8vIHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKFwic3RvcmUgY2hhbmdlZFwiLCBzdG9yZS5nZXRTdGF0ZSgpKVxuLy8gfSlcbi8vXG4vLyBzdG9yZS5kaXNwYXRjaCh7XG4vLyAgIHR5cGU6IFwiRkVUQ0hfVVNFUl9TVEFSVFwiLFxuLy8gICBwYXlsb2FkOiBmZXRjaChcImh0dHA6Ly9yZXN0LmxlYXJuY29kZS5hY2FkZW15L2FwaS9sZWFybmNvZGUvZnJpZW5kc1wiKVxuLy8gfSlcbiJdfQ==