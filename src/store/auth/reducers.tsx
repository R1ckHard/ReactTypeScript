import {
    AUTH_CHANGE_LOGIN,
    AUTH_CHANGE_PASSWORD
} from './actions'

const defaultState = {
    login: '',
    password: ''
}

export const authReducer = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case AUTH_CHANGE_LOGIN:
            return {
                ...state,
                login: action.payload
            }
        case AUTH_CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
    }
    return state
}