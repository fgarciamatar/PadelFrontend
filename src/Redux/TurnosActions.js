import {
  fetchTurnos,
  fetchTurnosFailure,
  fetchTurnosSuccess,
} from "../Redux/TurnosReducer";
import turnos from "../utils/turnos";

export const fetchTurnosAction = () => (dispatch) => {
  dispatch(fetchTurnos());
  try {
    dispatch(fetchTurnosSuccess(turnos)); // No uses response.data si `turnos` ya es un array
  } catch (error) {
    dispatch(fetchTurnosFailure(error.message));
  }
};
