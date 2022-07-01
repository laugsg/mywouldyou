import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Async Actions
import { receiveInitialData } from "./actions/shared";

// Components
import ShowQuestionsContainer from "./components/ShowQuestionsContainer";
import Login from "./components/Login";
import LeaderboardContainer from "./components/LeaderboardContainer";
import NewQuestionForm from "./components/NewQuestionForm";
import PageWrapper from "./components/PageWrapper";
import QuestionComponent from "./components/Question";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(receiveInitialData());
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <PageWrapper componentUsed={Login} />
          </Route>
          <Route exact path="/home">
              {this.props.loading ? (
                <p>Loading...</p>
              ) : (
                <PageWrapper componentUsed={ShowQuestionsContainer} />
              )}
          </Route>
          <Route exact path="/leaderboard">
            <PageWrapper componentUsed={LeaderboardContainer} />
          </Route>
          <Route exact path="/add">
            <PageWrapper componentUsed={NewQuestionForm} />
          </Route>
          <Route path="/questions/:question_id">
            <PageWrapper componentUsed={QuestionComponent} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

function MapStateToProps(state) {
  return {
    loading: Object.keys(state.questions).length < 1,
  };
}
export default connect(MapStateToProps)(App);
