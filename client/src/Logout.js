import React from 'react'
import { connect } from 'react-redux';
import logout from './actions/logout';

function Logout({logout}) {
    return (
        <div>
            {logout()}
        </div>
    )
}


export default connect(null,{logout})(Logout)

