import {
    _getUsers,
    _getQuestions
} from './_DATA'

/** getInitialData
 * Make a request that returns a Promise
 * which resolves at once and returns an object
 * with two properties { users, questions }.
 * @returns {Promise} { users, questions }
 */
export function getInitialData(){
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then( ([users, questions]) => ({
        users,
        questions
    }))
}