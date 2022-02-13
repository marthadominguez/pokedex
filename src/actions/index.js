import axios from 'axios';

//1. Types
export const SET_POKEMON = 'SET_POKEMON';
export const SET_FAVORITE = 'SET_FAVORITE';
export const SEARCH_VALUE  = 'SEARCH_VALUE';

//2
export const setPokemon = (payload) => ({
    //accion que estamos realizando
    type: SET_POKEMON,
    payload
})

export const setPokemonsDetails = (pokemons = []) =>
    async (dispatch) => {
        try {
            const pokemonsDetails = await Promise.all(pokemons.map(
                async (pokemon) => {
                    const pokemonDetail = await axios.get(pokemon.url);
                    return pokemonDetail.data;
                }
            ))
            dispatch(setPokemon(pokemonsDetails));
        } catch (err) { console.error(err) }
    };

export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload,
})

export const searchValue = (payload) => ({
    type: SEARCH_VALUE,
    payload
})