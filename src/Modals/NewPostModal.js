import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPostOpen } from "../redux/reducers/PostModalSlice";

function NewPostModal() {
  const [data, setData] = useState({
    postMessage: "",
  });

  //This is the headers for the axios request to authorise token before adding a post to the user
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorisation: `Bearer ${token}`,
    },
  };

  const show = useSelector((state) => state.postModal.postIsOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [show]);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (event) => {
    // this is the function to send off the post request with the form attributes
    event.preventDefault();
    try {
      const url = "http://localhost:5000/api/posts";
      const { data: res } = await axios.post(url, data, config);
      console.log(res.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!show) {
    return null;
  } else {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-modal-bg flex items-center justify-center">
        <div className="flex flex-col items-center justify-center bg-white rounded">
          <div className="grid grid-cols-2 text-xl pt-5">
            <h1 className="justify-self-start p-2">Create Post</h1>
            <button
              className="justify-self-end bg-gray-500 p-2 rounded-md"
              onClick={() => dispatch(setPostOpen())}
            >
              X
            </button>
          </div>
          <form
            className="flex flex-col md:max-w-3/4 text-xl p-10"
            onSubmit={handleSubmit}
          >
            <label>Message</label>
            <input
              className="bg-gray-400 rounded placeholder-gray-300"
              type="text"
              required
              name="postMessage"
              onChange={handleChange}
              value={data.postMessage}
            />

            <div className="grid grid-cols-1 pt-5">
              <button
                className="justify-self-start bg-gray-500 p-2 rounded-md"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewPostModal;
