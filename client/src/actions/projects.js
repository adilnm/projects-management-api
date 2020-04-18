export default function(){
    return dispatch=>{
        fetch('http://localhost:3001/projects', {
            credentials: 'include',
        })
        .then(res=>res.json())
        .then(projects=>{
            dispatch({type:'LOAD_PROJECTS',preload:projects})
        })
    }
}