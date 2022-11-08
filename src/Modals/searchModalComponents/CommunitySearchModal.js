import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSearchOpen } from "../../redux/reducers/SearchModalSlice";
import { SearchIcon, XIcon } from "@heroicons/react/solid";
import { data } from "autoprefixer";
import SearchBar from "./SearchBar";
import DisplayResults from "./DisplayResults";

function CommunitySearchModal() {
  const [suggestions, setSuggestions] = useState([]);

  const show = useSelector((state) => state.searchModal.searchIsOpen);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [show]);

  if (!show) {
    return null;
  } else {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-modal-bg flex flex-col items-center gap-2">
        <SearchBar setSuggestions={setSuggestions} />
        <DisplayResults suggestions={suggestions} />
      </div>
    );
  }
}

export default CommunitySearchModal;
