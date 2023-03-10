import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyRow from "./EmptyRow";
import { ThumbDownIcon, FlagIcon } from "@heroicons/react/solid";
import { addReport, setProofViewOpen } from "../../redux/reducers/EntriesSlice";
import ProofView from "./ProofView";
function TopTen() {
  const dispatch = useDispatch();

  const topTen = useSelector((state) => state.entries.topTenEntries);
  const getFormattedDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  };

  const userEmail = useSelector((state) => state.users.emailAddress);

  if (topTen.length == 0) {
    return (
      <div className="table w-full p-5 border-2 border-sky-700 border-solid rounded-lg drop-shadow-xl bg-sky-50 mx-5 mt-2 mb-2 overflow-auto h-3/4">
        <div className="table-header-group w-full ">
          <div className="flex h-14 items-center justify-between w-full border-b border-solid border-black">
            <div className="table-cell w-1/4 font-poppins font-bold text-left">
              Postion
            </div>
            <div className="table-cell w-1/4 font-poppins font-bold text-left">
              Name
            </div>
            <div className="table-cell w-1/4 font-poppins font-bold text-left">
              Entry
            </div>
            <div className="table-cell w-1/4 font-poppins font-bold text-left">
              Date
            </div>
          </div>
        </div>
        <EmptyRow Index={1} />
        <EmptyRow Index={2} />
        <EmptyRow Index={3} />
        <EmptyRow Index={4} />
        <EmptyRow Index={5} />
        <EmptyRow Index={6} />
        <EmptyRow Index={7} />
        <EmptyRow Index={8} />
        <EmptyRow Index={9} />
        <EmptyRow Index={10} />
      </div>
    );
  } else {
    return (
      <div className="table w-full p-5 border-2 border-sky-700 border-solid rounded-lg drop-shadow-xl bg-sky-50 mx-5 mt-2 mb-2 overflow-auto h-full">
        <div className="table-header-group w-full ">
          <div className="flex h-14 items-center justify-between w-full border-b border-solid border-black">
            <div className="table-cell w-1/4 font-poppins font-bold text-left">
              Postion
            </div>
            <div className="table-cell w-1/4 font-poppins font-bold text-left">
              Name
            </div>
            <div className="table-cell w-1/4 font-poppins font-bold text-left">
              Entry
            </div>
            <div className="table-cell w-1/4 font-poppins font-bold text-left">
              Date
            </div>
          </div>
        </div>
        {topTen.map((entry) => (
          <div
            key={entry._id}
            className="flex h-14 items-center justify-between w-full border-b border-solid border-black"
          >
            <div className="table-cell w-1/4 font-poppins">
              {topTen.indexOf(entry) + 1}
            </div>
            <div className="table-cell w-1/4 font-poppins">
              {entry.user.username}
            </div>
            <div className="flex w-1/4 font-poppins gap-2">
              {`${entry.entry}  Kg`}
              <FlagIcon
                className="h-5 w-5 cursor-pointer"
                onClick={() => dispatch(setProofViewOpen(entry))}
              />
            </div>
            <div className="flex w-1/4 font-poppins gap-2 items-center">
              {getFormattedDate(entry.entryDate)}
              <ThumbDownIcon
                className={`w-5 h-5 text-sky-700 cursor-pointer`}
                onClick={() => dispatch(addReport(entry._id))}
              />
            </div>
          </div>
        ))}
        <ProofView />
      </div>
    );
  }
}

export default TopTen;
