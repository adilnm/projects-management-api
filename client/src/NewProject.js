import React, { Component } from 'react'
import createProject from './actions/createProject';
import { connect } from 'react-redux';

class NewProject extends Component {
    constructor() {
        super()
        this.state = {
            title:'',
            content:'',
            user_id:''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
            user_id:this.props.currentUser.id
        })
    }

    handleSubmit=(e)=>{
        this.props.createProject(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="title" placeholder="Title"/><br/>
                    <textarea onChange={this.handleChange} name="content" cols="30" rows="10" placeholder="Content"></textarea><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

const mstp=(state)=>{
    return{
        currentUser:state.user.user
    }
}
export default connect(mstp,{createProject})(NewProject)
