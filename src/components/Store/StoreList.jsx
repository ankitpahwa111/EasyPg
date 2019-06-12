import React, { Component } from 'react'
import StoreSummary from './StoreSummary';
import firebase from 'firebase';
import firebaseConfig from '../config'

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StoreList extends Component {

  constructor() {
    super()
    if (!firebase.apps.length) {
      this.app = firebase.initializeApp(firebaseConfig);
      this.database = this.app.database().ref().child('pgs').orderByKey();
    }

    this.state = {
      pg: {},
      myarray: [],
    }
  }
  componentDidMount() {
    this.database.on('value', snap => {
      this.setState({
        pg: snap.val()
      })
      let arr = []
      arr[0] = this.state.pg.pg1;
      arr[1] = this.state.pg.pg2;
      arr[2] = this.state.pg.pg3;
      let location = this.props.filters.location;
      console.log(this.props)
      let newarray = arr.filter((pg) => pg.location === location)
      if (location == '') {
        this.setState({
          myarray: arr
        })
      }
      else {
        this.setState({
          myarray: newarray
        })
      }

    })
  }



  render() {
    let location = this.props.filters.location;
    let tags = this.props.filters.filter.split('/')
    tags.shift()
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    const uniquetags = tags.filter(onlyUnique)
    let newarray = this.state.myarray.filter((pg) => pg.location === location)
    let arr = []
    if (location != '') {
      arr = newarray
    }
    let good = arr;
    if (location == '') { arr = this.state.myarray; good = this.state.myarray }

    let final = good.filter((pg) => {
      console.log(pg)
      for (let i = 0; i < uniquetags.length; i++) {
        if (uniquetags[i] != pg.features.first && uniquetags[i] != pg.features.second) return false;
      }
      return true;
    })
    if (uniquetags.length != 0) {
      arr = final;
    }
    return (
      <div className="store-list section">
        {arr && arr.map((pg) => {
          return <StoreSummary pg={pg} />

        }
        )

        }

      </div>
    )
  }

}

export default StoreList