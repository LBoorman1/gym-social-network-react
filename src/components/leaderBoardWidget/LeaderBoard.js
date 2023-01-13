import React from "react";
import { ChartSquareBarIcon } from "@heroicons/react/solid";

function LeaderBoard() {
  return (
    <div className="flex rounded-md mb-3 p-2 bg-[#f5f5f5]">
      <ChartSquareBarIcon className="h-5 w-5 mr-1" />
      <h2 className="font-semibold">Leader Board 1</h2>
    </div>
  );
}

export default LeaderBoard;
