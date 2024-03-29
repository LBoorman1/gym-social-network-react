import React, { useState } from "react";
import { ThumbUpIcon, ChatAlt2Icon } from "@heroicons/react/solid";
import CommentRender from "./CommentRender";
import { useDispatch } from "react-redux";
import { addComment } from "../../redux/reducers/CommentsSlice";

function PostNew({ user, likes, picture, caption, date, id, profilePhoto }) {
  const extension = picture.split(".").pop();
  const isPicture = (extension == "jpg") | (extension == "png");
  const dispatch = useDispatch();

  const [comment, setComment] = useState({
    comment: "",
    postId: id,
  });

  const handleChange = ({ currentTarget: input }) => {
    setComment({ ...comment, [input.name]: input.value });
  };

  const handleSubmit = async (event) => {
    // this is the function to send off the post request with the form attributes
    event.preventDefault();
    dispatch(addComment(comment));
    setComment({ ...comment, comment: "" });
  };

  return (
    <div className="postContainer bg-[#D9D9D9] h-full flex flex-col rounded-md mb-5 w-full drop-shadow-md">
      <div className="userInfo bg-white p-5 rounded-md my-5 mx-5 h-[80px] flex items-center gap-5">
        <div className="flex items-center gap-2">
          <img
            src={profilePhoto}
            alt=""
            className="w-12 h-12 rounded-full border border-solid border-black"
          />
          <h2 className="font-bold font-poppins">{user}</h2>
        </div>
        <div className="flex rounded-lg bg-sky-50 hover:bg-sky-100 font-poppins text-sky-700 p-3">
          <h3 className="font-semibold">{likes}</h3>
          <ThumbUpIcon className="h-5 w-5 ml-1" />
        </div>
        <div className="flex rounded-lg bg-sky-50 p-3 mr-0 items-center group">
          <ChatAlt2Icon className="h-5 w-5 text-sky-700" />
          <input
            type="text"
            name="comment"
            id="comment"
            value={comment.comment}
            onChange={handleChange}
            className="text-sky-700 ml-1 focus:group:border-2 focus:group:border-sky-700 focus:group:border-solid"
          />
        </div>
        <button
          className="rounded bg-sky-50 hover:bg-sky-100 p-3 text-sky-700 font-poppins font-semibold"
          onClick={handleSubmit}
        >
          Post
        </button>
      </div>
      <div className="photoAndCaption bg-white p-5 rounded-md mb-5 mx-5 h-fit flex flex-col items-center">
        <div className="h-full flex flex-col justify-center items-center w-full">
          {/* Conditionally render a video or img tag based on the isPicture variable */}
          {isPicture ? (
            <img className="rounded-md w-full " src={picture} />
          ) : (
            <video className="rounded-md w-full" controls>
              <source src={picture} type="video/mp4" />
            </video>
          )}

          <div className="caption bg-sky-100 m-5 rounded-md w-full">
            <p className="font-semibold p-5 text-lg text-sky-700 break-all">
              {caption}
            </p>
          </div>
          {/* This will be the text to click to view comments */}
          <CommentRender id={id} />
        </div>
      </div>
    </div>
  );
}

export default PostNew;
