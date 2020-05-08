import React, { Component } from 'react'
import { connect } from 'react-redux';
import Navbar from './Navbar';
import ProjectsList from './ProjectsList';

class MyProjects extends Component {
    render() {
        return (
            <div>
                {<Navbar/>}
                {this.props.myProjects.map(project => <ProjectsList key={project.id} project={project} />)}
            </div>
        )
    }
}

const mstp=state=>{
    return{
        myProjects:state.myProjects
    }
}

export default connect(mstp)(MyProjects)