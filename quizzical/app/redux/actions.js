import reqwest from 'reqwest'

let actions;
actions = {

    updateQuestions: function (questions) {
        return {
            type: 'GET_QUESTIONS',
            questions: questions
        }
    },

    updateCategories: function (categories) {
        return {
            type: 'GET_CATEGORIES',
            categories: categories
        }
    },

    getQuestionAsync: function (category) {
        return (dispatch) => {
            reqwest({
                url: '/api/questions/',
                data: [
                    {
                        name: 'format',
                        value: 'json'
                    },
                    {
                        name: 'category',
                        value: category
                    }
                ]
            })
                .then(function (resp) {
                    dispatch(actions.updateQuestions(resp.results));
                });
        }
    },

    getCategoryAsync: function () {
        return (dispatch) => {
            reqwest({
                url: '/api/categories/',
                data: [{name: 'format', value: 'json'}]
            })
                .then(function (resp) {
                    dispatch(actions.updateCategories(resp.results));
                });
        }
    }
};

export default actions
/**
 * Created by peterringelmann on 2016/07/12.
 */
