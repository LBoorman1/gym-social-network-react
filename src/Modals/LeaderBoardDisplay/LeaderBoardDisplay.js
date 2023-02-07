import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLeaderBoardDisplayOpen } from "../../redux/reducers/LeaderBoardModalSlice";
import { XIcon } from "@heroicons/react/solid";

function LeaderBoardDisplay() {
  const show = useSelector(
    (state) => state.leaderBoardModal.leaderBoardDisplayOpen
  );

  console.log(show);
  const dispatch = useDispatch();

  if (!show) {
    return null;
  } else {
    return (
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-[#f5f5f5] flex flex-col z-20 items-center justify-center">
        <div className="flex w-full flex-col items-center gap-5">
          <div className="flex justify-between w-3/4 bg-white shadow-xl px-10 py-2 rounded-lg mt-2">
            <h1 className="font-poppins font-extrabold text-xl p-2">
              Your LeaderBoard
            </h1>
            <XIcon
              className="w-10 h-10"
              onClick={() => dispatch(setLeaderBoardDisplayOpen())}
            />
          </div>
        </div>
        <div className="bg-white w-full mt-2 h-full rounded-t-lg flex">
          {/* Left Side is The actual leaderBoard */}
          <div className="h-full m-2 w-[50%]">
            <div className="table w-full pl-2">
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
              <div className="flex h-14 items-center justify-between w-full">
                <div className="table-cell w-1/4 font-poppins">10</div>
                <div className="table-cell w-1/4 font-poppins">Luke</div>
                <div className="table-cell w-1/4 font-poppins">120kg</div>
                <div className="table-cell w-1/4 font-poppins">12/02/23</div>
              </div>
              <div className="flex h-14 items-center justify-between w-full">
                <div className="table-cell w-1/4 font-poppins">10</div>
                <div className="table-cell w-1/4 font-poppins">Luke</div>
                <div className="table-cell w-1/4 font-poppins">120kg</div>
                <div className="table-cell w-1/4 font-poppins">12/02/23</div>
              </div>
              <div className="flex h-14 items-center justify-between w-full">
                <div className="table-cell w-1/4 font-poppins">10</div>
                <div className="table-cell w-1/4 font-poppins">Luke</div>
                <div className="table-cell w-1/4 font-poppins">120kg</div>
                <div className="table-cell w-1/4 font-poppins">12/02/23</div>
              </div>
              <div className="flex h-14 items-center justify-between w-full">
                <div className="table-cell w-1/4 font-poppins">10</div>
                <div className="table-cell w-1/4 font-poppins">Luke</div>
                <div className="table-cell w-1/4 font-poppins">120kg</div>
                <div className="table-cell w-1/4 font-poppins">12/02/23</div>
              </div>
              <div className="flex h-14 items-center justify-between w-full">
                <div className="table-cell w-1/4 font-poppins">10</div>
                <div className="table-cell w-1/4 font-poppins">Luke</div>
                <div className="table-cell w-1/4 font-poppins">120kg</div>
                <div className="table-cell w-1/4 font-poppins">12/02/23</div>
              </div>
              <div className="flex h-14 items-center justify-between w-full">
                <div className="table-cell w-1/4 font-poppins">10</div>
                <div className="table-cell w-1/4 font-poppins">Luke</div>
                <div className="table-cell w-1/4 font-poppins">120kg</div>
                <div className="table-cell w-1/4 font-poppins">12/02/23</div>
              </div>
              <div className="flex h-14 items-center justify-between w-full">
                <div className="table-cell w-1/4 font-poppins">10</div>
                <div className="table-cell w-1/4 font-poppins">Luke</div>
                <div className="table-cell w-1/4 font-poppins">120kg</div>
                <div className="table-cell w-1/4 font-poppins">12/02/23</div>
              </div>
              <div className="flex h-14 items-center justify-between w-full">
                <div className="table-cell w-1/4 font-poppins">10</div>
                <div className="table-cell w-1/4 font-poppins">Luke</div>
                <div className="table-cell w-1/4 font-poppins">120kg</div>
                <div className="table-cell w-1/4 font-poppins">12/02/23</div>
              </div>
              <div className="flex h-14 items-center justify-between w-full">
                <div className="table-cell w-1/4 font-poppins">10</div>
                <div className="table-cell w-1/4 font-poppins">Luke</div>
                <div className="table-cell w-1/4 font-poppins">120kg</div>
                <div className="table-cell w-1/4 font-poppins">12/02/23</div>
              </div>
              <div className="flex h-14 items-center justify-between w-full">
                <div className="table-cell w-1/4 font-poppins">10</div>
                <div className="table-cell w-1/4 font-poppins">Luke</div>
                <div className="table-cell w-1/4 font-poppins">120kg</div>
                <div className="table-cell w-1/4 font-poppins">12/02/23</div>
              </div>
            </div>
            <button className="bg-[#79ADDC] rounded-md p-5">New Entry</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LeaderBoardDisplay;
