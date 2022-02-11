import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ listaPokemon }) => {

  return (
    <section className="flex justify-center">
      <div className="grid justify-items-center grid-cols-2 md:grid-cols-4 md:w-auto bg-slate-200">
        {listaPokemon.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon}></PokemonCard>
        ))}
      </div>
    </section>
  );
};

export default PokemonList;
