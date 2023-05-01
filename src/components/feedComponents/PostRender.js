import React from "react";
import { useSelector } from "react-redux";
import Post from "../feedComponents/Post";

function PostRender({ posts }) {
  const getFormattedDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  };

  const activeCommunityName = useSelector(
    (state) => state.communities.activeCommunityName
  );
  const activeCommunityDescription = useSelector(
    (state) => state.communities.activeCommunityDescription
  );
  const activeCommunityCreatedAt = useSelector(
    (state) => state.communities.activeCommunityCreatedAt
  );
  return (
    <div className="flex flex-col items-center w-full mt-2 rounded-md">
      <div className="bg-gradient-to-b from-sky-100 to-sky-200 w-full rounded-md mb-2 flex flex-col items-center p-5">
        <h1 className="font-poppins font-bold text-xl text-sky-700">
          Welcome to {activeCommunityName}
        </h1>
        <p className="font-poppins text-lg text-sky-700">
          {activeCommunityDescription}
        </p>
        <h2 className="font-poppins font-light text-sm text-sky-700">
          Created on {getFormattedDate(activeCommunityCreatedAt)}
        </h2>
      </div>
      {posts.map((post) => (
        <Post
          key={post._id}
          id={post._id}
          user={post.creator.username}
          profilePhoto={post.creator.image.url}
          likes={post.likeCount}
          caption={post.postMessage}
          picture={post.image.url}
        />
      ))}
    </div>
  );
}

export default PostRender;
