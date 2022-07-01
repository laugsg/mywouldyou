import React from 'react'
import { connect } from 'react-redux'
import Navigation from './Navigation'

class PageWrapper extends React.Component {
    render(){
        const ComponentUsed = this.props.componentUsed
        return(
            <>
            <Navigation />
            <ComponentUsed />
            </>
        )
    }
}

export default connect()(PageWrapper)