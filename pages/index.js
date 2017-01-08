import react from 'react'
import { Provider } from 'react-redux'
import store from "../store.js"

export default () => <Provider>

<div className = "elegance">
  Hello World </div>
</Provider>

import 'isomorphic-fetch'

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
