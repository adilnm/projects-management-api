export default function (id) {
    return dispatch => {
        fetch('/projects', {
            method: 'DELETE',
            credentials: 'include'
        })
        
    }
}