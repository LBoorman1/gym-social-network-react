import React from "react";
import { useSelector } from "react-redux";
function UserTop() {
  const userTop = useSelector((state) => state.entries.userTopEntry);

  const getFormattedDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  };

  return (
    <div className="grid grid-cols-10 gap-4 w-[50%]">
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
  );
}

export default UserTop;
