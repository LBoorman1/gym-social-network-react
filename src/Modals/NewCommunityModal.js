import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCommunityOpen } from "../redux/reducers/CommunityModalSlice";
import { addCommunity } from "../redux/reducers/CommunitiesSlice";

function NewCommunityModal() {
  const [data, setData] = useState({
    communityName: "",
    description: "",
  });

  const show = useSelector((state) => state.communityModal.communityIsOpen);
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
    dispatch(addCommunity(data));
  };

  if (!show) {
    return null;
  } else {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-modal-bg flex items-center justify-center z-20">
        <div className="flex flex-col items-center justify-center bg-white rounded">
          <div className="grid grid-cols-2 text-xl pt-5">
            <h1 className="justify-self-start p-2">Create Community</h1>
            <button
              className="justify-self-end bg-gray-500 p-2 rounded-md"
              onClick={() => dispatch(setCommunityOpen())}
            >
              X
            </button>
          </div>
          <form
            className="flex flex-col md:max-w-3/4 text-xl p-10"
            onSubmit={handleSubmit}
          >
            <label>Name</label>
            <input
              className="bg-gray-400 rounded placeholder-gray-300"
              type="text"
              required
              name="communityName"
              onChange={handleChange}
              value={data.communityName}
            />

            <label>Description</label>
            <input
              className="bg-gray-400 rounded placeholder-gray-300"
              type="text"
              required
              name="description"
              onChange={handleChange}
              value={data.description}
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

export default NewCommunityModal;
