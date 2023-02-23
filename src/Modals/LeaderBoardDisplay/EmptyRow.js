import React from "react";

function emptyRow({ Index }) {
  return (
    <div className="flex h-14 items-center justify-between w-full border-b border-solid border-black">
      <div className="table-cell w-1/4 font-poppins">{Index}</div>
      <div className="table-cell w-1/4 font-poppins">
        <h2>No Name</h2>
      </div>
      <div className="table-cell w-1/4 font-poppins">
        <h2>No Entry</h2>
      </div>
      <div className="table-cell w-1/4 font-poppins">
        <h2>No Date</h2>
      </div>
    </div>
  );
}

export default emptyRow;
