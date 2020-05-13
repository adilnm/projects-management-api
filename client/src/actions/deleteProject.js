export default function (id) {
    return dispatch => {
        fetch('/projects', {
            method: 'DELETE',
            credentials: 'include'
        })
        .then(id=>dispatch({type:'DELETE_PROJECT',preload:id}))
    }
}