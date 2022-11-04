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
    <div className="flex p-10 m-5 border border-black bg-slate-100 rounded-md justify-between">
      <div className="flex flex-col">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="flex">
        <button
          className="bg-[#79ADDC] border-2 rounded-lg px-5 hover:bg-[#79ADEE] border-solid"
          onClick={handleJoinCommunity}
        >
          Join
        </button>
      </div>
    </div>
  );
}

export default Result;
