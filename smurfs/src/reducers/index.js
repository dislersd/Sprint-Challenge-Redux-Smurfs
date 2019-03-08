import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAIL
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  isAdding: false,
  isDeleting: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload,
        error: "",
      };
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
      case ADD_SMURF_START:
      return {
      ...state,
      isAdding: true,
      error: ''
      }
      case ADD_SMURF_SUCCESS:
      return {
      ...state,
      isAdding: false,
      smurfs: action.payload,
      error: ''
      }
      case ADD_SMURF_FAIL:
      return {
      ...state,
      isAdding: false,
      error: action.payload
      }
      case DELETE_SMURF_START:
      return {
      ...state,
      isDeleting: true,
      error: ''
      }
      case DELETE_SMURF_SUCCESS:
      return {
      ...state,
      isDeleting: false,
      smurfs: action.payload,
      error: ''
      }
      case DELETE_SMURF_FAIL:
      return {
      ...state,
      isDeleting: false,
      error: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
