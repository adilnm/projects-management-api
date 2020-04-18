import React, { Component } from 'react'
import { connect } from 'react-redux';
import projects from './actions/projects';
import ProjectsList from './ProjectsList';

class Home extends Component {

    componentDidMount() {
        this.props.projects()
    }
    render() {
        return (
            <div className='row'>
                <div className="col-md-6 text-center">
                    {this.props.allProjects.map(project => <ProjectsList key={project.id} project={project} />)}
                </div>
                <div className="col-md-6 text-center">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mstp = (state) => {
    return {
        allProjects: state.projects
    }
}

export default connect(mstp, { projects })(Home)