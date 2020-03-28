import {
    GET_LIST_SUCCESS,
    GET_LIST_FAILURE,
    GET_LIST_STARTED
} from '../actions/actionTypes.js';

const initialState = {
    loading: false,
    types: [],
    error: null
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_LIST_STARTED:
          return {
            ...state,
            loading: true
          };
        case GET_LIST_SUCCESS:
          return {
            ...state,
            loading: false,
            error: null,
            types: action.data.map(elem => {
              return elem.type
            })
          };
        case GET_LIST_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.data.error
          };
        default:
          return state;
      }
}

export default reducer