import React from "react";
import {IoSearchSharp} from 'react-icons/io5m'
const SearchInput = () => {
  return (
    <div>
      <form className="flex items-center gap-2">
        <input
          type="text"
          placeholder="search..."
          className="input input-bordered rounded-full"
        />

        <button type='submit' className="btn btn-circle-bordered rounded-full">Icon</button>
      </form>
    </div>
  );
};

export default SearchInput;
