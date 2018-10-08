import React, { Component } from 'react'
import Api from '../../Services/dataService'
import CardAutoCompleteTemplate from '../CardTemplate/CardAutoCompleteTemplate'


export default class AutoComplete extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: '',
      isOn: props.isOn,
      results: []
    }


  }
  
  handleApiCall (props) {
      Api.getSearch(this.props.value)
          .then(data => {
            this.setState({
              results: data.results
            })
          })
  }

  componentDidMount () {
    this.handleApiCall(this.props.value)
  }


  render () {
    if (this.state.isOn) {
      return (
        <div label="Find a movie">
         <div>
               <div className="media">
                      <div className="media-content">
                       {
                         this.state.results.map(item => {
                           return (
                               <CardAutoCompleteTemplate
                                 name={item.title || item.name || null}
                                 id={item.id}
                                 type={item.media_type || 'movie'} 
                               />
                           )
                         })
                       }
                     </div>     
               </div>
         </div>
       </div>
     )

    } else {
      return <div></div>
    }

  }
}
