import React from 'react'
import {Link} from 'react-router-dom';

export default function projectsList(props) {
    const { project } = props
    return (
        <div className="card" >
            <div className="card-body">
            <Link to={`/${project.id}`}><h5 className="card-title">{project.title}</h5></Link>
                <p className="card-text">posted by {project.user.name}</p>
                <div className="card-footer text-muted">
                    {project.created_at}
                </div>
            </div>
        </div>
    )
}
