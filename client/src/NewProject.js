import React, { Component } from 'react'

class NewProject extends Component {
    constructor() {
        super()
        this.state = {
            title:'',
            content:''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
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

export default NewProject
