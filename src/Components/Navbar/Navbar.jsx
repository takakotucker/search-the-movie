import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'antd/dist/antd.css'
import { Menu, Icon } from 'antd'

export default class Navbar extends Component {
  render () {
    return (
      <Menu mode='horizontal' theme='dark'>
        <Menu.Item >
          <Link to='/'>
            <Icon type='home' /> Home
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='popular'>
            <Icon type='heart-o' /> Popular
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='toprated'>
            <Icon type='star-o' /> Top Rated
          </Link>
        </Menu.Item>
      </Menu>
    )
  }
}
