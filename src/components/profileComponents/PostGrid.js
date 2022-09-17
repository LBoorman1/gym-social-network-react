import React from "react";

function PostGrid({ picture }) {
  //This will end up taking posts and mapping through them, displaying the post.picture but on click will show more information
  return (
    <div className="flex justify-center mt-4">
      <div className="w-3/4 grid lg:grid-cols-3 gap-x-2 gap-y-2 items-center">
        <img className="min-h-max " src={picture} alt="" />
        <img className="min-h-max " src={picture} alt="" />
        <img className="min-h-max " src={picture} alt="" />
        <img className="min-h-max " src={picture} alt="" />
        <img className="min-h-max " src={picture} alt="" />
        <img className="min-h-max " src={picture} alt="" />
        <img className="min-h-max " src={picture} alt="" />
        <img className="min-h-max " src={picture} alt="" />
        <img className="min-h-max " src={picture} alt="" />
        <img className="min-h-max " src={picture} alt="" />
        <img className="min-h-max " src={picture} alt="" />
        <img className="min-h-max " src={picture} alt="" />
        <img className="min-h-max " src={picture} alt="" />
        <img className="min-h-max " src={picture} alt="" />
        <img className="min-h-max " src={picture} alt="" />
        <img className="min-h-max " src={picture} alt="" />
        <img className="min-h-max " src={picture} alt="" />
        <img className="min-h-max " src={picture} alt="" />
        <img className="min-h-max " src={picture} alt="" />
      </div>
    </div>
  );
}

export default PostGrid;
