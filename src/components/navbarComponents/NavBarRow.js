import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOpen } from "../../redux/reducers/PostModalSlice";

function NavBarRow({ name, Icon }) {
  const dispatch = useDispatch();

  return (
    <div
      className="group flex flex-col items-center cursor-pointer hover:opacity-50"
      onClick={() => {
        if (name == "Post") {
          dispatch(setOpen());
        }
      }}
    >
      <Icon className="h-10 w-10" />
      <p className="align-middle">{name}</p>
    </div>
  );
}

export default NavBarRow;
