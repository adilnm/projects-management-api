export default function () {
    return dispatch => {
        fetch('/logout', {
            method: 'DELETE',
            credentials: 'include'
        })
    }
}