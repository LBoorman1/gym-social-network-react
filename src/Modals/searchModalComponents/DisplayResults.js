import React from "react";
import Result from "./Result";

function DisplayResults({ suggestions }) {
  return (
    <div className="w-[75%] bg-slate-200 rounded-md flex flex-col">
      {suggestions.map((suggestion) => (
        <Result
          key={suggestion._id}
          id={suggestion._id}
          title={suggestion.communityName}
          description={suggestion.description}
        />
      ))}
    </div>
  );
}

export default DisplayResults;
