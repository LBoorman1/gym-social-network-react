import React, { useState } from "react";
import CommunityWidget from "../components/CommunityWidget";
import Feed from "../components/Feed";
import NavBar from "../components/NavBar";

function Timeline() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <NavBar setShow={setShow} />
      <div className="flex w-full">
        <CommunityWidget />
        <Feed show={show} setShow={setShow} />
      </div>
    </div>
  );
}

export default Timeline;
