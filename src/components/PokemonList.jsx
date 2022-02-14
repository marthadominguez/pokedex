import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonList }) => {

  return (
    <section className="flex justify-around">
      <div className="flex flex-wrap bg-slate-200 justify-between px-3  w-11/12 sm:px-16 lg:px-20 lg:w-10/12">
        {pokemonList.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon}/>
        ))}
      </div>
    </section>
  );
};

export default PokemonList;

// grid-cols-2 md:grid-cols-3 lg:grid-cols-4