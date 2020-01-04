import {
    SETTINGS_CHANGE_LOGIN,
    SETTINGS_CHANGE_NAME,
    SETTINGS_CHANGE_SURNAME,

} from './actions'


const defaultState = {
    login: '',
    name:'',
    surname:''
}

export const settingsReducer = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case SETTINGS_CHANGE_LOGIN:
            return {
                ...state,
                login: action.payload
            }
        case SETTINGS_CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }
        case SETTINGS_CHANGE_SURNAME:
            return {
                ...state,
                surname: action.payload
            }
    }
    return state
}