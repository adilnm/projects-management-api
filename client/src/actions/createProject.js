export default function(project, ownProps){
    return dispatch=>{
        fetch('/projects', {
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
            ownProps.history.push('/');
        })
    }
}