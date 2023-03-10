import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addLeaderBoardEntry } from "../../redux/reducers/EntriesSlice";
import { useDispatch } from "react-redux";
import { XIcon } from "@heroicons/react/solid";
import { setAddEntryOpen } from "../../redux/reducers/EntriesSlice";
import ProofView from "./ProofView";

// This is the component with a form for entering a new entry to the leaderboard
function AddEntry() {
  const dispatch = useDispatch();

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setData({ ...data, image: reader.result });
    };
  };

  const activeLeaderBoard = useSelector(
    (state) => state.leaderBoards.activeLeaderBoard
  );

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (event) => {
    // this is the function to send off the post request with the form attributes
    event.preventDefault();
    dispatch(addLeaderBoardEntry(data));
  };

  const [data, setData] = useState({
    entry: "",
    image: "",
    leaderBoardId: activeLeaderBoard,
  });

  const show = useSelector((state) => state.entries.addEntryModal);
  if (!show) {
    return null;
  } else {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-modal-bg flex items-center justify-center z-20">
        <div className="rounded-lg bg-white border border-solid border-black p-10">
          <div className="flex flex-col gap-5">
            <div className="flex gap-10 items-center">
              <div className="flex">
                <input
                  className="bg-sky-50 rounded-l-full focus:border focus:border-solid focus:border-sky-700 p-2 placeholder:text-sky-700 text-sky-700 font-semibold placeholder:font-semibold"
                  type="text"
                  name="entry"
                  id="entry"
                  value={data.entry}
                  onChange={handleChange}
                  placeholder="Enter Achieved Lift"
                />
                <span className="bg-sky-50 rounded-r-full p-2 text-sky-700 font-semibold">
                  Kg
                </span>
              </div>
              <XIcon
                className="h-7 w-7 cursor-pointer"
                onClick={() => dispatch(setAddEntryOpen())}
              />
            </div>

            <div className="flex flex-col">
              <span className="text-sky-700 p-2">Upload Proof: </span>
              <input
                onChange={handleImage}
                type="file"
                name="image"
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
      </div>
    );
  }
}

export default AddEntry;
