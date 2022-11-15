import { configureStore } from "@reduxjs/toolkit";
import PostModalReducer from "../reducers/PostModalSlice";
import CommunityModalReducer from "../reducers/CommunityModalSlice";
import SearchModalReducer from "../reducers/SearchModalSlice";
import CommunitiesReducer from "../reducers/CommunitiesSlice";
import PostsReducer from "../reducers/PostsSlice";

export default configureStore({
  reducer: {
    postModal: PostModalReducer,
    communityModal: CommunityModalReducer,
    searchModal: SearchModalReducer,
    communities: CommunitiesReducer,
    posts: PostsReducer,
  },
});
