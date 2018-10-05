/* @flow */
import React,  { Component } from 'react'

type Props = {
  name: string,
  image: number
}


export default class CardProfileImg extends Component {
  render () {
    if (this.props.image !== null) {
      return  <img alt={this.props.name} width='100%' src={`https://image.tmdb.org/t/p/w500${this.props.image}`} />
    } else {
      return  <div className="no_image_holder glyphicon glyphicon-user"></div>  
    }
  }

}