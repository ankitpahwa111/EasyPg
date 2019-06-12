import React, { Component } from 'react'
import StoreSummary from './StoreSummary';
import firebase from 'firebase';
import firebaseConfig from '../config'

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StoreList extends Component {

  constructor() {
    super()
    this.app = firebase.initializeApp(firebaseConfig)
    this.database = this.app.database().ref().child('pgs').orderByKey();
    this.state={
      pg : {},
      myarray=[],
    }
  }
  componentDidMount(){
    this.database.on('value',snap=>{
      this.setState({
        pg : snap.val()
      })
     this.state.myarray[0]=pg.pg1;
     this.state.myarray[1]=pg.pg2;
     this.state.myarray[2]=pg.pg3;

    })
  }
  
  render() {
    return (
      <div className="store-list section">
        {this.state.myarray && this.state.myarray.map(pg => {
         
          return <StoreSummary pg={pg} />

        }



        )

        }

      </div>
    )
  }

}

export default StoreList