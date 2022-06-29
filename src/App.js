import React from 'react'
import { connect } from 'react-redux'

// Async Actions
import { receiveInitialData } from './actions/shared'

class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(receiveInitialData())
  }
  render(){
    return (
      <React.Fragment>
        App Component Class
      </React.Fragment>  
    );
  }
}

export default connect()(App);
