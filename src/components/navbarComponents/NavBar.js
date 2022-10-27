import React from "react";
import {
  HomeIcon,
  AdjustmentsIcon,
  UserIcon,
  DocumentAddIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import NavBarRow from "./NavBarRow";

function NavBar() {
  return (
    <div className="sticky top-0 flex w-100 px-5 py-5 bg-[#79ADDC] justify-between items-center">
      {/* Logo Section */}
      <div>
        <span className="rounded-full bg-white h-[40px] w-[40px] inline-block mr-2">
          logo
        </span>
      </div>
      {/* Middle Post Section */}
      <div className="md:absolute md:left-[50%] flex">
        <NavBarRow name="Post" Icon={DocumentAddIcon} />
        <NavBarRow name="Community" Icon={DocumentAddIcon} />
        <NavBarRow name="Search" Icon={SearchIcon} />
      </div>
      {/* Right Icon Section */}
      <div className="flex gap-1">
        <NavBarRow name="Feed" Icon={HomeIcon} />
        <NavBarRow name="User" Icon={UserIcon} />
        <NavBarRow name="Settings" Icon={AdjustmentsIcon} />
      </div>
    </div>
  );
}

export default NavBar;
