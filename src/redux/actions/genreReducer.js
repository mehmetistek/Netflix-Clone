import { ActionTypes } from "../actionTypes";

const iniatialState ={
    isLoading: false,
    error: null,
    genres: [],
};

const genreReducer = (state = iniatialState, {type, payload}) => {
    console.log("type:", type);
    console.log("paylaod:", payload);
    switch(type){
case ActionTypes.GENRES_LOADING:
    return {...state, isLoading: true};
case ActionTypes.GENRES_SUCCESS:
    return{...state, isLoading: false, error:null, genres: payload}
    case ActionTypes.GENRES_ERROR:
        return{...state, isLoading:false, error: payload,};
        default:
        return state
    }
    return state;
};

export default genreReducer;