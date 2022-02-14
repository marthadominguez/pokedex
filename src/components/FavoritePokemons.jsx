import React from 'react'
import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";
import EmptyState from "./EmptyState";

const FavoritePokemons = () => {
    const favoritePokemonList = useSelector((state) =>state.favoriteList)
   
  return (
    <div className="flex justify-center flex-wrap mx-4 mb-4 bg-slate-200">
       {favoritePokemonList.length > 0 ? (favoritePokemonList.map((pokemon, index)=>(
          <PokemonCard key={index} pokemon={pokemon}/>
       ))) : (<EmptyState texto={"Tu lista está vacía"}/>)}
      
    </div>
  )
}

export default FavoritePokemons