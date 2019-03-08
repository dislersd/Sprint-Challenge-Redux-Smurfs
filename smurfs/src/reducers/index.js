import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        smurfs: action.payload
      };
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
