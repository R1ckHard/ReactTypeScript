import {
    GET_ALL_USER_FINISH,
    SET_AUTH_USER_PROFILE_FINISH
} from './actions'

const defaultState = {
    userProfile: {
        login: '',
        name: '',
        surname: '',
        image: ''
    }
}

export const authReducer = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case GET_ALL_USER_FINISH:
            return {
                ...state,
                allUsers: action.payload
            }
        case SET_AUTH_USER_PROFILE_FINISH:
            return {
                ...state,
                userProfile: action.payload
            }
    }
    return state
}
