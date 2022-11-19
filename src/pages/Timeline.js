import React, { useState } from "react";
import CommunityWidget from "../components/communityWidget/CommunityWidget";
import Feed from "../components/feedComponents/Feed";
import NavBar from "../components/navbarComponents/NavBar";
import AddPostButton from "../components/AddPostButton";
import PostWidget from "../components/postWidget/PostWidget";

function Timeline() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-row w-full">
        <CommunityWidget />
        <Feed />
        <PostWidget />
      </div>
    </div>
  );
}

export default Timeline;
