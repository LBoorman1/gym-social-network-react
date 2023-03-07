import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Progress() {
  const userProgress = useSelector((state) => state.entries.userProgress);

  if (userProgress.errorMessage) {
    return (
      <div className="flex flex-col m-5 border-2 rounded-lg border-solid border-green-600 p-5 bg-green-50 drop-shadow-xl">
        <h1 className="text-xl font-poppins font-extrabold text-green-600">
          Progress
        </h1>
        <p className="font-poppins text-lg">
          Create atleast two entries to view your progress
        </p>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col m-5 border-2 rounded-lg border-solid border-green-600 p-5 bg-green-50 drop-shadow-xl">
        <h1 className="text-xl font-poppins font-extrabold text-green-600">
          {userProgress.title}
        </h1>
        <p className="font-poppins text-lg">{userProgress.differenceMessage}</p>
        <p className="font-poppins text-lg">{userProgress.encouragement}</p>
      </div>
    );
  }
}

export default Progress;
