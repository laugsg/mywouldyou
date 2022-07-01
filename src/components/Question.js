import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// Components
import List from "./List";
import { CardQuestion } from './Card'

class QuestionComponent extends React.Component {
    render(){        
        const question = this.props.questions.filter( q => {
            return q.id === this.props.match.params.question_id
        })
        
        return question && <List componentUsed={CardQuestion} componentPropName="entry" data={question}/>
    }
}

function mapStateToProps(state){
    return {
        questions: Object.keys(state.questions).map( q => (state.questions[q]) )
    }
}

export default withRouter(connect(mapStateToProps)(QuestionComponent))