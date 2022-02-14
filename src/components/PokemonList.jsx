import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonList }) => {

  return (
    <section className="flex justify-center">
      <div className="grid grid-cols-2 justify-items-stretch bg-slate-200 px-2 w-11/12 sm:px-16 md:grid-cols-3 lg:px-20 lg:w-10/12 lg:grid-cols-4">
        {pokemonList.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon}/>
        ))}
      </div>
    </section>
  );
};

export default PokemonList;

// 
// flex flex-wrap justify-start bg-slate-200 px-3 w-11/12 sm:px-16 lg:px-20 lg:w-10/12