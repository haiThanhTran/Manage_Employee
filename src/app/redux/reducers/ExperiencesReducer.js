import {
  GET_EXPERIENCE_REQUEST,
  GET_EXPERIENCE_SUCCESS,
  GET_EXPERIENCE_FAIL,
  ADD_EXPERIENCE_REQUEST,
  ADD_EXPERIENCE_SUCCESS,
  ADD_EXPERIENCE_FAIL,
  UPDATE_EXPERIENCE_REQUEST,
  UPDATE_EXPERIENCE_SUCCESS,
  UPDATE_EXPERIENCE_FAIL,
  DELETE_EXPERIENCE_REQUEST,
  DELETE_EXPERIENCE_SUCCESS,
  DELETE_EXPERIENCE_FAIL,
} from "../actions/ExperienceActions";

const initialState = {
  listExperience: [],
  experience: {},
  success: false,
  error: null,
};

const experienceReducer = (state = initialState, action, listExperience) => {
  switch (action.type) {
    case GET_EXPERIENCE_REQUEST:
    case ADD_EXPERIENCE_REQUEST:
    case UPDATE_EXPERIENCE_REQUEST:
    case DELETE_EXPERIENCE_REQUEST:
      return { ...state, success: false, error: null };

    case GET_EXPERIENCE_SUCCESS:
      return { ...state, listExperience: action.payload, success: true };

    case ADD_EXPERIENCE_SUCCESS:
      return {
        ...state,
        listExperience: [...state.listExperience, ...action.payload], 
        success: true,
      };

    case UPDATE_EXPERIENCE_SUCCESS:
      return {
        ...state,
        listExperience: state.listExperience.map((exp) =>
          exp.id === action.payload.id ? action.payload : exp
        ),
        success: true,
      };

    case DELETE_EXPERIENCE_SUCCESS:

      return {
        ...state,
        listExperience: state.listExperience.filter(
          (exp) => exp.id !== action.id
        ),
        success: true,
      };

    case GET_EXPERIENCE_FAIL:
    case ADD_EXPERIENCE_FAIL:
    case UPDATE_EXPERIENCE_FAIL:
    case DELETE_EXPERIENCE_FAIL:
      return { ...state, error: action.payload, success: false };

    default:
      return state;
  }
};

export default experienceReducer;
