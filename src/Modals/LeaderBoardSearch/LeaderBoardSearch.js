import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { XIcon } from "@heroicons/react/solid";
import { setLeaderBoardSearchOpen } from "../../redux/reducers/LeaderBoardsSearchModalSlice";
import LeaderBoardCard from "./LeaderBoardCard";

function LeaderBoardSearch() {
  const show = useSelector(
    (state) => state.leaderBoardsSearch.leaderBoardSearchIsOpen
  );
  const dispatch = useDispatch();

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
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-[#f5f5f5] flex flex-col z-20 items-center justify-center">
        <div className="flex w-3/4 h-3/4 flex-col items-center gap-5">
          <div className="flex justify-between w-3/4 bg-white shadow-xl p-10 rounded-lg">
            <h1 className="font-poppins font-extrabold text-xl">
              Find a Leader Board To Join
            </h1>
            <XIcon
              className="w-10 h-10"
              onClick={() => dispatch(setLeaderBoardSearchOpen())}
            />
          </div>
          <div className="w-full flex gap-5 flex-wrap">
            <LeaderBoardCard />
            <LeaderBoardCard />
            <LeaderBoardCard />
            <LeaderBoardCard />
            <LeaderBoardCard />
            <LeaderBoardCard />
          </div>
        </div>
      </div>
    );
  }
}

export default LeaderBoardSearch;
