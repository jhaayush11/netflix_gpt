import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptPage:false,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGptPage = !state.showGptPage;
    }
  }
})

export default gptSlice.reducer;
export const { toggleGPTSearchView } = gptSlice.actions;