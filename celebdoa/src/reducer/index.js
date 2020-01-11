import {
    FETCH_CELEBS_START,
    FETCH_CELEBS_SUCCESS,
    FETCH_CELEBS_FAIL
} from '../actions';

const initialState = {
    celebs: [],
    finished: false,
    isTesting: true
};

const rootReducer = (state = initialState, action) => {
    console.log('reducer', action);
    switch(action.type) {
        case FETCH_CELEBS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_CELEBS_SUCCESS:
            return {
                ...state,
                celebs: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_CELEBS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;