import React from "react";
import { connect } from "react-redux";

class ShowQuestionsContainer extends React.Component {
  render() {
    return (
        <>
        {
            JSON.stringify(this.props.questions)
        }
        </>
    )
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions,
  };
}
export default connect(mapStateToProps)(ShowQuestionsContainer);
