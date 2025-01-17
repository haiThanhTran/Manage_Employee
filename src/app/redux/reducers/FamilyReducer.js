import {
  CREATE_FAMILY,
  CREATE_FAMILY_FAIL,
  CREATE_FAMILY_SUCCESS,
  DELETE_FAMILY,
  DELETE_FAMILY_FAIL,
  DELETE_FAMILY_SUCCESS,
  GET_FAMILY,
  GET_FAMILY_FAIL,
  GET_FAMILY_SUCCESS,
  RESET_CURRENT_FAMILY,
  UPDATE_FAMILY,
  UPDATE_FAMILY_FAIL,
  UPDATE_FAMILY_SUCCESS,
} from "../actions/FamilyAction";

const initialState = {
  familyList: [],
  currentFamily: null,
  loading: false,
  error: null,
  success: false,
};

const familyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAMILY:
    case CREATE_FAMILY:
    case UPDATE_FAMILY:
    case DELETE_FAMILY:
      return { ...state, loading: true, error: null };

    case GET_FAMILY_SUCCESS:
      return { ...state, familyList: action.payload, loading: false };

    case CREATE_FAMILY_SUCCESS:
      return {
        ...state,
        familyList: [...state.familyList, action.payload],
        loading: false,
        success: true,

      };

    case UPDATE_FAMILY_SUCCESS:
      return {
        ...state,
        familyList: state.familyList.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        loading: false,
        success: true,
      };

    case DELETE_FAMILY_SUCCESS:
      return {
        ...state,
        familyList: state.familyList.filter(
          (item) => item.id !== action.payload
        ),
        loading: false,
      };

    case GET_FAMILY_FAIL:
    case CREATE_FAMILY_FAIL:
    case UPDATE_FAMILY_FAIL:
    case DELETE_FAMILY_FAIL:
      return { ...state, loading: false, error: action.payload };

    case RESET_CURRENT_FAMILY:
      return { ...state, currentFamily: null };

    default:
      return state;
  }
};

export default familyReducer;
