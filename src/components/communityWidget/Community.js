import React from "react";
import { UserGroupIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCommunity } from "../../redux/reducers/CommunitiesSlice";
import { setPosts } from "../../redux/reducers/PostsSlice";

//need to have an onCLick to set the active community
function Community({ _id, name, active, description, createdAt }) {
  const dispatch = useDispatch();

  const activeCommunity = useSelector(
    (state) => state.communities.activeCommunity
  );

  return (
    <div
      onClick={() => {
        dispatch(
          setActiveCommunity({
            id: _id,
            name: name,
            description: description,
            createdAt: createdAt,
          })
        );
        if (_id != activeCommunity) {
          dispatch(setPosts([]));
        }
      }}
      className={
        "flex rounded-md mb-3 p-2 font-poppins " +
        (active
          ? "bg-sky-100 text-sky-700 font-extrabold"
          : "bg-white hover:bg-[#f5f5f5]")
      }
    >
      <UserGroupIcon className="h-5 w-5 mr-1" />
      <h2 className="font-semibold">{name}</h2>
    </div>
  );
}

export default Community;
