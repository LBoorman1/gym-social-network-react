import React, { useState } from "react";
import CommunityWidget from "../components/communityWidget/CommunityWidget";
import Feed from "../components/feedComponents/Feed";
import NavBar from "../components/navbarComponents/NavBar";
import AddPostButton from "../components/AddPostButton";
import PostWidget from "../components/postWidget/PostWidget";
import LeaderBoardWidget from "../components/leaderBoardWidget/LeaderBoardWidget";

function Timeline() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-row w-full">
        <div className="hidden sticky top-[108px] md:flex flex-col basis-1/4 h-full gap-1 mt-2">
          <CommunityWidget />
          <LeaderBoardWidget />
        </div>
        <div className="flex md:basis-1/2">
          <Feed />
        </div>
        <div className="hidden sticky top-[108px] md:flex basis-1/4 h-full gap-1 mt-2">
          <PostWidget />
        </div>
      </div>
    </div>
  );
}

export default Timeline;
