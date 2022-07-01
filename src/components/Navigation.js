import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Navigation extends React.Component {
    render(){
        return(
            <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/leaderboard">Leader Board</Link></li>
                <li><Link to="/add">New Question</Link></li>
            </ul>
        )
    }
}

export default connect()(Navigation)