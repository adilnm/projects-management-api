import React, { Component } from 'react'
import { connect } from 'react-redux';
import projects from './actions/projects';
import ProjectsList from './ProjectsList';

class Home extends Component {

    componentDidMount() {
        this.props.projects()
    }
    render() {
        const{allProjects}=this.props
        const l=allProjects.length
        return (
            <div className='row'>
                <div className="col-md-6 text-center">
                    {this.props.allProjects.map(project => <ProjectsList key={project.id} project={project} />)}
                </div>
                <div className="col-md-6 text-center">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">Notifications</h5>
                            {allProjects.slice(l-3,l).map(project=>{
                               return  <p className="card-text">{project.user.name} added a new project</p>
                            })}

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