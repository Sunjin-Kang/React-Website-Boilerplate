import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { browserHistory } from 'react-router'
import HomePage from './HomePage'

class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route name='home' exact path='/' component={HomePage} />
        </Switch>
      </Router>
    )
  }
}

export default Main;
