export const GET_ALL_USERS_START = 'GET_ALL_USERS_START';
export const GET_ALL_USER_FINISH = 'GET_ALL_USER_FINISH';
export const SET_AUTH_USER_PROFILE_START = 'SET_AUTH_USER_PROFILE_START';
export const SET_AUTH_USER_PROFILE_FINISH = 'SET_AUTH_USER_PROFILE_FINISH';

export const setPageUser = () => ({
    type: SET_AUTH_USER_PROFILE_START
})

export const setPageUserFinish = (user: any) => ({
    type: SET_AUTH_USER_PROFILE_FINISH,
    payload: user
})

export const getAllUsersStart = () => ({
    type: GET_ALL_USERS_START,
})

export const GetAllUsersFinish = (user: any) => ({
    type: GET_ALL_USER_FINISH,
    payload:user
})

