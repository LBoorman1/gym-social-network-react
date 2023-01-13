import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPostOpen } from "../../redux/reducers/PostModalSlice";

// Need to take the active community name to display in the widget so it is clear which
// community you are going to post to or leave.

// Background will be the same as the other widgets

// Manage posts button will take you to a modal with all of the posts that you have put
// in the selected community.

function PostWidget() {
  const communityName = useSelector(
    (state) => state.communities.activeCommunityName
  );

  const dispatch = useDispatch();

  return (
    <div className="bg-[#D9D9D9] p-2 hidden md:flex flex-col mx-2 h-fit rounded-md z-0 drop-shadow-xl">
      <div className="bg-white rounded-t-md p-2">
        {/* This is the name section will need to add a redux slice with user information that is filled on login */}
        <img src=""></img>
        <h2>Luke Boorman</h2>
        <div className="bg-white w-3/4 border border-solid self-center mt-2 translate-x-10"></div>
      </div>

      <div className="bg-white p-2 flex flex-wrap">
        {/* This is the middle section of the post widget will contain the buttons for managing posts adding post and 
        leaving community */}
        <button
          className="bg-[#79ADDC] p-2 rounded-md m-2 hover:bg-[#2274c6]"
          onClick={() => dispatch(setPostOpen())}
        >
          Add Post
        </button>
        <button className="bg-[#79ADDC] p-2 rounded-md m-2 hover:bg-[#2274c6]">
          Manage Posts
        </button>
        <button className="bg-[#79ADDC] p-2 rounded-md m-2 hover:bg-[#2274c6]">
          Leave Community
        </button>
        <div className="bg-white w-3/4 border border-solid self-center mt-4 translate-x-10"></div>
      </div>
      <div className="bg-white p-2 rounded-b-md">
        {/* This is the bottom section of the widget, contains the community name and the date that the user joined on */}
        <h2>{communityName ? communityName : "No Community Selected"}</h2>
      </div>
    </div>
  );
}

export default PostWidget;
