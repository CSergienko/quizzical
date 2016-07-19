
import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// Apply thunk middleware to make async actions easier to handle
let finalCreateStore = compose(
  applyMiddleware(thunk, logger())
)(createStore)

/**
 * Configures and instantiates a new store
 * @param {object} initialState set initial state of redux application store
 * @return {int} Redux store decorated with thunk middleware
 */
export default function configureStore(initialState = { questions: [], categories: [] }) {
    return finalCreateStore(rootReducer, initialState)
}/**
 * Created by peterringelmann on 2016/07/12.
 */
