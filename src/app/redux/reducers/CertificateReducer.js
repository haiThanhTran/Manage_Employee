import {
  ADD_CERTIFICATE_FAIL,
  ADD_CERTIFICATE_REQUEST,
  ADD_CERTIFICATE_SUCCESS,
  DELETE_CERTIFICATE_FAIL,
  DELETE_CERTIFICATE_REQUEST,
  DELETE_CERTIFICATE_SUCCESS,
  GET_CERTIFICATE_FAIL,
  GET_CERTIFICATE_REQUEST,
  GET_CERTIFICATE_SUCCESS,
  UPDATE_CERTIFICATE_FAIL,
  UPDATE_CERTIFICATE_REQUEST,
  UPDATE_CERTIFICATE_SUCCESS,
} from "../actions/CertificateActions";

const initialState = {
  listCertificate: [],
  certificate: {},
  success: false,
  totalElements: 0,
};
const certificateReducer = function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_CERTIFICATE_REQUEST:
    case ADD_CERTIFICATE_REQUEST:
    case DELETE_CERTIFICATE_REQUEST:
      return {
        ...state,
        success: false,
      };

    case ADD_CERTIFICATE_FAIL:
    case UPDATE_CERTIFICATE_FAIL:
    case DELETE_CERTIFICATE_FAIL:
      return {
        ...state,
        success: false,
      };

    case GET_CERTIFICATE_SUCCESS:
      console.log("action.payload in certificate", action.payload);

      return {
        ...state,
        listCertificate: action.payload, // Cập nhật lại danh sách
        success: true,
      };

    case ADD_CERTIFICATE_SUCCESS:
      return {
        ...state,
        listCertificate: [
          ...state.listCertificate,
          action.payload, // Làm sạch dữ liệu trước khi thêm
        ],
        success: true,
      };

      case UPDATE_CERTIFICATE_SUCCESS:
        return {
          ...state,
          listCertificate: state.listCertificate.map((cert) =>
            cert.id === action.payload.id
              ? action.payload // Cập nhật và làm sạch dữ liệu
              : cert
          ),
          success: true,
        };

    case DELETE_CERTIFICATE_SUCCESS:
      console.log("Deleted ID:", action.payload);
      return {
        ...state,
        listCertificate: state.listCertificate.filter(
          (cert) => cert.id !== action.id
        ), // Xóa dữ liệu trong danh sách
        success: true,
      };

    default:
      return state;
  }
};

const cleanCertificateData = (data) => {
  if (Array.isArray(data)) {
    return data.map(({ tableData, ...rest }) => rest);
  } else {
    const { tableData, ...rest } = data;
    return rest;
  }
};

export default certificateReducer;
