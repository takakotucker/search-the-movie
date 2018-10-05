import React, { Component } from 'react'
import { Input, Col, Row, Button } from 'antd'
import { Redirect } from 'react-router-dom'
import AutoComplete from './AutoComplete'
import './SearchForm.css'

export default class SearchForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: '',
      fireRedirect: false
    }
  }

  handleChange = (e) => {
    if (e.target.value.length === 3) {
      this.renderAutoComplete(e.target.value)
    }
    this.setState({ value: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ fireRedirect: true })
  }

  renderAutoComplete(val) {
    return (
      <div>
        <AutoComplete value={val}/>
      </div>
    )
  }

  render () {
    const { fireRedirect, value: query } = this.state
    return (
      <Row>
        <Col span={14} offset={5}>
        <h2>Find your movie or even a person...</h2>
          <form onSubmit={this.handleSubmit}>
            <Input className='input' placeholder='Search for a movie, a tv show or a person...' onChange={this.handleChange} />
            <Button type="primary" icon="search" onClick={this.handleSubmit}>Search</Button>
          </form>
        </Col>
        {
        fireRedirect && query &&
        <Redirect to={`/search/${query}`} push />
        }
      </Row>
    )
  }
}
