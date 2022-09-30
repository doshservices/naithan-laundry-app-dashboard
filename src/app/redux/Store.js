import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import RootReducer from './reducers/RootReducer'

const initialState = {}
const middlewares = [thunk]
let devtools = (x) => x

if (
    process.env.NODE_ENV !== 'production' &&
    process.browser &&
    window.__REDUX_DEVTOOLS_EXTENSION__
) {
    devtools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

export const Store = createStore(
    RootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
    // compose(applyMiddleware(...middlewares), devtools)
)

// import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'
// // import rootReducer from "./reducers";
// import RootReducer from './reducers/RootReducer'

// const initialState = {}

// const middleware = [thunk]

// export default Store = createStore(
//     RootReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// )
