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

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorisation: `Bearer ${token}`,
    },
  };

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
              className="bg-gray-400 rounded placeholder-gray-300 placeholder:italic placeholder:text-white p-4 w-[50%]"
            />

            <textarea
              type="text"
              name="description"
              onChange={handleChange}
              value={data.description}
              placeholder="Description of your new leader board"
              className="bg-gray-400 rounded placeholder-gray-300 placeholder:italic placeholder:text-white p-4 w-[50%] h-40"
            />

            <div className="flex">
              <input type="checkbox" name="timed" id="timed" />
              <input
                type="date"
                name="endDate"
                className="rounded ml-2 bg-gray-400 p-2"
                onChange={handleChange}
                value={data.endDate}
              />
            </div>

            <input
              type="number"
              name="memberLimit"
              onChange={handleChange}
              value={data.memberLimit}
              placeholder="Member Limit"
              className="bg-gray-400 rounded placeholder-gray-300 placeholder:italic placeholder:text-white"
            />

            <button
              className="p-4 bg-gray-400 rounded hover:bg-gray-500"
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
