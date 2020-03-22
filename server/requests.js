import { TYPES } from '../client/actions/actionTypes';
import axios from 'axios';

const GIT_USER_URL = `https://api.github.com/users/dhh/events`;

function getTypeList(result) {
    return {
      type: TYPES,
      data: result
    };
}

export function getTypes() {
    console.log(axios.get(GIT_USER_URL))
    return (dispatch) => {
        axios.get(GIT_USER_URL)
            .then(result => console.log(result))
        //     // .then(result => dispatch(getTypeList(result)))
        //     // .then(result => dispatch({
        //     //     type: TYPES,
        //     //     data: result
        //     // }))
            .catch(error => this.setState({
                error,
                isLoading: false
            }));
    }
}