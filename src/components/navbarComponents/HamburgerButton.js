import { MenuIcon, XIcon } from "@heroicons/react/solid";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCommunityOpen } from "../../redux/reducers/CommunityModalSlice";
import { setHamburgerOpen } from "../../redux/reducers/HamburgerMenuSlice";
import { setPostOpen } from "../../redux/reducers/PostModalSlice";
import { setSearchOpen } from "../../redux/reducers/SearchModalSlice";

function HamburgerButton() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.hamburgerMenu.hamburgerIsOpen);

  if (show) {
    return (
      <div
        className="group flex flex-col items-center cursor-pointer hover:opacity-50"
        onClick={() => {
          dispatch(setHamburgerOpen());
        }}
      >
        <XIcon className="h-10 w-10" />
      </div>
    );
  } else {
    return (
      <div
        className="group flex flex-col items-center cursor-pointer hover:opacity-50"
        onClick={() => {
          dispatch(setHamburgerOpen());
        }}
      >
        <MenuIcon className="h-10 w-10" />
      </div>
    );
  }
}

export default HamburgerButton;
