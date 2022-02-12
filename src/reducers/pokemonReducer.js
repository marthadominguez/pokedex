import { SET_POKEMON, SET_FAVORITE } from "../actions/type"

const initialState = {
    list: [],
}

//3
export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMON:
            return { ...state, list: action.payload }
        case SET_FAVORITE:
            const newPokemonList = [...state.list]
            const currentPokemonIndex = newPokemonList.findIndex((element) => element.id === action.payload.pokemonId)
            if (currentPokemonIndex >= 0) {
                newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite
            }
            return { ...state, list: newPokemonList}
        default:
            return { ...state }
    }
};
