import React from 'react'
import { useSelector } from "react-redux";

const Modal = () => {
    const favoritePokemonList = useSelector((state) =>state.favoriteList)
   
  return (
    <div>
        <p>Hola</p>
       {favoritePokemonList.map((pokemon, index)=>(
           <li key={index} >{pokemon.name}</li>
       ))}
    </div>
  )
}

export default Modal