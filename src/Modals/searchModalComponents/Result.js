import React from "react";
import axios from "axios";

function Result({ id, title, description }) {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorisation: `Bearer ${token}`,
    },
  };

  const handleJoinCommunity = async () => {
    try {
      const url = "http://localhost:5000/api/communities/join";
      const { data: res } = await axios.post(url, { communityId: id }, config);
      console.log(res.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex p-10 m-5 border border-black bg-slate-100 rounded-md justify-between text-sky-700 h-fit">
      <div className="flex flex-col">
        <h1 className="font-poppins font-bold">{title}</h1>
        <p className="font-poppins">{description}</p>
      </div>
      <div className="flex">
        <button
          className="bg-sky-100 hover:bg-sky-200 border-2 rounded-lg px-5  border-solid font-poppins border-sky-700 text-sky-700 font-bold"
          onClick={handleJoinCommunity}
        >
          Join
        </button>
      </div>
    </div>
  );
}

export default Result;
