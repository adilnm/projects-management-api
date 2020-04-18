export default function(state=[], action){
    switch (action.type) {
        case 'LOAD_PROJECTS':
            return action.preload
        
        case 'ADD_PROJECT':
            return [...state,action.preload]
        default:
            return state
            
    }
}