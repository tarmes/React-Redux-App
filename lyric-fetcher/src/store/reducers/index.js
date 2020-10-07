import { FETCH_LYRICS_START } from '../actions';

const initialState = {
    lyrics: '',
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LYRICS_START: 
            return {
                ...state,
                isLoading: true
            };
        default:
            return state;
    }
}