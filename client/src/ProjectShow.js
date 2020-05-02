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
    componentDidMount=()=>{
        this.setState({
            project:this.props.projects.filter(project=>project.id=this.state.id)
        })
    }
    render() {
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