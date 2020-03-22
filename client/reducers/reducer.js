const defaultState = {
    types: []
}

function reducer(state = defaultState, action) {
    switch(action.type){
        case "TYPES":
            return {
                ...state,
                types: action.payload
            }
        default:
            return state
    }
}

export default reducer