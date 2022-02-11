import React from "react";
import { Icon } from "@iconify/react";

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

  return (
    <div className="bg-slate-50 m-3 px-4 py-4 rounded-2xl flex flex-col drop-shadow-md">
      <img
        className="bg-slate-100 rounded-lg pb-4 w-44 mb-4 border"
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
        <Icon className="cursor-pointer text-2xl text-stone-200 ml-auto" icon="uim:favorite" />
      </div>
    </div>
  );
};

export default PokemonCard;

// if (type.type.name === "grass") {
//   return (
//     <p
//       key={index}
//       className="bg-emerald-200 rounded-md w-fit px-2 my-1 mr-1 text-xs tracking-wider"
//     >
//       {type.type.name}
//     </p>
//   );
// } else {
//   return (<p
//     key={index}
//     className="bg-red-200 rounded-md w-fit px-2 my-1 mr-1 text-xs tracking-wider"
//   >
//     {type.type.name}
//   </p>)
// }
