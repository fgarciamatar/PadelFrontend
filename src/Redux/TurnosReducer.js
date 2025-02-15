import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  turnos: [],
  loading: false,
  error: null,
};

const turnosSlice = createSlice({
  name: "turnos",
  initialState,
  reducers: {
    fetchTurnos(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTurnosSuccess(state, action) {
      state.loading = false;
      state.turnos = action.payload;
    },
    fetchTurnosFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchTurnos, fetchTurnosSuccess, fetchTurnosFailure } = turnosSlice.actions;
export default turnosSlice.reducer;
