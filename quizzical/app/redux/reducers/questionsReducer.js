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
    case 'GET_QUESTIONS':
        return [].concat(questions, action.questions);
        // return questions.map((question) => {
        //     return question.id !== action.id ?
        //         Object.assign({}, question, action.question) : question
        // })
    case 'SET_USER_CHOICE':
        return questions.map((question) => {
            return question.id === action.questionId ?
                Object.assign({}, question, {
                    userChoice: action.choice
                }) : question
        });
    default:
        return questions
    }
}

export default questionsReducer
/**
 * Created by peterringelmann on 2016/07/12.
 */
