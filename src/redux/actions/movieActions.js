import { BASE_URL } from "../constants/API"
import { actionTypes } from './actionTypes';

export const fetchMovies = (offset, limit) => {
    return (dispatch) => {
        fetch(`${BASE_URL}movie/popular?offset=${offset}&limit=${limit}`)
        .then(res => res.json())
        .then(response => dispatch({
            type: actionTypes.FETCH_MOVIES,
            payload: response
        }))
    }
}

