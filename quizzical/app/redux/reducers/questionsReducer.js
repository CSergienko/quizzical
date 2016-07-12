/**
 * Generates the latest ID based on existing ID count
 * @param {object} tests subset object of redux application store
 * @return {int} new ID
 */
function getId(questions) {
    return questions.reduce((maxId, test) => {
        return Math.max(test.id, maxId)
    }, -1) + 1
}

let questionsReducer = function(questions = [], action) {
    switch (action.type) {
    case 'ADD_TEST':
        return [{
            text: action.text,
            completed: false,
            id: getId(questions)
        }, ...questions]
    case 'RUN_TEST':
        return questions.map((test) => {
            return test.id === action.id ?
                Object.assign({}, test, {
                    text: 'running test...'
                }) : test
        })
    case 'COMPLETE_TEST':
        return questions.map((test) => {
            return test.id === action.id ?
                Object.assign({}, test, {
                    completed: !test.completed,
                    text: 'test complete!'
                }) : test
        })
    case 'DELETE_TEST':
        return questions.filter((test) => {
            return test.id !== action.id
        })
    default:
        return questions
    }
}

export default questionsReducer
/**
 * Created by peterringelmann on 2016/07/12.
 */
