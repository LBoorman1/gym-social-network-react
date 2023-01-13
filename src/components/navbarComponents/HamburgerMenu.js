import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { useEffect, useState } from "react";

function HamburgerMenu() {
  const show = useSelector((state) => state.hamburgerMenu.hamburgerIsOpen);

  if (!show) {
    return null;
  } else {
    return (
      <div className="fixed right-0 bg-[#79ADDC] flex flex-col z-30 mt-2 mr-2 w-[300px] rounded-lg border-2 border-solid border-black">
        <MenuItem text={"My Profile"} />
        <MenuItem text={"Give Feedback"} />
        <MenuItem text={"Log Out"} />
      </div>
    );
  }
}

export default HamburgerMenu;
