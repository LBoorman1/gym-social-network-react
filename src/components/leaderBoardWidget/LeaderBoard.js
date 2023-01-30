import React from "react";
import { ChartSquareBarIcon } from "@heroicons/react/solid";

function LeaderBoard({ title }) {
  return (
    <div className="flex rounded-md mb-3 p-2 bg-white hover:bg-[#f5f5f5]">
      <ChartSquareBarIcon className="h-5 w-5 mr-1" />
      <h2 className="font-semibold">{title}</h2>
    </div>
  );
}

export default LeaderBoard;
