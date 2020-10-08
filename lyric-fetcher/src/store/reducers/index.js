import { FETCH_LYRICS_START, FETCH_LYRICS_SUCCESS } from '../actions';

const initialState = {
    lyrics: '',
    isLoading: false,
    isLoaded: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LYRICS_START: 
            return {
                ...state,
                isLoading: true
            };
        case FETCH_LYRICS_SUCCESS: 
            return {
                ...state,
                lyrics: action.payload.lyrics,
                isLoaded: true,
                isLoading: false
            };
        default:
            return state;
    }
}