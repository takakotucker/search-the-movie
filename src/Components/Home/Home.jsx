import React, { Component } from 'react'
import ShowMulti from '../ShowLists/ShowMulti'


export default class Home extends Component <State> {
  constructor (props) {
    super(props)
  }


  render () {
    return (
      <ShowMulti {...this.props} />
    )
  }

}
