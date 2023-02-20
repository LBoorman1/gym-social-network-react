import React, { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/solid";
import axios from "axios";
import { ChatAlt2Icon } from "@heroicons/react/solid";
import Comment from "./Comment";

function CommentRender({ id }) {
  const [commentsShow, setCommentsShow] = useState(false);
  const [comments, setComments] = useState([]);

  const retrieveComments = async () => {
    // axios request to backend
    try {
      const token = localStorage.getItem("token");
      const url = "http://localhost:5000/api/comments/retrieve";
      const res = await axios.get(url, {
        headers: {
          Authorisation: `Bearer ${token}`,
        },
        params: {
          postId: id,
        },
      });
      setComments(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full">
      <div
        className="flex justify-start w-full "
        onClick={() => {
          setCommentsShow(!commentsShow);
          if (commentsShow == false) {
            retrieveComments();
          } else {
            setComments([]);
          }
        }}
      >
        <span>View Comments</span>
        {commentsShow ? (
          <ChevronDownIcon className="h-5 w-5" />
        ) : (
          <ChevronRightIcon className="h-5 w-5" />
        )}
      </div>
      <div>
        {/* This is the comments section */}
        {comments.map((comment) => (
          <Comment
            key={comment._id}
            _id={comment._id}
            creator={comment.creator.username}
            comment={comment.message}
            date={comment.postedAt}
          />
        ))}
      </div>
    </div>
  );
}

export default CommentRender;
