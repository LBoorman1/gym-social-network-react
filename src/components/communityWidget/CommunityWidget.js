import React from "react";
import { useEffect } from "react";
import Community from "./Community";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommunities,
  setCommunities,
} from "../../redux/reducers/CommunitiesSlice";
import { PlusIcon, SearchIcon, UserGroupIcon } from "@heroicons/react/solid";
import { setSearchOpen } from "../../redux/reducers/SearchModalSlice";
import { setCommunityOpen } from "../../redux/reducers/CommunityModalSlice";
import { setLeaderBoardSearchOpen } from "../../redux/reducers/LeaderBoardsSearchModalSlice";

function CommunityWidget() {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorisation: `Bearer ${token}`,
    },
  };

  const dispatch = useDispatch();
  const communities = useSelector((state) => state.communities.communities);
  const activeCommunity = useSelector(
    (state) => state.communities.activeCommunity
  );

  useEffect(() => {
    dispatch(getCommunities());
  }, [dispatch]);

  return (
    <div className="hidden md:flex flex-col items-center bg-[#D9D9D9] mx-2 p-2 md:h-fit rounded-md z-0 basis-1/4 drop-shadow-xl">
      <h1 className="mb-2 font-poppins">Your Communities</h1>
      <div className="w-full">
        {communities.map((community) => (
          <Community
            key={community._id}
            _id={community._id}
            name={community.communityName}
            active={activeCommunity === community._id ? true : false}
          />
        ))}
      </div>
      <div className="flex flex-row justify-between w-3/4 mb-2 ">
        <button
          className="hover:bg-[#A6A6A6] p-2 rounded-md"
          onClick={() => dispatch(setSearchOpen())}
        >
          <SearchIcon className="h-5 w-5" />
        </button>
        <button
          className="hover:bg-[#A6A6A6] p-2 rounded-md"
          onClick={() => dispatch(setCommunityOpen())}
        >
          <PlusIcon className="h-5 w-5" />
        </button>
        <button
          className="hover:bg-[#A6A6A6] p-2 rounded-md"
          onClick={() => dispatch(setLeaderBoardSearchOpen())}
        >
          <UserGroupIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default CommunityWidget;
