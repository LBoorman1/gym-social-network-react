import React from "react";
import { useEffect } from "react";
import Community from "./Community";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCommunities } from "../../redux/reducers/CommunitiesSlice";
import { PlusIcon, SearchIcon, UserGroupIcon } from "@heroicons/react/solid";
import { setSearchOpen } from "../../redux/reducers/SearchModalSlice";
import { setCommunityOpen } from "../../redux/reducers/CommunityModalSlice";

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

  //make request to backend asynchronously
  const retrieveCommunities = async () => {
    try {
      const url = "http://localhost:5000/api/communities/retrieve";
      const { data } = await axios.get(url, config);
      dispatch(setCommunities(data));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    retrieveCommunities();
  }, []);

  return (
    <div className="hidden md:flex flex-col items-center bg-[#D9D9D9] mx-2 p-2 md:h-fit rounded-md z-0 basis-1/4 drop-shadow-xl">
      <div className="w-full">
        {communities.map((community) => (
          <Community
            key={community.community._id}
            _id={community.community._id}
            name={community.community.communityName}
            active={activeCommunity === community.community._id ? true : false}
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
        <button className="hover:bg-[#A6A6A6] p-2 rounded-md">
          <UserGroupIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default CommunityWidget;
