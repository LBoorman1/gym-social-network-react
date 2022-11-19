import React from "react";
import { useEffect } from "react";
import Community from "./Community";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCommunities } from "../../redux/reducers/CommunitiesSlice";

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
    <div className="hidden md:block sticky top-[112px] bg-[#D9D9D9] mt-2 mx-2 p-2 h-[50vh] rounded-md z-0 basis-1/4">
      {communities.map((community) => (
        <Community
          key={community.community._id}
          _id={community.community._id}
          name={community.community.communityName}
          active={activeCommunity === community.community._id ? true : false}
        />
      ))}
    </div>
  );
}

export default CommunityWidget;
