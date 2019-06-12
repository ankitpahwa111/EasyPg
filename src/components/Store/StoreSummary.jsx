import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
class StoreSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        

    }



    render() {
        return (

            <div class="mynewcard">
                <div class="col s6 m7">
                    <div class="card">
                        <div class="card-image">
                            <img src="http://www.kirayedaar.in/uploads/f3a0934efa437aef4be37e416b01f3b9.jpg" />
                            <span class="card-title">{this.props.pg.name}</span>
                        </div>
                        <div class="card-content">
                            <li>PG For {this.props.pg.gender_allowed}</li>
                            <li>Located in {this.props.pg.location}</li>
                            <li>Capacity : {this.props.pg.capacity}</li>
                        </div>
                        <div class="card-action">
                            <Link to={'/pg?name=' + this.props.pg.name}>More</Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


}

export default (StoreSummary);