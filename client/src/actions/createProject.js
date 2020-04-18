export default function(project){
    return dispatch=>{
        fetch('http://localhost:3001/projects', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({project})
        })
        .then(res=>res.json())
        .then(user=>{
            dispatch({type:'ADD_PROJECT',preload:user})
        })
    }
}