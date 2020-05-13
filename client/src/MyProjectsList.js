import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import deleteProject from './actions/deleteProject';

class MyProjectsLists extends Component {

    handleDelete=(e)=>{

    }
    render(){
        const { project } = this.props
        return (
            <div className="card" >
                <div className="card-body">
                <Link to={`/projects/${project.id}`}><h5 className="card-title">{project.title}</h5></Link>
                    <p className="card-text">posted by {project.user.name}</p>
                    <button onClick={this.handleDelete}>Delete</button>
                    <div className="card-footer text-muted">
                        {project.created_at}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null,{ deleteProject})(MyProjectsLists)
