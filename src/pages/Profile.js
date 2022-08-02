import React from "react";
import About from "../components/profileComponents/About";
import Banner from "../components/profileComponents/Banner";

// This is the page for the own users profile, will have seperate page for other users
function Profile() {
  // Profile picture
  // Username
  // grid of posts
  // edit profile button
  // about section / bio

  return (
    <div className="bg-gray-400 h-full w-full flex justify-center items-center">
      <div className="container bg-white rounded-md h-5/6 flex flex-col">
        <div className="flex flex-col md:gap-5 lg:grid lg:grid-cols-10">
          <Banner
            picture={
              "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            }
            username={"LukeBWood"}
          />
          <About />
        </div>
      </div>
    </div>
  );
}

export default Profile;
