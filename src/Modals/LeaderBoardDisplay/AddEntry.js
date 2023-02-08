import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addLeaderBoardEntry } from "../../redux/reducers/EntriesSlice";
import { useDispatch } from "react-redux";

// This is the component with a form for entering a new entry to the leaderboard
function AddEntry() {
  const dispatch = useDispatch();

  const activeLeaderBoard = useSelector(
    (state) => state.leaderBoards.activeLeaderBoard
  );

  const [entry, setEntry] = useState({
    entry: "",
    leaderBoardId: activeLeaderBoard,
  });

  const handleChange = ({ currentTarget: input }) => {
    setEntry({ ...entry, [input.name]: input.value });
  };

  const handleSubmit = async (event) => {
    // this is the function to send off the post request with the form attributes
    event.preventDefault();
    dispatch(addLeaderBoardEntry(entry));
  };

  const show = useSelector((state) => state.entries.addEntryModal);
  if (!show) {
    return null;
  } else {
    return (
      <div className="absolute left-[150px] bottom-[200px] rounded-lg bg-white border border-solid border-black p-10">
        <div className="flex flex-col gap-5">
          <div className="flex">
            <input
              className="bg-sky-50 rounded-l-full focus:border focus:border-solid focus:border-sky-700 p-2 placeholder:text-sky-700 text-sky-700 font-semibold placeholder:font-semibold"
              type="text"
              name="entry"
              id="entry"
              value={entry.entry}
              onChange={handleChange}
              placeholder="Enter Achieved Lift"
            />
            <span className="bg-sky-50 rounded-r-full p-2 text-sky-700 font-semibold">
              Kg
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-sky-700 p-2">Upload Proof: </span>
            <input
              type="file"
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
            />
          </div>
          <button
            className="py-2 px-4 rounded-full bg-sky-50 hover:bg-sky-100 text-sky-700 font-semibold"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default AddEntry;
