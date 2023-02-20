import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPostOpen } from "../../redux/reducers/PostModalSlice";
import { addPost } from "../../redux/reducers/PostsSlice";
import { XIcon } from "@heroicons/react/solid";

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
    setData({ ...data, postMessage: "", image: "", communityId: "" });
    dispatch(setPostOpen());
  };

  if (!show) {
    return null;
  } else {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-modal-bg flex items-center justify-center z-20">
        <div className="flex flex-col items-center justify-center bg-white rounded w-1/2 h-3/4">
          <div className="flex justify-between w-3/4">
            <h1 className="justify-self-start p-2 font-poppins font-bold ml-2 text-2xl">
              Create Post in {activeCommunityName}
            </h1>
            <XIcon
              onClick={() => dispatch(setPostOpen())}
              className="justify-self-end h-10 w-10 cursor-pointer"
            />
          </div>
          <form
            className="flex flex-col w-3/4 text-xl p-10 gap-2"
            onSubmit={handleSubmit}
          >
            <label className="font-poppins font-semibold text-sky-800">
              Message
            </label>
            <textarea
              className="bg-sky-50 h-[100px] text-sm p-2 rounded placeholder-sky-700 placeholder:font-poppins placeholder:font-semibold font-poppins text-sky-700 focus:border-2 focus:border-solid focus:border-sky-700 focus:bg-sky-10 resize-none"
              type="text"
              required
              name="postMessage"
              placeholder="Post Caption"
              onChange={handleChange}
              value={data.postMessage}
            />

            {/* Testing new cloudinary image upload stuff */}
            <label className="font-poppins font-semibold text-sky-800">
              Image
            </label>
            <input
              onChange={handleImage}
              type="file"
              name="image"
              id="formupload"
              className="flex w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100 file:font-poppins font-poppins"
            />
            <div className="grid grid-cols-1 pt-5">
              <button
                className="bg-sky-50 hover:bg-sky-100 rounded w-fit p-5  text-sky-700 font-poppins font-semibold text-sm"
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
