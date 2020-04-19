export default function(){
    return dispatch=>{
        fetch('/currentuser', {
            credentials: 'include',
        })
        .then(res=>res.json())
        .then(user=>{
            dispatch({type:'SIGNUP',preload:user})
        })
    }
}