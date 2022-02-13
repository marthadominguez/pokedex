import React from 'react'
import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";

const FavoritePokemons = () => {
    const favoritePokemonList = useSelector((state) =>state.favoriteList)
   
  return (
    <div className="flex justify-center flex-wrap mx-4 mb-4 bg-slate-200">
       {favoritePokemonList.map((pokemon, index)=>(
          <PokemonCard key={index} pokemon={pokemon}/>
       ))}
    </div>
  )
}

export default FavoritePokemons