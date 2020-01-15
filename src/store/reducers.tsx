import {combineReducers} from 'redux'
import { authReducer } from './auth/reducers';
import { settingsReducer } from './settings/reducers';

export default combineReducers({
    auth:authReducer,
    settings:settingsReducer
})
