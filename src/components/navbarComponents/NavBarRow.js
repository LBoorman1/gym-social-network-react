import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCommunityOpen } from "../../redux/reducers/CommunityModalSlice";
import { setPostOpen } from "../../redux/reducers/PostModalSlice";
import { setSearchOpen } from "../../redux/reducers/SearchModalSlice";

function NavBarRow({ name, Icon }) {
  const dispatch = useDispatch();

  return (
    <div
      className="group flex flex-col items-center cursor-pointer hover:opacity-50"
      onClick={() => {
        switch (name) {
          case "Community":
            dispatch(setCommunityOpen());
            break;
          case "Search":
            dispatch(setSearchOpen());
            break;
          default:
            break;
        }
      }}
    >
      <Icon className="h-10 w-10" />
      <p className="align-middle">{name}</p>
    </div>
  );
}

export default NavBarRow;
