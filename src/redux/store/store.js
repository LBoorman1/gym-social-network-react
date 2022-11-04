import { configureStore } from "@reduxjs/toolkit";
import PostModalReducer from "../reducers/PostModalSlice";
import CommunityModalReducer from "../reducers/CommunityModalSlice";
import SearchModalReducer from "../reducers/SearchModalSlice";
import CommunitiesReducer from "../reducers/CommunitiesSlice";

export default configureStore({
  reducer: {
    postModal: PostModalReducer,
    communityModal: CommunityModalReducer,
    searchModal: SearchModalReducer,
    communities: CommunitiesReducer,
  },
});
