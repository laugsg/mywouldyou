import React from "react";
import { connect } from "react-redux";
import { CardFormNewQuestion } from "./Card";

class NewQuestionForm extends React.Component {
  render() {
    return <CardFormNewQuestion />
  }
}

export default connect()(NewQuestionForm);
