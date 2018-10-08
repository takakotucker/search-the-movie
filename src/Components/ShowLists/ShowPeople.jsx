import React, { Component } from 'react'
import CardPersonTemplate from '../CardTemplate/CardPersonTemplate'
import Api from '../../Services/dataService'
import { Row, Col } from 'antd'
import uuidv4 from 'uuid/v4'

export default class ShowPeople extends Component {
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
      Api.getPeople(props.category)
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
            <h1 className='title people'>{ this.props.currentPage } </h1>
          </Col>
        </Row>
        <Row>
          {
            this.state.results.map(item => {
              return (
                <Col className='gutter-row' span={5} offset={1} key={uuidv4()}>
                  <CardPersonTemplate
                    name={item.name || null} // title for a movie, name for TV program it seems.. 
                    image={item.profile_path || null}
                    id={item.id}
                    type={'person'} 
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
