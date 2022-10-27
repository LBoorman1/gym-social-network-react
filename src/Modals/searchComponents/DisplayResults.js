import React from "react";
import Result from "./Result";

function DisplayResults({ suggestions }) {
  return (
    <div className="w-[75%] bg-slate-200 rounded-md">
      {suggestions.map((suggestion) => (
        <Result
          title={suggestion.communityName}
          description={suggestion.description}
        />
      ))}
    </div>
  );
}

export default DisplayResults;
