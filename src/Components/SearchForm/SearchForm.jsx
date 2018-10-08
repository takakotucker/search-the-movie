import React, { Component } from 'react'
import { Input, Col, Row, Button } from 'antd'
import { Redirect } from 'react-router-dom'
import './SearchForm.css'

export default class SearchForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: '',
      fireRedirect: false,
      autoCompleteOn: false
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value, fireRedirect: false})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ fireRedirect: true })
  }


  render () {
    const { fireRedirect, value: query } = this.state
    return (
      <div>
      <Row>
          <form onSubmit={this.handleSubmit}>
            <Input className='input' placeholder='Find your movie or even a person....' onChange={this.handleChange} />
            <Button type="primary" icon="search" onClick={this.handleSubmit}>Search</Button>
           
          </form>
        {
        fireRedirect && query &&
        <Redirect to={`/search/${query}`} push />
        }
      </Row>
      </div>
    )
  }
}
