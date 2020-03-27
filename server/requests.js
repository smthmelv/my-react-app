import {
    GET_LIST_SUCCESS,
    GET_LIST_FAILURE,
    GET_LIST_STARTED
} from '../client/actions/actionTypes';
import axios from 'axios';

const GIT_USER_URL = `https://api.github.com/users/dhh/events`;
  
export const getTypes = () => {
    console.log("HERE");
    return (dispatch, getState) => {
        dispatch(getListStarted());

        axios
        .get(GIT_USER_URL)
        .then(res => {
            throw new Error('NOT!');
            // dispatch(getListSuccess(res.data));
        })
        .catch(err => {
            dispatch(getListFailure(err.message));
        });
    };
};
  
const getListSuccess = data => ({
    type: GET_LIST_SUCCESS,
    data
});

const getListStarted = () => ({
    type: GET_LIST_STARTED
});

const getListFailure = error => ({
    type: GET_LIST_FAILURE,
    data: error
});