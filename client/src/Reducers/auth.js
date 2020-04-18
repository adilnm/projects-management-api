export default function(state={},action){
    switch (action.type) {
        case 'SIGNUP':
            return action.preload
      
        default:
            return state
    }
}