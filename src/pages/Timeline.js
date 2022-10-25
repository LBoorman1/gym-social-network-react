import React, { useState } from "react";
import CommunityWidget from "../components/communityWidget/CommunityWidget";
import Feed from "../components/Feed";
import NavBar from "../components/navbarComponents/NavBar";

function Timeline() {
  return (
    <div>
      <NavBar />
      <div className="flex w-full">
        <CommunityWidget />
        <Feed />
      </div>
    </div>
  );
}

export default Timeline;
