import React from "react";
import { UserGroupIcon } from "@heroicons/react/solid";

function Community({ _id, name, active }) {
  return (
    <div
      className={
        "flex rounded-md mb-3 p-2 " +
        (active ? "bg-[#79ADDC]" : "bg-white hover:bg-[#f5f5f5]")
      }
    >
      <UserGroupIcon className="h-5 w-5 mr-1" />
      <h2 className="font-semibold">{name}</h2>
    </div>
  );
}

export default Community;
