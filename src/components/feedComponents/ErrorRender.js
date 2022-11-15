import React from "react";

function ErrorRender({ error }) {
  return (
    <div className="flex flex-col items-center w-full basis-0.7 rounded-md h-full justify-center overflow-hidden">
      <h2>{error}</h2>
    </div>
  );
}

export default ErrorRender;
