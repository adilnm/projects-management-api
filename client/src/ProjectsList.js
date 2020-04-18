import React from 'react'

export default function projectsList(props) {
    const { project } = props
    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <p className="card-text">posted by {project.user.name}</p>
                <div className="card-footer text-muted">
                    {project.created_at}
                </div>
            </div>
        </div>
    )
}
