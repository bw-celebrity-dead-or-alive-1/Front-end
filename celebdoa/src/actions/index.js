import axios from 'axios';

export const FETCH_CELEBS_START = 'FETCH_CELEBS_START';
export const FETCH_CELEBS_SUCCESS = 'FETCH_CELEBS_SUCCESS';
export const FETCH_CELEBS_FAIL = 'FETCH_CELEBS_FAIL';

export const getCelebs = () => dispatch => {
    dispatch({ type: FETCH_CELEBS_START });
    axios
        .get('https://celebridead.herokuapp.com/celebrities')
        .then(res =>
            dispatch({ type: FETCH_CELEBS_SUCCESS, payload: res.data })
        )
        .catch(
            err => dispatch({ type: FETCH_CELEBS_FAIL, payload: err})
        )
}