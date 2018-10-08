import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Routes from './Components/Routes/Routes'
import SearchForm from './Components/SearchForm/SearchForm'

export default class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <SearchForm />
        <Routes />
      </div>
    )
  }
}
