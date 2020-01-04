export const AUTH_CHANGE_LOGIN = 'AUTH_CHANGE_LOGIN';
export const AUTH_CHANGE_PASSWORD = 'AUTH_CHANGE_PASSWORD';

export const setAuthLogin = (login:string) => ({
    type: AUTH_CHANGE_LOGIN,
    payload:login
})

export const setAuthPassword = (password:string) => ({
    type: AUTH_CHANGE_PASSWORD,
    payload:password
})