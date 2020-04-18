export default function(){
    return dispatch=>{
        fetch('http://localhost:3001/currentuser', {
            credentials: 'include',
        })
        .then(res=>res.json())
        .then(user=>{
            dispatch({type:'SIGNUP',preload:user})
        })
    }
}