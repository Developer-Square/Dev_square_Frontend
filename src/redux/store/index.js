import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import TasksReducer from '../reducer/TasksReducer'
import AuthReducer from '../reducer/AuthReducer'
import UsersReducer from '../reducer/UsersReducer'
import ProjectsReducer from '../reducer/ProjectsReducer'

const store = createStore(
    combineReducers({
        tasks: TasksReducer,
        auth: AuthReducer,
        users: UsersReducer,
        projects: ProjectsReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;