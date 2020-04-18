export default function(state=[], action){
    switch (action.type) {
        case 'LOAD_PROJECTS':
            return action.preload
    
        default:
            return state
            
    }
}