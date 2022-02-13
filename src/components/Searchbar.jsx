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
      className="bg-slate-50 w-72 py-2 px-4 my-4 mx-4 rounded-lg drop-shadow-sm focus:outline-none"
      onChange={handleSearch}
    />
  );
};

export default Searchbar;
