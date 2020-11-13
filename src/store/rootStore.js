import thunk from "redux-thunk"
import { applyMiddleware, createStore, compose, combineReducers } from "redux"

import { spotifyReducer } from "./spotify"


const rootReducer = combineReducers({
    spotify: spotifyReducer
})


const configureStore = () => {
	const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

	const middlewares = [
		thunk,
	]

	const store = createStore(
		rootReducer,
		composeEnhancer(applyMiddleware(...middlewares))
	)

	return store
}


export const store = configureStore()
