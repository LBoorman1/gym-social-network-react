import React, { useEffect } from "react";
import CommunitySearchModal from "../../Modals/searchModalComponents/CommunitySearchModal";
import NewCommunityModal from "../../Modals/NewCommunityModal";
import NewPostModal from "../../Modals/postModalComponents/NewPostModal";
import Post from "./Post";
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostRender from "./PostRender";
import ErrorRender from "./ErrorRender";
import { setPosts } from "../../redux/reducers/PostsSlice";

function Feed() {
  // const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  const activeCommunity = useSelector(
    (state) => state.communities.activeCommunity
  );

  const posts = useSelector((state) => state.posts.posts);

  const dispatch = useDispatch();

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
      dispatch(setPosts(data));
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    retrievePostsByCommunity();
  }, [activeCommunity]);

  const isEmpty = Object.keys(posts).length === 0;

  return (
    <>
      <NewPostModal />
      <NewCommunityModal />
      <CommunitySearchModal />

      {isEmpty ? <ErrorRender error={error} /> : <PostRender posts={posts} />}
    </>
  );
}

export default Feed;
