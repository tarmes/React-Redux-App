import axios from 'axios';

export const FETCH_LYRICS_START = 'FETCH_LYRICS_START';
export const FETCH_LYRICS_SUCCESS = 'FETCH_LYRICS_SUCCESS';

export const fetchLyrics = (url) => (dispatch) => {
    dispatch({ type: FETCH_LYRICS_START });
    axios
        .get(url)
        .then((res) => {
            dispatch({ type: FETCH_LYRICS_SUCCESS, payload: res.data})
            console.log(res)
        })
        .catch((err) => console.log(err))

}