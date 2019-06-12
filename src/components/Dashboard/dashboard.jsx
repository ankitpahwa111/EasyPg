import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
//import {Redirect} from 'react-router-dom'
import StoreList from '../Store/StoreList'
class Dashboard extends Component {
    state = {
        location : ''
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {

        return (
            <div className="dashboard container">
                <div className="input-field">
                    <label htmlFor="location" className="white-text">Search By Location of PG</label>
                    <input type="text" id="location" onChange={this.handleOnChange} className="white-text" />
                </div>
                <div>
                    <StoreList/>
                </div>
            </div>
        )
    }
}

export default Dashboard;
