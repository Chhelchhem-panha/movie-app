import { actionTypes } from "../actions/actionTypes"
// in reducer, we need to check action and state
const initialState = {
    movies: []
}
export const movieReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case actionTypes.FETCH_MOVIES: 
            return{ ...state, movies: state.movies.concat(payload) }
        default: 
        return state
    }
}