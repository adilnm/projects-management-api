import React from 'react'
import { connect } from 'react-redux';
import logout from './actions/logout';

function Logout({logout,history}) {
    return (
        <div>
            {logout()}
            {history.push('/')}
        </div>
    )
}


export default connect(null,{logout})(Logout)

