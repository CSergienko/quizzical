
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import questionsReducer from './questionsReducer'
import categoryReducer from './categoryReducer'

const rootReducer = combineReducers({
    categories: categoryReducer,
    questions: questionsReducer,
    routing: routerReducer
})

export default rootReducer/**
 * Created by peterringelmann on 2016/07/12.
 */
