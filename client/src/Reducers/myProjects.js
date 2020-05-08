export default function(state=[], action){
    switch (action.type) {
        case 'MY_PROJECTS':
            return action.preload
    
        default:
            return state
    }
}