import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import PokemonList from "../components/PokemonList";
import Searchbar from "../components/Searchbar";
//5
import { getPokemons } from "../api/getPokemons";
import { setPokemonsDetails } from "../actions/index";

const Home = () => {
  const dispatch = useDispatch();
  const listaPokemon = useSelector((state) => state.list);

  useEffect(() => {
    getPokemons()
      .then((res) => {
        dispatch(setPokemonsDetails(res.results));
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <main className="bg-slate-200 flex flex-col items-center">
        <Searchbar></Searchbar>
        <PokemonList listaPokemon={listaPokemon}></PokemonList>
      </main>
    </>
  );
};

export default Home;
