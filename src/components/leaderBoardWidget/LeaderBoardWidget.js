import React from "react";
import { UserGroupIcon } from "@heroicons/react/solid";
import LeaderBoard from "./LeaderBoard";
import { PlusIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { setLeaderBoardOpen } from "../../redux/reducers/LeaderBoardModalSlice";
import { useEffect } from "react";
import { getLeaderBoards } from "../../redux/reducers/LeaderBoardsSlice";

function LeaderBoardWidget() {
  const dispatch = useDispatch();

  let activeCommunity = useSelector(
    (state) => state.communities.activeCommunity
  );

  const leaderBoards = useSelector((state) => state.leaderBoards.leaderBoards);

  useEffect(() => {
    dispatch(getLeaderBoards(activeCommunity));
  }, [activeCommunity, dispatch]);

  return (
    <div className="hidden md:flex flex-col items-center bg-[#D9D9D9] mt-2 mx-2 p-2 h-fit rounded-md z-0 basis-1/4 drop-shadow-xl">
      <h1 className="mb-2 font-poppins">Your LeaderBoards</h1>
      <div className="w-full">
        {leaderBoards.map((leaderBoard) => (
          <LeaderBoard
            title={leaderBoard.title}
            key={leaderBoard._id}
            _id={leaderBoard._id}
          />
        ))}
      </div>
      <div className="flex flex-row justify-between w-3/4 mb-2 ">
        <button className="hover:bg-[#A6A6A6] p-2 rounded-md">
          <SearchIcon className="h-5 w-5" />
        </button>
        <button className="hover:bg-[#A6A6A6] p-2 rounded-md">
          <PlusIcon
            className="h-5 w-5"
            onClick={() => dispatch(setLeaderBoardOpen())}
          />
        </button>
        <button className="hover:bg-[#A6A6A6] p-2 rounded-md">
          <UserGroupIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default LeaderBoardWidget;
