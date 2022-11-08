import React from "react";
import { UserGroupIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { setActiveCommunity } from "../../redux/reducers/CommunitiesSlice";

//need to have an onCLick to set the active community

function Community({ _id, name, active }) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(setActiveCommunity({ id: _id, name: name }));
      }}
      className={
        "flex rounded-md mb-3 p-2 " +
        (active ? "bg-[#79ADDC]" : "bg-white hover:bg-[#f5f5f5]")
      }
    >
      <UserGroupIcon className="h-5 w-5 mr-1" />
      <h2 className="font-semibold">{name}</h2>
    </div>
  );
}

export default Community;
