export default function(state=[], action){
    switch (action.type) {
        case 'LOAD_PROJECTS':
            return action.preload.reverse()
        
        case 'ADD_PROJECT':
            return [action.preload,...state]
        default:
            return state
            
    }
}