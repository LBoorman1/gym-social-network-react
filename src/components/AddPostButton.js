import React from "react";
import { PlusIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { setPostOpen } from "../redux/reducers/PostModalSlice";

function AddPostButton() {
  const dispatch = useDispatch();

  return (
    <div
      className="flex w-[80px] h-[80px] my-2 mx-2 rounded-full bg-[#79ADDC] sticky top-[112px] hover:cursor-pointer hover:bg-[#D9D9D9]"
      onClick={() => {
        dispatch(setPostOpen());
      }}
    >
      <PlusIcon />
    </div>
  );
}

export default AddPostButton;
