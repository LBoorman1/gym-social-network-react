import React from "react";

function MenuItem({ text }) {
  return (
    <div className="bg-white p-1 m-2 rounded-lg hover:bg-[#D9D9D9]">
      <p className="font-poppins font-medium p-1">{text}</p>
    </div>
  );
}

export default MenuItem;
