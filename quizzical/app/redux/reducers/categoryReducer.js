/**
 * Generates the latest ID based on existing ID count
 * @param {object} tests subset object of redux application store
 * @return {int} new ID
 */
function getId(categories) {
    return categories.reduce((maxId, test) => {
        return Math.max(test.id, maxId)
    }, -1) + 1
}

let categoryReducer = function(categories = [], action) {
    switch (action.type) {
    case 'GET_CATEGORIES':
        return Object.assign([], categories, action.categories);
    default:
        return categories
    }
}

export default categoryReducer
/**
 * Created by peterringelmann on 2016/07/12.
 */
