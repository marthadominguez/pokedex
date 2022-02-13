import { SET_POKEMON, SET_FAVORITE, SEARCH_VALUE } from "../actions/index"

const initialState = {
    list: [],
    filteredList: [],
    favoriteList: []
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
            let favoritePokemons = [...state.favoriteList]
            if (newPokemonList[currentPokemonIndex].favorite) {
                favoritePokemons.push(newPokemonList[currentPokemonIndex])
            } else if (!newPokemonList[currentPokemonIndex].favorite) {
                // remover elemento que tenga el indice de la lista de favoritos
                favoritePokemons = favoritePokemons.filter(pokemon => {
                    return pokemon.favorite === true
                })
            }
            return { ...state, filteredList: newPokemonList, favoriteList: favoritePokemons }

        case SEARCH_VALUE:
            const listToFilter = [...state.list]
            const value = action.payload.value;
            const filteredValue = listToFilter.filter(pokemon => {
                return pokemon.types[0]?.type.name.toLowerCase().includes(value.toLowerCase())
                    || pokemon.name.toLowerCase().includes(value.toLowerCase()) || pokemon.types[1]?.type.name.toLowerCase().includes(value.toLowerCase())
            });
            return { ...state, filteredList: filteredValue }
        default:
            return { ...state }
    }
};
