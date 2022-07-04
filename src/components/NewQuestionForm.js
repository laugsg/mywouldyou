import React from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questions";
import { dataObjectAuthedUser } from "../utils/helpers";
import { CardFormNewQuestion } from "./Card";

class NewQuestionForm extends React.Component {
  render() {
    const handleSubmit = (optionOne, optionTwo) => {
      const question = {
        optionOneText: optionOne,
        optionTwoText: optionTwo,
        author: this.props.authedUser,
      };
      this.props.dispatch(handleSaveQuestion(question))
    };

    return <CardFormNewQuestion handleSubmit={handleSubmit} />;
  }
}

export default connect(dataObjectAuthedUser)(NewQuestionForm);
