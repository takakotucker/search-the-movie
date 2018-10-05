/* @flow */
import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Api from '../../Services/dataService'
import ProfileImg from '../Image/ProfileImg'

import './ServiceContents.css'

type State = {
  name: number,
  biography: string,
  urlImage: string
}

export default class Movie extends Component <State> {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      biography: '',
      urlImage: ''
    }
  }

  componentDidMount () {
    const idItem = parseInt(this.props.match.params.id, 10)

      Api.getPersonById(idItem)
      .then(data => {
        console.log('dataApi', data)
        this.setState({
          data: data,
          urlImage: data.poster_path || data.profile_path,
          name: data.name,
          place_of_birth: data.place_of_birth,
          biography: data.biography || `Information for ${data.name} is not available`
        })
      })
   
  }

  render () {
    return (
      <Row theme='dark'>
        <Col span={8} offset={1} >
          <ProfileImg name={this.state.name} image={this.state.urlImage}/>
        </Col>
        <Col theme='dark' span={12} offset={1}>
          <h1>{this.state.name}</h1>
          <hr />
             <div>
               <strong> Place of birth: </strong>
              {this.state.place_of_birth}
              </div>
             <div> 
              <strong> Biography: </strong>
              {this.state.biography}
             </div>
          <hr />
        </Col>
      </Row>
    )
  }
}
