import React from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import { setAuthedUser } from '../actions/authedUser'
import { dataObjectAuthedUser }  from '../utils/helpers'
import RedirectComponent from "./RedirectComponent";

class PageWrapper extends React.Component {
  render() {
    const ComponentUsed = this.props.componentUsed;
    const handleLogOut = () => {
      this.props.dispatch(setAuthedUser(null))
    }

    if ( this.props.authedUser ) {
      return (
        <>
          <Navigation handleLogOut={handleLogOut} />
          <div className="d-flex flex-column align-items-center p-5">
            <ComponentUsed />
          </div>
        </>
      );
    }
    else {
      return <RedirectComponent desiredPath={'/login'}/>
    }

  }
}

export default connect(dataObjectAuthedUser)(PageWrapper);
