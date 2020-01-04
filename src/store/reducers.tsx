import {combineReducers} from 'redux'
import { authReducer } from './auth/reducers';
import { registrationReducer } from './registration/reducers';
import { settingsReducer } from './settings/reducers';

export default combineReducers({
    auth:authReducer,
    registration:registrationReducer,
    settings:settingsReducer
})