import React from "react";
import { connect } from "react-redux";
import { newDataObjectUsers } from '../utils/helpers'

// Components
import List from "./List";
import { CardUser } from './Card'

class LeaderboardContainer extends React.Component {
  render() {
    return this.props.users && <List componentUsed={CardUser} componentPropName="entry" data={this.props.users}/>
  }
}

// function mapStateToProps(state) {
//   return {
//     // convert questions object to Array
//     users: Object.keys(state.users).map((key) => state.users[key])
//   };
// }
export default connect(newDataObjectUsers)(LeaderboardContainer);
