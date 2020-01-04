import {
    REGISTRATION_CHANGE_LOGIN,
    REGISTRATION_CHANGE_PASSWORD,
    REGISTRATION_CHANGE_NAME,
    REGISTRATION_CHANGE_SURNAME

} from './actions'

const defaultState = {
    login: '',
    password: '',
    name:'',
    surname:''
}

export const registrationReducer = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case REGISTRATION_CHANGE_LOGIN:
            return {
                ...state,
                login: action.payload
            }
        case REGISTRATION_CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case REGISTRATION_CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }
        case REGISTRATION_CHANGE_SURNAME:
            return {
                ...state,
                surname: action.payload
            }
    }
    return state
}