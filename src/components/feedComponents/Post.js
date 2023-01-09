import React from "react";
import { ThumbUpIcon } from "@heroicons/react/solid";

function PostNew({ user, likes, picture, caption, date }) {
  return (
    <div className="postContainer bg-[#D9D9D9] h-full flex flex-col rounded-md mb-5 w-full drop-shadow-md">
      <div className="userInfo bg-white p-5 rounded-md my-5 mx-5 h-[80px] flex items-center gap-10">
        <div className="flex items-center">
          <span className="rounded-full bg-[#79ADDC] h-[40px] w-[40px] inline-block mr-2" />
          <h2 className="font-bold">{user}</h2>
        </div>
        <div className="flex rounded-lg hover:bg-[#D9D9D9] p-3">
          <h3 className="font-semibold">{likes}</h3>
          <ThumbUpIcon className="h-5 w-5 ml-1" />
        </div>
      </div>
      <div className="photoAndCaption bg-white p-5 rounded-md mb-5 mx-5 h-[32rem] flex flex-col items-center">
        <div className="h-full flex flex-col justify-center items-center">
          <img className="rounded-md w-[75%]" src={picture} />
          <div className="caption bg-[#D9D9D9] m-5 rounded-md w-[75%]">
            <p className="font-semibold p-5 text-lg">{caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostNew;
