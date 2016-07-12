import reqwest from 'reqwest'

let actions;
actions = {
    addTest: function (text) {
        return {
            type: 'ADD_TEST',
            text: text
        }
    },

    deleteTest: function (id) {
        return {
            type: 'DELETE_TEST',
            id: id
        }
    },

    runTest: function (id) {
        return {
            type: 'RUN_TEST',
            id: id
        }
    },

    updateQuestions: function (questions) {
        return {
            type: 'GET_QUESTIONS',
            questions: questions
        }
    },

    completeTest: function (id) {
        return {
            type: 'COMPLETE_TEST',
            id: id
        }
    },

    completeTestAsync: function (id) {
        return (dispatch) => {
            dispatch(actions.runTest(id))
            setTimeout(() => {
                dispatch(actions.completeTest(id))
            }, 2500)
        }
    },

    getQuestionAsync: function () {
        return (dispatch) => {
            reqwest({
                url: '/api/questions/?format=json'
            })
                .then(function (resp) {
                    dispatch(actions.updateQuestions(resp.results));
                });
        }
    }
};

export default actions
/**
 * Created by peterringelmann on 2016/07/12.
 */
