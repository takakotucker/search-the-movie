/* @flow */
import React, { Component } from 'react'
import { Row, Col, Rate, Tag } from 'antd'
import Utils from '../../Services/utilsService'
import Api from '../../Services/dataService'

import './ServiceContents.css' // To Do: should add it to build process...

type State = {
  name: number,
  description: string,
  urlImage: string,
  stars: number,
  genres: array,
  release_date: string,
  videoId: number
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
      videoId: 0
    }
  }

  componentDidMount () {
    const idItem = parseInt(this.props.match.params.id, 10)

    Api.getTvById(idItem)
      .then(data => {
        console.log('dataApi', data)
        this.setState({
          data: data,
          urlImage: data.poster_path || null,
          name: data.name,
          stars: data.vote_average / 2,
          description: data.overview  || `Information for TV propgram "${data.name}" is not available`,
          genres: [],
          release_date: data.release_date,
          videoId: null

        })
      })
   
  }

  renderImage (name, image) {
    if (image !== null) {
      return  <img alt={name} width='100%' src={`https://image.tmdb.org/t/p/w500${image}`} />
    } else {
      return  <div class="no_image_holder glyphicon glyphicon-user"></div>
  
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
          <div className='genere'>
            <span className='genereTitle'>
              <strong>Generes: </strong>
            </span>
            {this.state.genres.map(genere => <Tag color={Utils.randomColor()} key={genere.id}>{genere.name}</Tag>)}
          </div>
          <Rate className='rate' value={this.state.stars} />
        </Col>
      </Row>
    )
  }
}
