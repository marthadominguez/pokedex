import React from "react";
import pokeball from "../assets/pokeball_1_50x50.png";

const Navbar = () => {
  return (
    <nav className="flex p-4 w-full justify-center bg-slate-50 drop-shadow-sm">
      <div className="flex">
        <h2 className="mr-1 text-4xl text-black-900 font-bold tracking-wide">Pokedex</h2>
        <img className="w-10 h-10" src={pokeball} alt="Pokeball" />
      </div>
    </nav>
  );
};

export default Navbar;
