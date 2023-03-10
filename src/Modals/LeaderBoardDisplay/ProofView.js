import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { XIcon } from "@heroicons/react/solid";
import { setProofViewOpen } from "../../redux/reducers/EntriesSlice";

function ProofView() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.entries.proofViewOpen);
  const activeEntry = useSelector((state) => state.entries.activeEntry);
  if (!show) {
    return null;
  } else {
    const extension = activeEntry.image.url.split(".").pop();
    const isPicture = (extension == "jpg") | (extension == "png");
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-modal-bg flex items-center justify-center z-20">
        <div className="rounded-lg bg-white border border-solid border-black p-10">
          <XIcon
            className="h-5 w-5 cursor-pointer"
            onClick={() => dispatch(setProofViewOpen([]))}
          />
          {isPicture ? (
            <img className="rounded-md w-full " src={activeEntry.image.url} />
          ) : (
            <video className="rounded-md w-full" controls>
              <source src={activeEntry.image.url} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    );
  }
}

export default ProofView;
