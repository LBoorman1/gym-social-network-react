//this slice handles storing the user's communities and holding the community
//that they are currently viewing.

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  communities: [],
  activeCommunity: null,
  activeCommunityName: "",
  activeCommunityDescription: "",
  activeCommunityCreatedAt: "",
};

export const getCommunities = createAsyncThunk(
  "communities/getCommunities",
  async (thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const url = "http://localhost:5000/api/communities/retrieve";
      const res = await axios.get(url, {
        headers: {
          Authorisation: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const addCommunity = createAsyncThunk(
  "communities/addCommunity",
  async (community) => {
    try {
      const token = localStorage.getItem("token");
      const url = "http://localhost:5000/api/communities/create";
      const res = await axios.post(url, community, {
        headers: {
          Authorisation: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const CommunitiesSlice = createSlice({
  name: "Communities",
  initialState,
  reducers: {
    setActiveCommunity: (state, action) => {
      state.activeCommunity = action.payload.id;
      state.activeCommunityName = action.payload.name;
      state.activeCommunityDescription = action.payload.description;
      state.activeCommunityCreatedAt = action.payload.createdAt;
    },
    setCommunities: (state, action) => {
      state.communities = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCommunities.fulfilled, (state, action) => {
        state.communities = action.payload;
      })
      .addCase(addCommunity.fulfilled, (state, action) => {
        state.communities.push(action.payload);
      });
  },
});

export const { setActiveCommunity, setCommunities } = CommunitiesSlice.actions;

export default CommunitiesSlice.reducer;
