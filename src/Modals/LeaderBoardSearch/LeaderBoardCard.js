import React from "react";

function LeaderBoardCard() {
  return (
    <div className="bg-white shadow-xl flex flex-col p-10 rounded-lg w-fit hover:shadow-inner hover:shadow-[#79ADDC]">
      <h1 className="font-poppins font-extrabold">Leader Board Name</h1>
      <br />
      <div className="w-full flex justify-center">
        <span className="font-poppins">10</span>
      </div>
      <h2 className="font-poppins font-semibold">Members Currently</h2>
    </div>
  );
}

export default LeaderBoardCard;
