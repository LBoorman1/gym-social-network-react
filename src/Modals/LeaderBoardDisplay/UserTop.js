import React from "react";
import { useSelector } from "react-redux";
function UserTop() {
  const userTop = useSelector((state) => state.entries.userTopEntry);

  const getFormattedDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  };

  const leaderBoardName = useSelector(
    (state) => state.leaderBoards.activeLeaderBoardName
  );

  return (
    <div className="flex flex-col mx-5 mt-2 mb-2 border-2 border-solid border-sky-700 h-fit rounded-lg bg-sky-50 p-5 drop-shadow-xl">
      <h1 className="font-poppins font-bold text-sky-700 text-xl mb-2">
        Your Top Entry In {leaderBoardName}
      </h1>
      <div className="grid grid-cols-10 gap-10">
        <div className="col-span-2">
          <h1 className="font-poppins text-xl text-center">Position</h1>
          <h2 className="text-center font-poppins text-lg">
            {userTop.position}
          </h2>
        </div>
        <div className="col-span-3">
          <h1 className="font-poppins text-xl">Name</h1>
          <h2 className="font-poppins text-lg">{userTop.user}</h2>
        </div>
        <div className="col-span-2">
          <h1 className="font-poppins text-xl">Entry</h1>
          <h2 className="font-poppins text-lg">{userTop.entry} Kg</h2>
        </div>
        <div className="col-span-3">
          <h1 className="font-poppins text-xl">Date</h1>
          <h2 className="font-poppins text-lg">
            {getFormattedDate(userTop.entryDate)}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default UserTop;
