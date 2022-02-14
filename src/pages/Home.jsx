import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog } from "@mui/material";
import Navbar from "../components/Navbar";
import PokemonList from "../components/PokemonList";
import Searchbar from "../components/Searchbar";
import FavoritePokemons from "../components/FavoritePokemons";
//5
import { getPokemons } from "../api/getPokemons";
import { setPokemonsDetails, toggleModal } from "../actions/index";
import Footer from "../components/Footer";
import EmptyState from "../components/EmptyState";

const Home = () => {
  const dispatch = useDispatch();
  const initialPokemonList = useSelector((state) => state.list);
  const pokemonList = useSelector((state) => state.filteredList);
  const searchedValue = useSelector((state) => state.searchedValue);
  const openModal = useSelector((state) => state.openModal);

  useEffect(() => {
    getPokemons()
      .then((res) => {
        dispatch(setPokemonsDetails(res.results));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleModal = () => {
    dispatch(toggleModal());
  };
  // w-11/12 sm:px-16 lg:px-20 lg:w-[70rem]
  return (
    <>
      <header className="App-header">
        <Navbar />
      </header>
      <main className="bg-slate-200 flex flex-col mb-4 md:mb-16 ">
        <div className="flex justify-between m-auto px-3 w-11/12 sm:px-16 sm:justify-start m:px-16 lg:px-20 lg:w-10/12">
          <Searchbar />
          <button onClick={handleModal}>
            <h2 className=" text-slate-500 py-2 my-4 ml-4 cursor-pointer underline underline-offset-1 hover:text-red-500 sm:mx-2">
              Mostrar favoritos
            </h2>
          </button>
        </div>
        {searchedValue === "" ? (
          <PokemonList pokemonList={initialPokemonList} />
        ) : pokemonList.length !== 0 && searchedValue !== "" ? (
          <PokemonList pokemonList={pokemonList} />
        ) : (
          <EmptyState
            texto={`No se encontraron resultados para "${searchedValue}".`}
          />
        )}
        <Dialog open={openModal} fullWidth maxWidth="md">
          <div className="bg-slate-200 flex flex-col items-center">
            <h2 className="text-3xl font-bold pt-4 text-slate-800 tracking-wide">
              Favoritos
            </h2>
            <button
              onClick={handleModal}
              className="text-md text-slate-500 underline underline-offset-1 hover:text-red-500"
            >
              Volver
            </button>
            <FavoritePokemons />
          </div>
        </Dialog>
      </main>
      <Footer />
    </>
  );
};

export default Home;
