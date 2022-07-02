import React from 'react'
import { connect } from 'react-redux'
import { CardLogin } from './Card'
import { dataObjectUsers } from '../utils/helpers'

class Login extends React.Component {
    render(){
        return <CardLogin users={this.props.users}/>
    }
}

export default connect(dataObjectUsers)(Login)