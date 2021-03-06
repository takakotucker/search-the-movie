import React, { Component } from 'react'
import CardTemplate from '../CardTemplate/CardTemplate'
import Api from '../../Services/dataService.js'
import { Row, Col } from 'antd'
import uuidv4 from 'uuid/v4'
import './Showfilms.css'

export default class Showfilms extends Component {
  constructor (props) {
    super(props)
    this.state = {
      results: []
    }
  }

  handleApiCall (props) {
    if (props.match.params.query) {
      Api.getSearch(props.match.params.query)
          .then(data => {
            this.setState({
              results: data.results
            })
          })
    } else {
      Api.getMovies(props.category)
          .then(data => {
            this.setState({
              results: data.results
            })
          })
    }
  }

  componentWillReceiveProps (nextProps) {
    this.handleApiCall(nextProps)
  }

  componentDidMount () {
    this.handleApiCall(this.props)
  }

  render () {
    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            <h1 className='title'>{ this.props.currentPage } </h1>
          </Col>
        </Row>
        <Row gutter={24}>
          {
            this.state.results.map(item => {
              return (
                <Col className='gutter-row' span={5} offset={1} key={uuidv4()}>
                  <CardTemplate
                    name={item.title || item.name} // title for a movie, name for TV program it seems.. 
                    date={item.release_date || null} // actors search does not provide release date..
                    vote={item.vote_average || null}
                    image={item.poster_path || item.profile_path || null} // poster for movie, profile for person
                    id={item.id}
                    type={item.media_type || 'discover'} 
                  />
                </Col>
              )
            })
          }
        </Row>
      </div>
    )
  }
}
