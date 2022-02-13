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

const Home = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.filteredList);
  const openModal = useSelector((state) => state.openModal);

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

  const handleModal = () => {
    dispatch(toggleModal());
  };

  return (
    <>
      <header className="App-header">
        <Navbar />
      </header>
      <main className="bg-slate-200 flex flex-col m-auto mb-4 w-max md:mb-16">
        <div className="flex justify-between">
          <Searchbar />
          <button onClick={handleModal}>
            <h2 className="text-md py-2 my-4 mx-4 text-slate-500 cursor-pointer underline underline-offset-1 hover:text-red-500">
              Mostrar favoritos
            </h2>
          </button>
        </div>
        <PokemonList pokemonList={pokemonList} />
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
