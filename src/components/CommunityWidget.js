import React from "react";
import Community from "./Community";

function CommunityWidget() {
  return (
    <div className="hidden md:block absolute bg-[#D9D9D9] mt-2 mx-2 p-2 h-[50vh] rounded-md">
      <Community active={true} />
      <Community active={false} />
      <Community active={false} />
      <Community active={false} />
    </div>
  );
}

export default CommunityWidget;
