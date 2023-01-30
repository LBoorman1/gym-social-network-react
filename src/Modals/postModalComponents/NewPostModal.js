import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPostOpen } from "../../redux/reducers/PostModalSlice";
import { addPost } from "../../redux/reducers/PostsSlice";

function NewPostModal() {
  const activeCommunity = useSelector(
    (state) => state.communities.activeCommunity
  );

  const [data, setData] = useState({
    postMessage: "",
    communityId: "",
    image: [],
  });

  useEffect(() => {
    setData({ ...data, communityId: activeCommunity });
  }, [activeCommunity]);

  //This is the headers for the axios request to authorise token before adding a post to the user
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorisation: `Bearer ${token}`,
    },
  };

  const show = useSelector((state) => state.postModal.postIsOpen);
  const dispatch = useDispatch();

  const activeCommunityName = useSelector(
    (state) => state.communities.activeCommunityName
  );

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

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setData({ ...data, image: reader.result });
    };
  };

  const handleSubmit = async (event) => {
    // this is the function to send off the post request with the form attributes
    event.preventDefault();
    dispatch(addPost(data));
  };

  if (!show) {
    return null;
  } else {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-modal-bg flex items-center justify-center z-20">
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

            {/* Testing new cloudinary image upload stuff */}
            <label>Image</label>
            <input
              onChange={handleImage}
              type="file"
              name="image"
              id="formupload"
            />

            <h2>Now posting in {activeCommunityName}</h2>
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
