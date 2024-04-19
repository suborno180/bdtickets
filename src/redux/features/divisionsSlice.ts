// src/features/divisionsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Division {
  _id: string;
  division: string;
  divisionbn: string;
  coordinates: string;
}

interface APIResponse {
  status: {
    code: number;
    message: string;
    date: string;
  };
  data: Division[];
}

interface DivisionsState {
  divisions: Division[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: DivisionsState = {
  divisions: [],
  loading: 'idle',
  error: null,
};

export const fetchDivisions = createAsyncThunk('divisions/fetchDivisions', async () => {
  const response = await axios.get<APIResponse>('https://bdapis.com/api/v1.1/divisions');
  return response.data.data; // Return only the data array from the response
});

export const divisionsSlice = createSlice({
  name: 'divisions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDivisions.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchDivisions.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.divisions = action.payload;
      })
      .addCase(fetchDivisions.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message ?? 'An error occurred.';
      });
  },
});

export default divisionsSlice.reducer;