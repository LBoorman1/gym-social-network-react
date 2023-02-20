import React from "react";

function Comment({ _id, creator, comment, date }) {
  const getFormattedDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString() + "   " + date.toLocaleTimeString();
  };

  return (
    <div className="w-full p-5 bg-sky-100 flex flex-col mb-2">
      <div className="flex gap-2">
        <h1 className="font-poppins text-lg  font-extrabold">{creator}: </h1>
        <h2 className="font-poppins text-lg font-semibold">{comment}</h2>
      </div>
      <h2 className="text-sm font-poppins font-light">
        {getFormattedDate(date)}
      </h2>
    </div>
  );
}

export default Comment;
