
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import questionsReducer from './questionsReducer'

const rootReducer = combineReducers({
    questions: questionsReducer,
    routing: routerReducer
})

export default rootReducer/**
 * Created by peterringelmann on 2016/07/12.
 */
