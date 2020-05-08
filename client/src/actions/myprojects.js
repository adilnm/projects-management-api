export default function(id){
    return dispatch=>{
        fetch('/myprojects', {
            credentials: 'include'
        })
        .then(res=>res.json())
        .then(projects=>{
            dispatch({type:'MY_PROJECTS', preload:projects})
        })
    }
}