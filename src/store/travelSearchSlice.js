import { createSlice } from '@reduxjs/toolkit';

const travelSearchSlice = createSlice({
  name: 'travelSearch',
  initialState: {
    searchData: null,
    searchedDestinations: []
  },
  reducers: {
    setSearchData: (state, action) => {
      state.searchData = action.payload;
    },
    addSearchedDestination: (state, action) => {
      // Prevent duplicates
      const exists = state.searchedDestinations.some(
        dest => dest.name === action.payload.name
      );
      if (!exists) {
        state.searchedDestinations.push(action.payload);
      }
    }
  }
});

export const { setSearchData, addSearchedDestination } = travelSearchSlice.actions;
export default travelSearchSlice.reducer;