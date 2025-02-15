import { configureStore } from "@reduxjs/toolkit";
import turnosReducer from "./Redux/TurnosReducer"; // Nombre en minúscula por convención

const store = configureStore({
  reducer: {
    turnos: turnosReducer,
  },
});

export default store;
