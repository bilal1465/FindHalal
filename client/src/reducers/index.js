import {combineReducers} from 'redux';
import nameReducer from './nameReducer'

const rootReducer = combineReducers({
    restName: nameReducer
})

export default rootReducer;