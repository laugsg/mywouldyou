import React from "react";
import { connect } from "react-redux";

// Components
import List from "./List";
import { CardQuestion } from './Card'

class ShowQuestionsContainer extends React.Component {
  render() {
    return this.props.questions && <List componentUsed={CardQuestion} componentPropName="entry" data={this.props.questions}/>
  }
}

function mapStateToProps(state) {
  return {
    // convert questions object to Array
    questions: Object.keys(state.questions).map((key) => state.questions[key])
  };
}
export default connect(mapStateToProps)(ShowQuestionsContainer);
