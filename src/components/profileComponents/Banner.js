import React from "react";

function Banner({ picture, username }) {
  return (
    <div className="flex justify-start pl-5 pt-5 gap-5 lg:pl-20 lg:pt-20 lg:col-span-2">
      <img
        className="h-[100px] w-[100px] rounded-full border-2  border-black shadow-sm"
        src={picture}
        alt=""
      />
      <h1 className="self-center font-bold text-2xl">{username}</h1>
    </div>
  );
}

export default Banner;
