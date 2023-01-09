import React from "react";
import { XIcon } from "@heroicons/react/solid";

function NewLeaderBoardModal() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-modal-bg flex items-center justify-center z-20">
      <div className="flex flex-col w-full h-full justify-center items-center gap-3">
        <div className="flex items-center justify-between bg-white rounded w-[80%] p-4">
          <h1 className="font-extrabold text-xl">Create A New Leader-Board!</h1>
          <XIcon className="h-10 w-10" />
        </div>
        <div className="w-[80%] h-[75%] bg-white rounded p-4 flex flex-col justify-center items-center">
          <label htmlFor="title">Leader Board Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title of your new leader board"
            className="bg-gray-400 rounded placeholder-gray-300 placeholder:italic placeholder:text-white p-4 w-[50%]"
          />

          <label htmlFor="description">Leader Board Description: </label>
          <textarea
            type="text"
            name="description"
            id="description"
            placeholder="Description of your new leader board"
            className="bg-gray-400 rounded placeholder-gray-300 placeholder:italic placeholder:text-white p-4 w-[50%] h-40"
          />

          <div className="flex">
            <label htmlFor="timed">Timed Leader Board?: </label>
            <input type="checkbox" name="timed" id="timed" />

            <label htmlFor="endDate">End Date: </label>
            <input
              type="datetime"
              name="endDate"
              id="endDate"
              className="placeholder:italic placeholder:text-white bg-gray-400"
            />
          </div>

          <input
            type="number"
            name="memberLimit"
            id="memberLimit"
            placeholder="Member Limit"
            className="bg-gray-400 rounded placeholder-gray-300 placeholder:italic placeholder:text-white"
          />
        </div>
      </div>
    </div>
  );
}

export default NewLeaderBoardModal;
