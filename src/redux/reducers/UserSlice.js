import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userName: "",
  emailAddress: "",
  profilePhoto: "",
};

export const getUserInfo = createAsyncThunk(
  "users/getUserInfo",
  async (thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const url = "http://localhost:5000/api/auth/getUserInfo";
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

export const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.userName = action.payload.userName;
      state.emailAddress = action.payload.emailAddress;
      state.profilePhoto = action.payload.profilePhoto;
    });
  },
});

export default UserSlice.reducer;
