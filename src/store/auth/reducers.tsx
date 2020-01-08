import {
    AUTH_CHANGE_USER,
} from './actions'

const defaultState = {
    userProfile:''
}

export const authReducer = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case AUTH_CHANGE_USER:
            return {
                ...state,
                userProfile: action.payload
            }
    }
    return state
}