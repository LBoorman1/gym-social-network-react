import { configureStore } from "@reduxjs/toolkit";
import PostModalReducer from "../reducers/PostModalSlice";
import CommunityModalReducer from "../reducers/CommunityModalSlice";
import SearchModalReducer from "../reducers/SearchModalSlice";
import CommunitiesReducer from "../reducers/CommunitiesSlice";
import PostsReducer from "../reducers/PostsSlice";
import LeaderBoardModalReducer from "../reducers/LeaderBoardModalSlice";
import HamburgerMenuSlice from "../reducers/HamburgerMenuSlice";

export default configureStore({
  reducer: {
    postModal: PostModalReducer,
    communityModal: CommunityModalReducer,
    searchModal: SearchModalReducer,
    communities: CommunitiesReducer,
    posts: PostsReducer,
    leaderBoardModal: LeaderBoardModalReducer,
    hamburgerMenu: HamburgerMenuSlice,
  },
});
