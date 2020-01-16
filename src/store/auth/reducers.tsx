import {
    AUTH_CHANGE_USER,
} from './actions'

const defaultState = {
    userProfile:{
        login:'',
        name:'',
        surname:'',
        image:''
    }
}

export const authReducer = (state: any = defaultState, action: any) => {
    console.log(state);
    switch (action.type) {
        case AUTH_CHANGE_USER:
            return {
                ...state,
                userProfile: action.payload
            }
    }
    return state
}
