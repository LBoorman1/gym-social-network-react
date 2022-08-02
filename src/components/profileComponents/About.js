import React from "react";

function About() {
  return (
    <div className="flex flex-col pt-5 lg:col-span-7 lg:col-start-4 lg:pt-20">
      <h1 className="font-bold text-xl md:px-10 justify-self-center">
        About Me:
      </h1>
      <p className="md:px-10 justify-self-center">
        It makes it easier to control Figma via keyboard commands, such as
        nudging objects or copying/pasting. I use the undo command a lot; it’s
        very easy to move objects around accidentally.
      </p>
    </div>
  );
}

export default About;
