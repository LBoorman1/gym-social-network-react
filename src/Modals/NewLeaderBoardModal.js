import React from "react";
import { XIcon } from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import { setLeaderBoardOpen } from "../redux/reducers/LeaderBoardModalSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { addLeaderBoard } from "../redux/reducers/LeaderBoardsSlice";

function NewLeaderBoardModal() {
  const show = useSelector((state) => state.leaderBoardModal.leaderBoardIsOpen);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    communityId: "",
    title: "",
    description: "",
    memberLimit: 100,
    endDate: null,
    timed: false,
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (event) => {
    // this is the function to send off the post request with the form attributes
    event.preventDefault();
    dispatch(addLeaderBoard(data));
  };

  const activeCommunity = useSelector(
    (state) => state.communities.activeCommunity
  );

  useEffect(() => {
    setData({ ...data, communityId: activeCommunity });
  }, [activeCommunity]);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [show]);

  if (!show) {
    return null;
  } else {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-modal-bg flex items-center justify-center z-20">
        <div className="flex flex-col w-full h-full justify-center items-center gap-3">
          <div className="flex items-center justify-between bg-white rounded w-[80%] p-4">
            <h1 className="font-extrabold text-xl">
              Create A New Leader-Board!
            </h1>
            <XIcon
              className="h-10 w-10"
              onClick={() => dispatch(setLeaderBoardOpen())}
            />
          </div>
          <div className="w-[80%] h-[75%] bg-white rounded p-4 flex flex-col justify-center items-center gap-2">
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={data.title}
              placeholder="Title of your new leader board"
              className="bg-sky-50 font-poppins rounded focus:border focus:border-solid focus:border-sky-700 w-[50%] p-5 text-sky-700 placeholder:text-sky-700 placeholder:opacity-30"
            />

            <textarea
              type="text"
              name="description"
              onChange={handleChange}
              value={data.description}
              placeholder="Description of your new leader board"
              className="bg-sky-50 font-poppins rounded focus:border focus:border-solid focus:border-sky-700 w-[50%] p-5 text-sky-700 h-40 resize-none placeholder:text-sky-700 placeholder:opacity-30"
            />

            <div className="flex gap-2 items-center">
              <label className="text-sky-700 font-poppins font-semibold">
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                className="rounded p-5 bg-sky-50 text-sky-700 focus:border focus:border-sky-700 focus:border-solid w-[100%] placeholder:opacity-30"
                onChange={handleChange}
                value={data.endDate}
              />
            </div>

            <div className="flex gap-2 items-center">
              <label className="text-sky-700 font-poppins font-semibold">
                Member Limit
              </label>
              <input
                type="number"
                name="memberLimit"
                onChange={handleChange}
                value={data.memberLimit}
                placeholder="Member Limit"
                className="bg-sky-50 p-5 text-sky-700 font-poppins focus:border focus:border-solid w-[100%] focus:border-sky-700 rounded"
              />
            </div>

            <button
              className="p-5 rounded bg-sky-50 hover:bg-sky-100 font-poppins font-semibold text-sky-700"
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewLeaderBoardModal;
