import React from "react";
import { connect } from "react-redux";
import { newDataObjectQuestions } from "../utils/helpers";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

// Components
import List from "./List";
import { CardQuestion } from "./Card";

class ShowQuestionsContainer extends React.Component {
  render() {
    /** Unanswered/Answered 
     * Unanswered/Answered rely on user, it means
     * "if username has voted on question is answered"
     */
    console.log(this.props.questions)
    return (
      this.props.questions && (
        <>
          <Tabs
            defaultActiveKey="unanswered"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="unanswered" title="Unanswered">
            Unanswered
            </Tab>
            <Tab eventKey="answered" title="Answered">
            Answered
            </Tab>
          </Tabs>
          <List
            componentUsed={CardQuestion}
            componentPropName="entry"
            data={this.props.questions}
          />
        </>
      )
    );
  }
}

export default connect(newDataObjectQuestions)(ShowQuestionsContainer);
