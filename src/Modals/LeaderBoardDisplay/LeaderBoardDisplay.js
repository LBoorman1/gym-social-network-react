import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setLeaderBoardDisplayOpen } from "../../redux/reducers/LeaderBoardModalSlice";
import { XIcon } from "@heroicons/react/solid";
import { setActiveLeaderBoard } from "../../redux/reducers/LeaderBoardsSlice";
import {
  getTopTenEntries,
  getUserTopEntry,
  setToUpdate,
  getUserProgress,
} from "../../redux/reducers/EntriesSlice";

import AddEntry from "./AddEntry";
import { setAddEntryOpen } from "../../redux/reducers/EntriesSlice";
import TopTen from "./TopTen";
import UserTop from "./UserTop";
import Progress from "./Progress";

function LeaderBoardDisplay() {
  const show = useSelector(
    (state) => state.leaderBoardModal.leaderBoardDisplayOpen
  );

  const leaderBoardName = useSelector(
    (state) => state.leaderBoards.activeLeaderBoardName
  );

  const activeLeaderBoard = useSelector(
    (state) => state.leaderBoards.activeLeaderBoard
  );

  const toUpdate = useSelector((state) => state.entries.toUpdate);

  const dispatch = useDispatch();

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [show]);

  useEffect(() => {
    if (activeLeaderBoard != null || toUpdate == true) {
      dispatch(getTopTenEntries(activeLeaderBoard));
      dispatch(getUserTopEntry(activeLeaderBoard));
      dispatch(getUserProgress(activeLeaderBoard));
      dispatch(setToUpdate(false));
    }
  }, [dispatch, activeLeaderBoard, toUpdate]);

  if (!show) {
    return null;
  } else {
    return (
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-[#f5f5f5] flex flex-col z-20 items-center justify-center overflow-y-auto">
        <div className="flex w-full flex-col items-center gap-5">
          <div className="flex justify-between w-3/4 bg-white shadow-xl px-10 py-2 rounded-lg mt-2">
            <h1 className="font-poppins font-extrabold text-xl p-2">
              {leaderBoardName}
            </h1>
            <XIcon
              className="w-10 h-10"
              onClick={() => {
                dispatch(setLeaderBoardDisplayOpen());
                dispatch(setActiveLeaderBoard({ id: null, name: null }));
              }}
            />
          </div>
        </div>
        <div className="bg-white w-full mt-2 h-full rounded-t-lg flex">
          {/* Left Side is The actual leaderBoard */}
          <div className="h-full w-[100%] md:w-[50%] flex flex-col">
            <TopTen />
          </div>
          <div className="flex flex-col ml-5">
            <UserTop />
            <Progress />
            <div className="flex">
              <button
                className="transition duration-300 bg-[#2a90e9] rounded-md p-5 text-white hover:bg-white hover:border-2 hover:border-solid hover:border-[#2a90e9] hover:text-[#2a90e9] self-end mx-5 "
                onClick={() => dispatch(setAddEntryOpen())}
              >
                New Entry
              </button>
              <AddEntry />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeaderBoardDisplay;
