import { saveQuestion } from "../utils/API"

// 2. Sync Actions : questions actions as type & hanlder
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'

export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestion(question){
    return {
        type: SAVE_QUESTION,
        question
    }
}

// Async Action
export function handleSaveQuestion(question){
    return (dispatch) => {
        // receive unformattedQuestion
        return saveQuestion(question)
                // return formattedQuestion & save it into the store
                .then((q) => dispatch(addQuestion(q)))
                .catch((e) => {
                    console.warn('Error in saveQuestion:', e)
                        alert('Error saving the Question. Please try again.')
                    })
    }
}
