export default function (state = {}, action) {
    switch (action.type) {
        case 'SIGNUP':
            return action.preload
        case 'LOGOUT':
            return {logged_in:false}

        default:
            return state
    }
}