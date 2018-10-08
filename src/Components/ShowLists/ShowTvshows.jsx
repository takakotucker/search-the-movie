import React, { Component } from 'react'
import CardTvTemplate from '../CardTemplate/CardTvTemplate'
import Api from '../../Services/dataService'
import { Row, Col } from 'antd'
import uuidv4 from 'uuid/v4'

export default class ShowTvshows extends Component {
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
      Api.getTvs(props.category)
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
            <h1 className='title tv'>{ this.props.currentPage } </h1>
          </Col>
        </Row>
        <Row>
          {
            this.state.results.map(item => {
              return (
                <Col className='gutter-row' span={5} offset={1} key={uuidv4()}>
                  <CardTvTemplate
                    name={item.name || null}
                    date={item.first_air_date || null}
                    vote={item.vote_average || null}
                    image={item.poster_path || null}
                    id={item.id}
                    type={'tv'} 
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
