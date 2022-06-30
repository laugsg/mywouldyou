import React from 'react'
import { connect } from 'react-redux'

// Async Actions
import { receiveInitialData } from './actions/shared'

// Components
import ShowQuestionsContainer from './components/ShowQuestionsContainer'

class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(receiveInitialData())
    console.log("App",this.props)
  }
  render(){
    return (
      <React.Fragment>
        App Component Class
        {
          this.props.loading
          ? null
          : <ShowQuestionsContainer />
        }
      </React.Fragment>  
    );
  }
}

function MapStateToProps(state){
  return {
    loading: Object.keys(state.questions).length < 1
  }
}
export default connect(MapStateToProps)(App);
