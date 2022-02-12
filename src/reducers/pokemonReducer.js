import { SET_POKEMON, SET_FAVORITE, SEARCH_VALUE } from "../actions/type"

const initialState = {
    list: [],
    filteredList: []
}

//3
export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMON:
            return { ...state, list: action.payload }
        case SET_FAVORITE:
            const newPokemonList = [...state.filteredList]
            const currentPokemonIndex = newPokemonList.findIndex((element) => element.id === action.payload.pokemonId)
            if (currentPokemonIndex >= 0) {
                newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite
            }
            return { ...state, filteredList: newPokemonList}
        case SEARCH_VALUE:
            const listToFilter = [...state.list] 
            const value = action.payload.value;
            const filteredValue = listToFilter.filter( pokemon => {
                const result = pokemon.name.toLowerCase().includes(value.toLowerCase());
                return result
            });
            return { ...state, filteredList: filteredValue}
        default:
            return { ...state }
    }
};
