/* @flow */
import React, { Component } from 'react'
import { Row, Col, Rate, Tag } from 'antd'
import YouTube from 'react-youtube'
import Utils from '../../Services/utilsService'
import Api from '../../Services/dataService'
import ProfileImg from '../Image/ProfileImg'

import './ServiceContents.css' // To Do: should add it to build process...

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

      Api.getMovieById(idItem)
        .then(data => {
          console.log('dataApi', data)
          this.setState({
            data: data,
            urlImage: data.poster_path || null,
            name: data.title,
            stars: data.vote_average / 2,
            description: data.overview || `Information for movie "${data.name}" is not available`,
            genres: (data.genres: Array<number>),
            release_date: data.release_date,
            videoId: data.videos.results[0] ? data.videos.results[0].key : null
          })
        })
   
  }
  
  renderVideo (videoId) {
    if (videoId !== null) {
      return <div>
        <hr />
        <div className='trailer'>
          <strong> Trailer: </strong>
        </div>
        <YouTube videoId={this.state.videoId} />
      </div>
    } 
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
            {this.renderVideo(this.state.videoId)}
        </Col>
      </Row>
    )
  }
}
