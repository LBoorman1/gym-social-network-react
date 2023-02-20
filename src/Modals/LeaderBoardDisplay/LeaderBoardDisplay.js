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
} from "../../redux/reducers/EntriesSlice";
import AddEntry from "./AddEntry";
import { setAddEntryOpen } from "../../redux/reducers/EntriesSlice";

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
      dispatch(setToUpdate(false));
    }
  }, [dispatch, activeLeaderBoard, toUpdate]);

  const topTen = useSelector((state) => state.entries.topTenEntries);
  const userTop = useSelector((state) => state.entries.userTopEntry);

  const getFormattedDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  };

  if (!show) {
    return null;
  } else {
    return (
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-[#f5f5f5] flex flex-col z-20 items-center justify-center">
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
          <div className="h-full m-2 w-[100%] md:w-[50%]">
            <div className="table w-full pl-2">
              <div className="table-header-group w-full ">
                <div className="flex h-14 items-center justify-between w-full border-b border-solid border-black">
                  <div className="table-cell w-1/4 font-poppins font-bold text-left">
                    Postion
                  </div>
                  <div className="table-cell w-1/4 font-poppins font-bold text-left">
                    Name
                  </div>
                  <div className="table-cell w-1/4 font-poppins font-bold text-left">
                    Entry
                  </div>
                  <div className="table-cell w-1/4 font-poppins font-bold text-left">
                    Date
                  </div>
                </div>
              </div>

              {topTen.map((entry) => (
                <div
                  key={entry._id}
                  className="flex h-14 items-center justify-between w-full border-b border-solid border-black"
                >
                  <div className="table-cell w-1/4 font-poppins">
                    {topTen.indexOf(entry) + 1}
                  </div>
                  <div className="table-cell w-1/4 font-poppins">
                    {entry.user.username}
                  </div>
                  <div className="table-cell w-1/4 font-poppins">
                    {`${entry.entry}  Kg`}
                  </div>
                  <div className="table-cell w-1/4 font-poppins">
                    {getFormattedDate(entry.entryDate)}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex relative">
              <button
                className="transition duration-300 bg-[#2a90e9] rounded-md p-5 text-white hover:bg-white hover:border-2 hover:border-solid hover:border-[#2a90e9] hover:text-[#2a90e9]"
                onClick={() => dispatch(setAddEntryOpen())}
              >
                New Entry
              </button>
              <AddEntry />
            </div>
          </div>
          {/* User Top Entry */}
          <div className="grid grid-cols-10 gap-2 w-[50%]">
            <div className="col-span-1">
              <h1>Position</h1>
              <h2>{userTop.position}</h2>
            </div>
            <div className="col-span-3">
              <h1>Name</h1>
              <h2>{userTop.user}</h2>
            </div>
            <div className="col-span-3">
              <h1>Entry</h1>
              <h2>{userTop.entry} Kg</h2>
            </div>
            <div className="col-span-3">
              <h1>Date</h1>
              <h2>{getFormattedDate(userTop.entryDate)}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeaderBoardDisplay;
