import React from "react";
import Post from "../feedComponents/Post";

function PostRender({ posts }) {
  return (
    <div className="flex flex-col items-center w-full mt-2 rounded-md">
      {posts.map((post) => (
        <Post
          key={post._id}
          id={post._id}
          user={post.creator.username}
          likes={post.likeCount}
          caption={post.postMessage}
          picture={post.image.url}
        />
      ))}
    </div>
  );
}

export default PostRender;
