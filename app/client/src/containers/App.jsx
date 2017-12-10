import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { browserHistory } from 'react-router'

import Main from './Main'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <NavBar />
          <Main />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
