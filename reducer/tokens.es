import { CHANGE_APP_TOKEN, CHANGE_USER_TOKEN } from './actions/actions'

const initialState = {
    AppToken: '',
    UserToken: ''
};

function tokens(state = initialState, action) {
    switch (action.type) {
        case CHANGE_APP_TOKEN:
            console.log(action)
            state['AppToken'] = action.token;
            return state;
        case CHANGE_USER_TOKEN:
            state['UserToken'] = action.token;
            return state;
        default:
            return state;
    }
}

export default tokens;