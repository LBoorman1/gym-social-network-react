import React, { useEffect } from "react";
import CommunitySearchModal from "../../Modals/searchModalComponents/CommunitySearchModal";
import NewCommunityModal from "../../Modals/NewCommunityModal";
import NewPostModal from "../../Modals/postModalComponents/NewPostModal";
import Post from "./Post";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

function Feed() {
  const [posts, setPosts] = useState([]);

  const token = localStorage.getItem("token");

  const activeCommunity = useSelector(
    (state) => state.communities.activeCommunity
  );

  //TODO: The request is being made before the active community is set so a blank request is sent
  //this is impossible
  const retrievePostsByCommunity = async () => {
    try {
      const url = "http://localhost:5000/api/posts/retrieveByCommunity";
      const { data } = await axios.get(url, {
        params: {
          communityId: activeCommunity,
        },
        headers: {
          Authorisation: `Bearer ${token}`,
        },
      });
      setPosts(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    retrievePostsByCommunity();
  }, [activeCommunity]);

  return (
    <div className="flex flex-col items-center w-full basis-0.7 mt-2 rounded-md">
      <NewPostModal />
      <NewCommunityModal />
      <CommunitySearchModal />

      <Post
        user="LukeBWood"
        likes={0}
        picture="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      />
      <Post
        user="LukeBWood"
        likes={54}
        picture="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      />
      <Post
        user="LukeBWood"
        likes={56}
        picture="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      />
      <Post
        user="LukeBWood"
        likes={12}
        picture="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      />
    </div>
    //feed will have post components rendered when requested from the back end
  );
}

export default Feed;
