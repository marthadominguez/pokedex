import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonList }) => {

  return (
    <section className="flex justify-center">
      <div className="grid justify-items-center bg-slate-200 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pokemonList.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon}/>
        ))}
      </div>
    </section>
  );
};

export default PokemonList;
