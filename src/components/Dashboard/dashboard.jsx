import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
//import {Redirect} from 'react-router-dom'
import StoreList from '../Store/StoreList'
class Dashboard extends Component {
    state = {
        location: '',
        filter : ''
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleFilter = (e) => {
        let newfilter = this.state.filter + '/' +  e.target.id
        this.setState({
            filter : newfilter
        })
    }
    render() {

        return (
            <div className="dashboard container">
                <br /><br /><br />
                <span  id = "myspan"> Search By Location</span>
                <div className="input-field">
                    <label htmlFor="location" className = "myspan" >rohini , pitampura etc</label>
                    <input type="text" id="location" onChange={this.handleOnChange} style={{ display: "inline-block" }} />
                </div>
                <br /> <br />
                <div className="input-field myspan">
                    <span> Search By Tags</span> <br /> <br />
                    <button class="waves-effect waves-light btn" id="ac" onClick={this.handleFilter}>AC</button>  <t /> <t />
                    <button class="waves-effect waves-light btn" id="tv" onClick={this.handleFilter}>TV</button>  <t /> <t />
                    <button class="waves-effect waves-light btn" id="canteen" onClick={this.handleFilter}>Canteen</button>
                </div>
                <div>
                    <StoreList filters = {this.state}/>
                </div>
            </div>
        )
    }
}

export default Dashboard;
