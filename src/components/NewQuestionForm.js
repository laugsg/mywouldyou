import React from "react";
import { connect } from "react-redux";
import { CardFormNewQuestion } from "./Card";

class NewQuestionForm extends React.Component {
  render() {

    const handleSubmit = () => {
      console.log("submit")
    };

    return <CardFormNewQuestion handleSubmit={handleSubmit} />
  }
}

export default connect()(NewQuestionForm);
