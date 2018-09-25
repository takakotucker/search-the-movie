import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home/Home'
import Movie from '../Movie/Movie'
import Showfilms from '../Showfilms/Showfilms'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/popular' render={
      props => (<Showfilms currentPage='Popular Movies and TV Shows' category='popular'{...props} />
    )} />
    <Route exact path='/toprated' render={
      props => (<Showfilms currentPage='Top Rated Movies and TV Shows' category='top_rated' {...props} />
    )} />
    <Route exact path='/search/:query' render={
      props => (<Showfilms currentPage='Search Results' {...props} />
    )} />
    <Route exact path='/result/:id/:type' component={Movie} />
  </Switch>
)

export default Routes
