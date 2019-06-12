import React, { Component } from 'react'
//import {connect} from 'react-redux';
//import {signIn} from '../../Store/authactions';
import {Redirect} from 'react-router-dom'
class Signin extends Component {
    state = {
        username: '',
        password: ''
    };
    
    render() {
        
        
        
        return (
            <div className="container">
                <br/>
                <br/>
                <form onSubmit={this.handleOnSubmit} className="Myform">
                    <h5 className="dark-grey text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="username" className="white-text">Username</label>
                        <input type="text" id="username"  className="white-text" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password" className="white-text">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-field">
                        <button className="btn z-depth-0 pink darken-1">Login</button>
                    </div>
                   
                </form>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>
        )
    }
}

export default (Signin)
