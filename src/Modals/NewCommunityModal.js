import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCommunityOpen } from "../redux/reducers/CommunityModalSlice";
import { addCommunity } from "../redux/reducers/CommunitiesSlice";
import { XIcon } from "@heroicons/react/solid";

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
        <div className="flex flex-col items-center justify-center bg-white rounded w-1/2 h-3/4">
          <div className="grid grid-cols-2 text-xl pt-5">
            <h1 className="justify-self-start p-2 font-poppins font-bold">
              Create Community
            </h1>
            <XIcon
              className="h-10 w-10 justify-self-end cursor-pointer"
              onClick={() => dispatch(setCommunityOpen())}
            />
          </div>
          <form
            className="flex flex-col w-3/4 text-xl p-10"
            onSubmit={handleSubmit}
          >
            <label className="font-poppins font-semibold text-sky-700">
              Name
            </label>
            <input
              className="bg-sky-100  text-sm p-2 rounded placeholder-sky-700 placeholder:font-poppins placeholder:font-semibold font-poppins text-sky-700 focus:border-2 focus:border-solid focus:border-sky-700 focus:bg-sky-200"
              type="text"
              required
              name="communityName"
              onChange={handleChange}
              value={data.communityName}
            />

            <label className="font-poppins font-semibold text-sky-700">
              Description
            </label>
            <textarea
              className="bg-sky-100 w-full h-[200px] text-sm p-2 rounded placeholder-sky-700 placeholder:font-poppins placeholder:font-semibold font-poppins text-sky-700 focus:border-2 focus:border-solid focus:border-sky-700 focus:bg-sky-200 resize-none"
              type="text"
              required
              name="description"
              onChange={handleChange}
              value={data.description}
            />

            <div className="grid grid-cols-1 pt-5">
              <button
                className="justify-self-end bg-sky-200 hover:bg-sky-300 w-fit p-5 rounded text-sky-700 font-poppins font-semibold"
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
