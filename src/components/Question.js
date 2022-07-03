import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { newDataObjectQuestions } from "../utils/helpers";

// Components
import List from "./List";
import { CardPoll, CardQuestion } from "./Card";

class QuestionComponent extends React.Component {
  render() {
    /** Options or Results
     * filter unanswered, display questions if question_id is found
     * should else return poll results (not found)
     */
    let question = this.props.unanswered.filter((q) => {
      return q.id === this.props.match.params.question_id;
    });

    if (question.length) {
      question.map( obj => obj['authedUser'] = this.props.authedUser)
      return (
        question && (
          <List
            componentUsed={CardQuestion}
            componentPropName="entry"
            data={question}
          />
        )
      );
    }

    question = this.props.answered.filter((q) => {
      return q.id === this.props.match.params.question_id;
    });
    question.map( obj => obj['authedUser'] = this.props.authedUser)

    return (
      question && (
        <List
          componentUsed={CardPoll}
          componentPropName="entry"
          data={question}
        />
      )
    );
  }
}

export default withRouter(connect(newDataObjectQuestions)(QuestionComponent));
