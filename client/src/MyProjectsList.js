import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class extends Component {

    render(){
        const { project } = this.props
        return (
            <div className="card" >
                <div className="card-body">
                <Link to={`/projects/${project.id}`}><h5 className="card-title">{project.title}</h5></Link>
                    <p className="card-text">posted by {project.user.name}</p>
                    <button onClick={this.handleDelet}>Delete</button>
                    <div className="card-footer text-muted">
                        {project.created_at}
                    </div>
                </div>
            </div>
        )
    }
}