import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addComment } from "../../redux/reducers/CommentsSlice";
import { useDispatch } from "react-redux";

// This is the component with a form for entering a new entry to the leaderboard
function AddComment({ id }) {
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
  };

  const show = useSelector((state) => state.comments.addCommentModal);
  if (!show) {
    return null;
  } else {
    return (
      <div className="absolute w-[50%] rounded-lg bg-white border border-solid border-black p-5">
        <div className="flex gap-5">
          <div className="flex">
            <input
              className="bg-sky-50 rounded-l-full focus:border focus:border-solid focus:border-sky-700 p-2 placeholder:text-sky-700 text-sky-700 font-semibold placeholder:font-semibold"
              type="text"
              name="comment"
              id="comment"
              value={comment.comment}
              onChange={handleChange}
              placeholder="Enter Achieved Lift"
            />
          </div>

          <button
            className="py-2 px-4 rounded-full bg-sky-50 hover:bg-sky-100 text-sky-700 font-semibold"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default AddComment;
