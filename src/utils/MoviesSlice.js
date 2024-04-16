import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addMovies:(state, action)=>{
       state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
       state.trailerVideo=action.payload
    }
  }
});

export default MoviesSlice.reducer;
export const { addMovies,addTrailerVideo } = MoviesSlice.actions;
