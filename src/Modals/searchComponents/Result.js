import React from "react";

function Result({ title, description }) {
  return (
    <div className="border-t border-[#79ADDC]">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Result;
