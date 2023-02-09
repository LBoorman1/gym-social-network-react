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
import { getPosts, setPosts } from "../../redux/reducers/PostsSlice";
import NewLeaderBoardModal from "../../Modals/NewLeaderBoardModal";
import HamburgerMenu from "../navbarComponents/HamburgerMenu";
import LeaderBoardSearch from "../../Modals/LeaderBoardSearch/LeaderBoardSearch";
import LeaderBoardDisplay from "../../Modals/LeaderBoardDisplay/LeaderBoardDisplay";

function Feed() {
  // const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const activeCommunity = useSelector(
    (state) => state.communities.activeCommunity
  );

  const posts = useSelector((state) => state.posts.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (activeCommunity != null) {
      dispatch(getPosts(activeCommunity));
    }
  }, [activeCommunity, dispatch]);

  const isEmpty = Object.keys(posts).length === 0;

  return (
    <div className="w-[100%] md:w-full">
      <NewPostModal />
      <NewCommunityModal />
      <CommunitySearchModal />
      <NewLeaderBoardModal />
      <HamburgerMenu />
      <LeaderBoardSearch />
      <LeaderBoardDisplay />

      {isEmpty ? <ErrorRender error={error} /> : <PostRender posts={posts} />}
    </div>
  );
}

export default Feed;
