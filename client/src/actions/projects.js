export default function(){
    return dispatch=>{
        fetch('/projects', {
            credentials: 'include',
        })
        .then(res=>res.json())
        .then(projects=>{
            dispatch({type:'LOAD_PROJECTS',preload:projects})
        })
    }
}