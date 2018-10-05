import React, { Component } from 'react'
import Api from '../../Services/dataService'

export default class AutoComplete extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: '',
    }
  }

  handleApiCall = async (val) =>  {
    try {
      Api.getSearch(val)
      .then(data => {
        this.setState({
          results: data.results
        })
      })
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount () {
    this.handleApiCall(this.props)
  }


  render () {
    return (
       <div label="Find a movie">
        <div>
              <div className="media">
                    <div class="media-left">
                        <img width="32" src={`https://image.tmdb.org/t/p/w500/${this.props.option.poster_path}`} />
                    </div>
                    <div className="media-content">
                        { this.props.option.title }
                        <br />
                          Released at { this.props.option.release_date },
                          rated <strong>{ this.props.option.vote_average }</strong>
                    </div>     
              </div>
        </div>
      </div>
    )
  }
}
