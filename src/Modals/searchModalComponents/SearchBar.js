import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSearchOpen } from "../../redux/reducers/SearchModalSlice";
import { SearchIcon, XIcon } from "@heroicons/react/solid";

function SearchBar({ setSuggestions }) {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setSearchTerm(input.value);
  };

  const searchRequest = async () => {
    try {
      if (searchTerm.length == 0) {
        return 1;
      }

      const url = "http://localhost:5000/api/communities/search";
      const { data } = await axios.get(url, {
        params: {
          searchTerm: searchTerm,
        },
      });
      setSuggestions(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    searchRequest();
  }, [searchTerm]);

  return (
    <div className="bg-slate-200 mt-2 rounded-md flex items-center w-[50%]">
      <SearchIcon className="h-8 w-8 pl-2" />
      <input
        className="py-2 px-3 border-l w-full"
        type="text"
        name="searchTerm"
        required
        value={searchTerm}
        onChange={handleChange}
      />
      <XIcon
        className="h-8 w-8 pr-2 hover:cursor-pointer"
        onClick={() => dispatch(setSearchOpen())}
      />
    </div>
  );
}

export default SearchBar;
