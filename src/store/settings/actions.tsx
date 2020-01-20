export const SETTINGS_CHANGE_LOGIN = 'AUTH_CHANGE_LOGIN';
export const SETTINGS_CHANGE_NAME = 'AUTH_CHANGE_NAME';
export const SETTINGS_CHANGE_SURNAME = 'AUTH_CHANGE_SURNAME';
export  const  SETTINGS_CHANGE_IMAGE = 'SETTINGS_CHANGE_IMAGE'

export const setRegistrationLogin = (login: string) => ({
    type: SETTINGS_CHANGE_LOGIN,
    payload: login
})
export const setRegistrationName = (name: string) => ({
    type: SETTINGS_CHANGE_NAME,
    payload: name
})
export const setRegistrationSurname = (surname: string) => ({
    type: SETTINGS_CHANGE_SURNAME,
    payload: surname
})
export const setRegistrationImage= (image: string) => ({
    type: SETTINGS_CHANGE_IMAGE,
    payload: image
})
