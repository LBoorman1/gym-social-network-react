import React from "react";

function ErrorRender({ error }) {
  return (
    <div className="flex flex-col w-full items-center basis-0.7 rounded-md h-full overflow-hidden mt-1">
      <div className="bg-sky-100 w-full flex justify-center p-5">
        <h1 className="font-poppins font-bold text-sky-700 text-xl">
          Welcome to the Feed Page
        </h1>
      </div>
      <div className="bg-gradient-to-b from-sky-100 to-sky-200 w-full flex justify-center p-5">
        <p className="font-poppins font-semibold text-lg text-sky-700">
          If you are new, join or create a community to get started! Otherwise,
          select a community to view the posts
        </p>
      </div>
    </div>
  );
}

export default ErrorRender;
