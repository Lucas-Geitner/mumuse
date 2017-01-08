import { applyMiddleware, createStore } from "redux";

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducer from './reducers'

const middleware = applyMiddleware(promise(), thunk, logger())

export default store = createStore(reducers, {
  user: {
    name: "Louvre",
    open: "9 h - 19 h",
    like: 0,
  },
  tweets: [],
}, middleware);
