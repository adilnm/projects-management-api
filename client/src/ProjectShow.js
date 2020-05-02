import React, { Component } from 'react'
import { connect } from 'react-redux';
import Navbar from './Navbar';

 class ProjectShow extends Component {
    render() {
        console.log(this.props.match.params.projectId)
        return (
            <div>
                <Navbar/>
                jjjj
            </div>
        )
    }
}

const mstp=state=>{
    // project:state.projects.filter(i=>i.id===)
}
export default connect (mstp)(ProjectShow)