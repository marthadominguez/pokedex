import {SET_POKEMON} from "../actions/type"

const initialState = {
    list: []
}

//3
export const pokemonReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_POKEMON:
            return {...state, list: action.payload}
        default:
            return {...state}
    }
};
