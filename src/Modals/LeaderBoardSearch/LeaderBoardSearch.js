import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { XIcon } from "@heroicons/react/solid";
import { setLeaderBoardSearchOpen } from "../../redux/reducers/LeaderBoardsSearchModalSlice";
import LeaderBoardCard from "./LeaderBoardCard";
import { getLeaderBoards } from "../../redux/reducers/LeaderBoardsSlice";

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

  let activeCommunity = useSelector(
    (state) => state.communities.activeCommunity
  );

  useEffect(() => {
    if (activeCommunity != null) {
      dispatch(getLeaderBoards(activeCommunity));
    }
  }, [activeCommunity, dispatch]);

  let activeCommunityName = useSelector(
    (state) => state.communities.activeCommunityName
  );

  const leaderBoards = useSelector((state) => state.leaderBoards.leaderBoards);

  if (!show) {
    return null;
  } else {
    return (
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-[#f5f5f5] flex flex-col z-20 items-center justify-center overflow-auto">
        <div className="flex w-3/4 h-3/4 flex-col items-center gap-5">
          <div className="flex justify-between w-3/4 bg-white shadow-xl p-10 rounded-lg">
            <h1 className="font-poppins font-extrabold text-xl">
              Find a Leader Board To Join
            </h1>
            <h1 className="font-poppins font-extrabold text-xl text-[#79ADDC]">
              {activeCommunityName}
            </h1>
            <XIcon
              className="w-10 h-10"
              onClick={() => dispatch(setLeaderBoardSearchOpen())}
            />
          </div>
          <div className="w-full flex gap-5 flex-wrap">
            {leaderBoards.map((leaderBoard) => (
              <LeaderBoardCard
                key={leaderBoard._id}
                id={leaderBoard._id}
                title={leaderBoard.title}
                memberCount={10}
                description={leaderBoard.description}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default LeaderBoardSearch;
