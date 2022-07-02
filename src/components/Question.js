import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { newDataObjectQuestions } from '../utils/helpers'

// Components
import List from "./List";
import { CardQuestionClass } from './Card'

class QuestionComponent extends React.Component {
    render(){        
        const question = this.props.questions.filter( q => {
            return q.id === this.props.match.params.question_id
        })
        
        return question && <List componentUsed={CardQuestionClass} componentPropName="entry" data={question}/>
    }
}

export default withRouter(connect(newDataObjectQuestions)(QuestionComponent))