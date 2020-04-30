import React, { Component } from 'react'
import createProject from './actions/createProject';
import { connect } from 'react-redux';
import Navbar from './Navbar';

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
            user_id:this.props.currentUser.user.id
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.createProject(this.state)
    }

    render() {
        const {currentUser, history}=this.props
        if (currentUser===undefined|| Object.keys(currentUser).length===0) {
            return <div></div>
        }
        return (
            <div>
                {!currentUser.logged_in?history.push('/login'):null}
                <Navbar/>
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
        currentUser:state.user
    }
}

const mdtp=(dispatch, ownProps)=>{
    return {
        createProject: project => dispatch(createProject(project, ownProps)),
        };
}
export default connect(mstp,mdtp)(NewProject)
