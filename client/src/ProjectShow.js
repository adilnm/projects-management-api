import React, { Component } from 'react'
import { connect } from 'react-redux';
import Navbar from './Navbar';

 class ProjectShow extends Component {

    constructor(props){
        super()
        this.state={
            id:props.match.params.projectId,
            project:''
        }
    }

    changeState=()=>{
        this.setState({
            project:this.props.projects.filter(project=>project.id=this.state.id)
        })
    }
    render() {
        const{projects}=this.props
        let project=''
        if (projects.length>0) {
            project=projects.filter(project=>project.id==this.state.id)[0]
            
        }
        return (
            <div>
                <Navbar/>
                <h1>{project.title}</h1>
                <p>{project.content}</p>
            </div>
        )
    }
}

const mstp=state=>{
    return {
        projects:state.projects
    }
}
export default connect (mstp)(ProjectShow)