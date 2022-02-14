import React from "react";
import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";
import EmptyState from "./EmptyState";

const FavoritePokemons = () => {
  const favoritePokemonList = useSelector((state) => state.favoriteList);

  return (
    <>
      {favoritePokemonList.length > 0 ? (
        <div className="flex flex-wrap justify-center mx-4 mb-4 w-1/2 sm:w-auto">
          {favoritePokemonList.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon} />
          ))}
        </div>
      ) : (
        <EmptyState texto={"Tu lista está vacía"} />
      )}
    </>
  );
};

export default FavoritePokemons;
