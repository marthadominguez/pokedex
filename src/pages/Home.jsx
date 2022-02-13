import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import PokemonList from "../components/PokemonList";
import Searchbar from "../components/Searchbar";
//5
import { getPokemons } from "../api/getPokemons";
import { setPokemonsDetails } from "../actions/index";
import Footer from "../components/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.filteredList);
  // const filteredList = useSelector((state)=> state.filteredList); 

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
        <Navbar/>
      </header>
      <main className="bg-slate-200 flex flex-col m-auto mb-4 w-max md:mb-16">
        <div className="flex justify-between">
          <Searchbar/>
          <h2 className="text-md py-2 my-4 mx-4 text-slate-500 cursor-pointer underline underline-offset-1 hover:text-red-500">Mostrar favoritos</h2>
        </div>
        <PokemonList pokemonList={pokemonList}/>
      </main>
      <Footer/>
    </>
  );
};

export default Home;
