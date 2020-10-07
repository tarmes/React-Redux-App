export const FETCH_LYRICS_START = 'FETCH_LYRICS_START';

export const fetchLyrics = () => (dispatch) => {
    dispatch({ type: FETCH_LYRICS_START });
}