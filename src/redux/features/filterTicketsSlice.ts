import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterTicketsType {
  goingFrom: string;
  goingTo: string;
  journeyDate: string;
}

const initialState: FilterTicketsType = {
  goingFrom: "",
  goingTo: "",
  journeyDate: "",
};

const filterTicketsSlice = createSlice({
  name: "filterTickets",
  initialState,
  reducers: {
    setGoingFrom: (state, action: PayloadAction<string>) => {
      state.goingFrom = action.payload;
    },
    setGoingTo: (state, action: PayloadAction<string>) => {
      state.goingTo = action.payload;
    },
    setJourneyDate: (state, action: PayloadAction<string>) => {
      state.journeyDate = action.payload;
    },
  },
});

export const { setGoingFrom, setGoingTo, setJourneyDate } = filterTicketsSlice.actions;

export default filterTicketsSlice.reducer;