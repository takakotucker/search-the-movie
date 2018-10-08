import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'antd/dist/antd.css'
import { Menu, Icon } from 'antd'

const SubMenu = Menu.SubMenu;

export default class Navbar extends Component {
  render () {
    return (
      <div>
      <Menu mode='horizontal' theme='dark'>
        <Menu.Item >
          <Link to='/'>
            <Icon type='home' /> Home
          </Link>
        </Menu.Item>
        <SubMenu title="Movies">
          <Menu.Item key="setting:1">
            <Link to='/movies/popular'>  
              <Icon type='heart-o' /> Popular
            </Link>
          </Menu.Item>
          <Menu.Item key="setting:2">
            <Link to='/movies/top-rated'>  
              <Icon type='heart-o' /> Top rated
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu title="TV Shows">
          <Menu.Item key="setting:3">
            <Link to='/tv/popular'>  
              <Icon type='heart-o' /> Popular
            </Link>
          </Menu.Item>
          <Menu.Item key="setting:4">
            <Link to='/tv/top-rated'>  
              <Icon type='heart-o' /> Top rated
            </Link>
          </Menu.Item>
        </SubMenu>
          <Menu.Item key="setting:5">
            <Link to='/people'>  
             People
            </Link>
          </Menu.Item>
      </Menu>
      </div>
    )
  }
}
