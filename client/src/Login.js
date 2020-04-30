import React, { Component } from 'react'
import { connect } from 'react-redux';
import login from './actions/login';
import Navbar from './Navbar';

class Login extends Component {
    constructor(){
        super()
        this.state={
            username:'',
            password:''
        }
    }

    componentDidMount=()=>{
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.login(this.state)
        this.props.history.push('/')
    }
    render() {
        const {loggedin,history}=this.props
        if (loggedin===undefined) {
            return <div></div>
        }
        return (
            <div>
                {loggedin?history.push('/'):null}
                <Navbar/>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="username" placeholder="Username"/><br/>    
                    <input onChange={this.handleChange} type="text" name="password" placeholder="password"/><br/>    
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

const mstp=state=>{
    return{
        loggedin:state.user.logged_in
    }
}
export default connect(mstp,{login})(Login)