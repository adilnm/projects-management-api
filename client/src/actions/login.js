export default function(user){
    return dispatch=>{
        fetch('/sessions', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({user})
        })
        .then(res=>res.json())
        .then(user=>{
            dispatch({type:'SIGNUP',preload:user})
        })
    }
}