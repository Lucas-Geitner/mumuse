
export default users = (state=[], actions) => {
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
