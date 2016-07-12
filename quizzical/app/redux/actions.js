let actions = {
    addTest: function(text) {
        return {
            type: 'ADD_TEST',
            text: text
        }
    },

    deleteTest: function(id) {
        return {
            type: 'DELETE_TEST',
            id: id
        }
    },

    runTest: function(id) {
        return {
            type: 'RUN_TEST',
            id: id
        }
    },

    completeTest: function(id) {
        return {
            type: 'COMPLETE_TEST',
            id: id
        }
    },

    createNewUserIdIfOdd: function() {
        return (dispatch, getState) => {
            const { user } = getState()
            if (user.id % 2 === 0) {
                return
            }
            dispatch(actions.createNewUserId())
        }
    },

    completeTestAsync: function(id) {
        return (dispatch) => {
            dispatch(actions.runTest(id))
            setTimeout(() => {
                dispatch(actions.completeTest(id))
            }, 2500)
        }
    }
}

export default actions
/**
 * Created by peterringelmann on 2016/07/12.
 */
