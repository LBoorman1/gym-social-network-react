import React from "react";

function PostNew() {
  return (
    <div className="postContainer bg-[#D9D9D9] h-full flex flex-col w-[50%] rounded-sm">
      <div className="userInfo bg-white p-5 rounded-md my-5 mx-5 h-[80px] flex items-center">
        <span className="rounded-full bg-[#79ADDC] h-[40px] w-[40px] inline-block mr-2" />
        <h2 className="font-bold">Post Creator Name Here</h2>
      </div>
      <div className="photoAndCaption bg-white p-5 rounded-md mb-5 mx-5 h-[32rem] flex flex-col items-center">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            className="rounded-md w-[75%]"
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          />
          <div className="caption bg-[#D9D9D9] m-5 rounded-md">
            <p className="font-semibold p-5 text-lg">
              This is a description given by the user. It acts as a caption for
              the photo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostNew;
