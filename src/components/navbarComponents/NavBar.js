import React from "react";
import HamburgerButton from "./HamburgerButton";
import mainLogo from "../../FitFeedLogoNew.png";

function NavBar() {
  return (
    <div className="sticky top-0 flex w-100 h-[100px] px-5 py-5 bg-[#79ADDC] justify-between items-center z-10 drop-shadow-xl border-b-[1px] border-neutral-600 border-solid">
      {/* Logo Section */}
      <div className="flex justify-start w-full">
        <img src={mainLogo} alt="fitfeedlogo" className="h-[80px]" />
      </div>

      <div className="flex gap-1">
        <HamburgerButton name="Ham" />
      </div>
    </div>
  );
}

export default NavBar;
