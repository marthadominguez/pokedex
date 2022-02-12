import React from "react";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions/index";

const PokemonCard = ({ pokemon }) => {
  const colores = {
    grass: "bg-emerald-200",
    poison: "bg-purple-200",
    ground: "bg-orange-200",
    normal: "bg-gray-200",
    fire: "bg-red-200",
    water: "bg-cyan-200",
    flying: "bg-sky-100",
    bug: "bg-lime-200",
    electric: "bg-yellow-200",
    fairy: "bg-pink-200",
    fighting: "bg-neutral-200",
    psychic: "bg-fuchsia-200",
    rock: "bg-slate-300",
    steel: "bg-stone-300",
    ice: "bg-cyan-300",
    ghost: "bg-indigo-200",
    dragon: "bg-orange-200",
  };

  const dispatch = useDispatch();
  const color = pokemon.favorite ? "text-yellow-300" : "text-gray-200";
  const handleFavorite = () => {
    dispatch(setFavorite({pokemonId: pokemon.id}))
  }

  return (
    <div className="bg-slate-50 w-48 m-4 px-4 py-4 rounded-2xl flex flex-col drop-shadow-md">
      <img
        className="bg-slate-100 rounded-lg pb-4 w-44 mb-4 border border-2"
        src={pokemon.sprites.other.home.front_default}
        alt="Pokemon front"
        loading="lazy"
      ></img>
      <p className="capitalize text-2xl tracking-wider text-slate-900">
        {pokemon.name}
      </p>
      <div className="flex">
        {pokemon.types.map((type, index) => {
          return (
            <p
              key={index}
              className={`${
                colores[type.type.name]
              } rounded-md w-fit px-2 h-auto my-1 mr-1 text-sm tracking-wider`}
            >
              {type.type.name}
            </p>
          );
        })}
        <button className="cursor-pointer ml-auto" onClick={handleFavorite}>
        <Icon className={`text-2xl ${color}`} icon="uim:favorite" /></button>
      </div>
    </div>
  );
};

export default PokemonCard;

