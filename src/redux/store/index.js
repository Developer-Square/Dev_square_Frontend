import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import TasksReducer from '../reducer/TasksReducer'
import AuthReducer from '../reducer/AuthReducer'

const store = createStore(
    combineReducers({
        tasks: TasksReducer,
        auth: AuthReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;