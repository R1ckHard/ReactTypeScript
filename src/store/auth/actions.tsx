export const AUTH_CHANGE_USER = 'AUTH_CHANGE_USER';

export const setAuthUser = (user: any) => ({
    type: AUTH_CHANGE_USER,
    payload:user
})

