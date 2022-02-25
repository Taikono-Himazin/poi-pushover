
// Action Type
export const CHANGE_APP_TOKEN = 'CHANGE_APP_TOKEN'
export const CHANGE_USER_TOKEN = 'CHANGE_USER_TOKEN'

// Action creator
export function changeAppToken(token) {
    return {
        type: CHANGE_APP_TOKEN,
        token
    };
}
export function changeUserToken(token) {
    return {
        type: CHANGE_USER_TOKEN,
        token
    };
}