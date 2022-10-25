import { configureStore } from "@reduxjs/toolkit";
import PostModalReducer from "../reducers/PostModalSlice";

export default configureStore({
  reducer: {
    postModal: PostModalReducer,
  },
});
