import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPostOpen } from "../../redux/reducers/PostModalSlice";
import { getUserInfo } from "../../redux/reducers/UserSlice";
import { useEffect } from "react";

function PostWidget() {
  const communityName = useSelector(
    (state) => state.communities.activeCommunityName
  );

  const dispatch = useDispatch();
  const userName = useSelector((state) => state.users.userName);
  const profilePhoto = useSelector((state) => state.users.profilePhoto);

  useEffect(() => {
    if (userName == "") {
      dispatch(getUserInfo());
    }
  }, [dispatch, userName]);

  return (
    <div className="bg-[#D9D9D9] p-2 hidden md:flex flex-col mx-2 h-fit rounded-md z-0 drop-shadow-xl">
      <div className="bg-white rounded-t-md p-2 flex items-center gap-3">
        {/* This is the name section will need to add a redux slice with user information that is filled on login */}
        <img
          src={profilePhoto}
          className="h-12 w-12 rounded-full border border-solid border-black"
        />
        <h2 className="font-poppins font-semibold text-sky-700">{userName}</h2>
      </div>

      <div className="bg-white p-2 flex flex-wrap">
        {/* This is the middle section of the post widget will contain the buttons for managing posts adding post and 
        leaving community */}
        <button
          className="bg-sky-100 hover:bg-sky-200 rounded px-3 py-2 font-poppins font-semibold text-sky-700 mx-1 my-1"
          onClick={() => dispatch(setPostOpen())}
        >
          Add Post
        </button>
        <button className="bg-sky-100 hover:bg-sky-200 rounded px-3 py-2 font-poppins font-semibold text-sky-700 mx-1 my-1">
          Manage Posts
        </button>
        <button className="bg-sky-100 hover:bg-sky-200 rounded px-3 py-2 font-poppins font-semibold text-sky-700 mx-1 my-1">
          Leave Community
        </button>
      </div>
      <div className="bg-white p-2 rounded-b-md">
        {/* This is the bottom section of the widget, contains the community name and the date that the user joined on */}
        <h2 className="font-poppins font-semibold text-sky-700">
          {communityName ? communityName : "No Community Selected"}
        </h2>
      </div>
    </div>
  );
}

export default PostWidget;
