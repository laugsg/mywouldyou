import { RECEIVE_QUESTIONS } from "../actions/questions";

// 3. Reducers : filter & intents of questions
export default function questions(state = {}, action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            }
        default: return state
    }
}