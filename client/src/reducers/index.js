import {combineReducers} from 'redux';
import nameReducer from './nameReducer'

const rootReducer = combineReducers({
    sendInfo: nameReducer    
})

export default rootReducer;