"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = users = function users() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var actions = arguments[1];

  return state;
};

// const museumReducer = (state = initialState, action ) => {
//   switch (action.type) {
//     case "CHANGE_NAME": {
//       state = { ...state, name: action.payload}
//       break;
//     }
//     case "ADD_LIKE": {
//           state = { ...state, like: state.like += 1}
//           break;
//         }
//     case "FETCH_USER_START": {
//       return {...state, fetching: "true"}
//       break;
//     }
//     case "RECEIVE_USER": {
//       console.log(action.payload)
//       return {
//         ...state,
//         fetching: "false",
//         fetched: true,
//         users: action.payload
//       }
//       break;
//     }
//     case "FETCH_USER_ERROR":
//       return {
//         ...state,
//         fetching: "false",
//         error: action.payload
//       }
//       break;
//     }
//   return state;
// };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL3VzZXJzUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJ1c2VycyIsInN0YXRlIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUNlQSxRQUFRLGlCQUF1QjtBQUFBLE1BQXRCQyxLQUFzQix1RUFBaEIsRUFBZ0I7QUFBQSxNQUFaQyxPQUFZOztBQUM1QyxTQUFPRCxLQUFQO0FBQ0QsQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ1c2Vyc1JlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2x1Y2FzZ2VpdG5lci9jb2RlL2xlYXJuL2dyYXBocWxOZXh0L211bXVzZSIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgdXNlcnMgPSAoc3RhdGU9W10sIGFjdGlvbnMpID0+IHtcbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuLy8gY29uc3QgbXVzZXVtUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uICkgPT4ge1xuLy8gICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4vLyAgICAgY2FzZSBcIkNIQU5HRV9OQU1FXCI6IHtcbi8vICAgICAgIHN0YXRlID0geyAuLi5zdGF0ZSwgbmFtZTogYWN0aW9uLnBheWxvYWR9XG4vLyAgICAgICBicmVhaztcbi8vICAgICB9XG4vLyAgICAgY2FzZSBcIkFERF9MSUtFXCI6IHtcbi8vICAgICAgICAgICBzdGF0ZSA9IHsgLi4uc3RhdGUsIGxpa2U6IHN0YXRlLmxpa2UgKz0gMX1cbi8vICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgfVxuLy8gICAgIGNhc2UgXCJGRVRDSF9VU0VSX1NUQVJUXCI6IHtcbi8vICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGZldGNoaW5nOiBcInRydWVcIn1cbi8vICAgICAgIGJyZWFrO1xuLy8gICAgIH1cbi8vICAgICBjYXNlIFwiUkVDRUlWRV9VU0VSXCI6IHtcbi8vICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKVxuLy8gICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgLi4uc3RhdGUsXG4vLyAgICAgICAgIGZldGNoaW5nOiBcImZhbHNlXCIsXG4vLyAgICAgICAgIGZldGNoZWQ6IHRydWUsXG4vLyAgICAgICAgIHVzZXJzOiBhY3Rpb24ucGF5bG9hZFxuLy8gICAgICAgfVxuLy8gICAgICAgYnJlYWs7XG4vLyAgICAgfVxuLy8gICAgIGNhc2UgXCJGRVRDSF9VU0VSX0VSUk9SXCI6XG4vLyAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAuLi5zdGF0ZSxcbi8vICAgICAgICAgZmV0Y2hpbmc6IFwiZmFsc2VcIixcbi8vICAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkXG4vLyAgICAgICB9XG4vLyAgICAgICBicmVhaztcbi8vICAgICB9XG4vLyAgIHJldHVybiBzdGF0ZTtcbi8vIH07XG4iXX0=