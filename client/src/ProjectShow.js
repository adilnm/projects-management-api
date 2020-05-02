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
    shouldComponentUpdate=()=>{
        this.setState({
            project:this.props.projects.filter(project=>project.id=this.state.id)
        })
    }
    render() {
        console.log(this.state.project)
        return (
            <div>
                <Navbar/>
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