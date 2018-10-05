/* @flow */
import React, { Component } from 'react'
import { Row, Col, Rate, Tag } from 'antd'
import Api from '../../Services/dataService'

import './ServiceContents.css'

type State = {
  name: number,
  description: string,
  urlImage: string,
  stars: number,
  genres: array,
  release_date: string,
  videoId: number,
  media_type: string
}

export default class Movie extends Component <State> {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      urlImage: '',
      stars: 0,
      genres: [],
      release_date: '',
      videoId: 0,
      media_type: ''
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
          description: data.biography || `Information for ${data.name} is not available`,
          genres: [],
          videoId: null
        })
      })
   
  }

  renderImage (name, image) {
    if (image !== null) {
      return  <img alt={name} width='100%' src={`https://image.tmdb.org/t/p/w500${image}`} />
    } else {
      return  <div className="no_image_holder glyphicon glyphicon-user"></div>
  
    }
  }
  

  render () {
    return (
      <Row theme='dark'>
        <Col span={8} offset={1} >
         {this.renderImage(this.state.name, this.state.urlImage)}
        </Col>
        <Col theme='dark' span={12} offset={1}>
          <h1>{this.state.name}</h1>
          <hr />
          <strong> Description: </strong>
          <div>{this.state.description}</div>
          <hr />
        </Col>
      </Row>
    )
  }
}
