import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import TasksReducer from '../reducer/TasksReducer'

const store = createStore(
    combineReducers({
        tasks: TasksReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;