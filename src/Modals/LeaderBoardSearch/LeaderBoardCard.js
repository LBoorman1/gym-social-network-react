import React from "react";
import { useDispatch } from "react-redux";
import { joinLeaderBoard } from "../../redux/reducers/LeaderBoardsSlice";

function LeaderBoardCard({ id, title, memberLimit, description }) {
  const dispatch = useDispatch();
  return (
    <div className="bg-white shadow-xl flex flex-col p-10 rounded-lg w-[350px] mb-5">
      <h1 className="font-poppins font-extrabold text-center">{title}</h1>
      <br />
      <div className="w-full flex flex-col justify-center items-center">
        <span className="font-poppins">{memberLimit}</span>
        <h2 className="font-poppins font-semibold">Member Limit</h2>
      </div>

      <div className="flex justify-center group relative">
        <button
          className="rounded-md bg-[#79ADDC] hover:bg-[#2274c6] p-3 mt-1 font-poppins font-semibold"
          onClick={() => dispatch(joinLeaderBoard(id))}
        >
          Join
        </button>
        <div className="bg-white border-2 border-solid border-black hidden absolute top-[60px] group-hover:flex flex-col w-[300px] rounded-lg z-20">
          <h1 className="p-2 font-poppins font-semibold text-lg">About: </h1>
          <span className="p-2 font-poppins text-lg">{description}</span>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoardCard;
