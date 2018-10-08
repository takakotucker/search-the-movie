import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home/Home'
import Movie from '../Contents/Movie'
import Tv from '../Contents/Tv'
import Person from '../Contents/Person'

import ShowMovies from '../ShowLists/ShowMovies'
import ShowTvshows from '../ShowLists/ShowTvshows'
import ShowPeople from '../ShowLists/ShowPeople'
import ShowMulti from '../ShowLists/ShowMulti'


const Routes = () => (
  <Switch>
    <Route exact path='/'  render={
      props => (<Home currentPage='Popular Movies' category='popular' {...props} />
    )} />

    {/* routes for Movies */}
    <Route exact path='/movies' render={
      props => (<ShowMovies currentPage='Popular Movies' category='popular'{...props} />
    )} />
    <Route exact path='/movies/popular' render={
      props => (<ShowMovies currentPage='Popular Movies' category='popular'{...props} />
    )} />
    <Route exact path='/movies/top-rated' render={
      props => (<ShowMovies currentPage='Top rated Movies' category='top_rated'{...props} />
    )} />

    {/* routes for TV shows */}
    <Route exact path='/tv' 
      render={  props => (<ShowTvshows currentPage='Popular TV Shows' category='popular' {...props} />
    )} />
    <Route exact path='/tv/popular' 
      render={  props => (<ShowTvshows currentPage='Popular TV Shows' category='popular' {...props} />
    )} />
    <Route exact path='/tv/top-rated' 
      render={  props => (<ShowTvshows currentPage='Top rated TV Shows' category='top_rated' {...props} />
    )} />


    {/* routes for TV people */}
    <Route exact path='/people' 
      render={  props => (<ShowPeople currentPage='Popular people' category='popular' {...props} />
    )} />

    <Route exact path='/search/:query' render={
      props => (<ShowMulti currentPage='Search Results' {...props} />
    )} />

    <Route exact path='/search/movie/:id' component={Movie} />
    <Route exact path='/search/tv/:id' component={Tv} />
    <Route exact path='/search/person/:id' component={Person} />

  </Switch>
)

export default Routes
