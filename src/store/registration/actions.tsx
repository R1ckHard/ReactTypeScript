export const REGISTRATION_CHANGE_LOGIN = 'AUTH_CHANGE_LOGIN';
export const REGISTRATION_CHANGE_PASSWORD = 'AUTH_CHANGE_PASSWORD';
export const REGISTRATION_CHANGE_NAME = 'AUTH_CHANGE_NAME';
export const REGISTRATION_CHANGE_SURNAME = 'AUTH_CHANGE_SURNAME';

export const setRegistrationLogin = (login: string) => ({
    type: REGISTRATION_CHANGE_LOGIN,
    payload: login
})
export const setRegistrationPassword = (password: string) => ({
    type: REGISTRATION_CHANGE_PASSWORD,
    payload: password
})
export const setRegistrationName = (name: string) => ({
    type: REGISTRATION_CHANGE_NAME,
    payload: name
})
export const setRegistrationSurname = (surname: string) => ({
    type: REGISTRATION_CHANGE_SURNAME,
    payload: surname
})