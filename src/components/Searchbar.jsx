import React from "react";
import { useDispatch } from "react-redux";
import { searchValue } from "../actions/index";

const Searchbar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    let input = e.target.value;
    dispatch(searchValue({value: input}))
  }

  return (
    <input
      type="search"
      placeholder="Busca por nombre o tipo..."
      className="bg-slate-50 w-auto py-2 px-4 my-4 rounded-lg drop-shadow-sm focus:outline-none sm:mx-2"
      onChange={handleSearch}
    />
  );
};

export default Searchbar;
