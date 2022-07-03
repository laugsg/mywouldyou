import React from "react";
import { connect } from "react-redux";
import { newDataObjectQuestions } from "../utils/helpers";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

// Components
import List from "./List";
import { CardQuestion } from "./Card";

class ShowQuestionsContainer extends React.Component {
  render() {
    return (
      this.props.unanswered && (
        <>
          <Tabs
            defaultActiveKey="unanswered"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="unanswered" title="Unanswered">
              <List
                componentUsed={CardQuestion}
                componentPropName="entry"
                data={this.props.unanswered}
              />
            </Tab>
            <Tab eventKey="answered" title="Answered">
              <List
                componentUsed={CardQuestion}
                componentPropName="entry"
                data={this.props.answered}
              />
            </Tab>
          </Tabs>
        </>
      )
    );
  }
}

export default connect(newDataObjectQuestions)(ShowQuestionsContainer);
