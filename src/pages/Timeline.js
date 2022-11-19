import React, { useState } from "react";
import CommunityWidget from "../components/communityWidget/CommunityWidget";
import Feed from "../components/feedComponents/Feed";
import NavBar from "../components/navbarComponents/NavBar";
import AddPostButton from "../components/AddPostButton";

function Timeline() {
  return (
    <div>
      <NavBar />
      <div className="flex w-full">
        <CommunityWidget />
        <Feed />
        {/* <AddPostButton /> */}
      </div>
    </div>
  );
}

export default Timeline;
