import { configureStore } from "@reduxjs/toolkit";
import PostModalReducer from "../reducers/PostModalSlice";
import CommunityModalReducer from "../reducers/CommunityModalSlice";
import SearchModalReducer from "../reducers/SearchModalSlice";

export default configureStore({
  reducer: {
    postModal: PostModalReducer,
    communityModal: CommunityModalReducer,
    searchModal: SearchModalReducer,
  },
});
