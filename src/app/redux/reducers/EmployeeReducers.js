import {
  GET_EMPLOYEES,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAIL,
  CREATE_EMPLOYEE,
  CREATE_EMPLOYEE_SUCCESS,
  CREATE_EMPLOYEE_FAIL,
  UPDATE_EMPLOYEE,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_FAIL,
  DELETE_EMPLOYEE,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_FAIL,
  GET_EMPLOYEE_BY_ID,
  GET_EMPLOYEE_BY_ID_SUCCESS,
  GET_EMPLOYEE_BY_ID_FAIL,
  UPLOAD_EMPLOYEE_IMAGE,
  UPLOAD_EMPLOYEE_IMAGE_SUCCESS,
  UPLOAD_EMPLOYEE_IMAGE_FAIL,
  RESET_CURRENT_EMPLOYEE,
} from "../actions/EmployeeActions";

const initialState = {
  listEmployees: [], // Danh sách nhân viên
  loading: false, // Trạng thái tải
  error: null, // Lỗi
  currentEmployee: null, // Nhân viên hiện tại
  totalElements: 0, // Tổng số nhân viên
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    // Các action yêu cầu dữ liệu (bắt đầu tải)
    case GET_EMPLOYEES:
    case CREATE_EMPLOYEE:
    case UPDATE_EMPLOYEE:
    case DELETE_EMPLOYEE:
    case GET_EMPLOYEE_BY_ID:
    case UPLOAD_EMPLOYEE_IMAGE:
      return {
        ...state,
        loading: true,
        error: null,
      };

    // Xử lý lỗi từ các action
    case GET_EMPLOYEES_FAIL:
    case CREATE_EMPLOYEE_FAIL:
    case UPDATE_EMPLOYEE_FAIL:
    case DELETE_EMPLOYEE_FAIL:
    case GET_EMPLOYEE_BY_ID_FAIL:
    case UPLOAD_EMPLOYEE_IMAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload, // Truyền lỗi vào state
      };

    // Lấy danh sách nhân viên thành công
    case GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        listEmployees: action.payload.data,
        totalElements: action.payload.totalElements, // Cập nhật tổng số nhân viên
        loading: false,
        error: null,
      };

    // Tạo nhân viên thành công
    case CREATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        listEmployees: [...state.listEmployees, action.payload], // Thêm nhân viên mới vào danh sách
        totalElements: state.totalElements + 1, // Tăng số lượng nhân viên
        loading: false,
        error: null,
      };

    // Cập nhật nhân viên thành công
    case UPDATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        listEmployees: state.listEmployees.map((employee) =>
          employee.id === action.payload.id ? action.payload : employee
        ), // Cập nhật nhân viên trong danh sách
        currentEmployee: action.payload, // Cập nhật thông tin nhân viên hiện tại
        loading: false,
        error: null,
      };

    // Xóa nhân viên thành công
    case DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        listEmployees: state.listEmployees.filter(
          (employee) => employee.id !== action.payload
        ), // Loại bỏ nhân viên khỏi danh sách
        totalElements: state.totalElements - 1, // Giảm tổng số nhân viên
        loading: false,
        error: null,
      };

    // Lấy thông tin nhân viên theo ID thành công
    case GET_EMPLOYEE_BY_ID_SUCCESS:
      return {
        ...state,
        currentEmployee: action.payload, // Cập nhật nhân viên hiện tại
        loading: false,
        error: null,
      };

    // Upload ảnh nhân viên thành công
    case UPLOAD_EMPLOYEE_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };

    // Reset thông tin nhân viên hiện tại sau khi đóng dialog
      case RESET_CURRENT_EMPLOYEE:
      return {
        ...state,
        currentEmployee: null, // Hoặc initialState cho currentEmployee của bạn
      };

    default:
      return state; // Trả về state mặc định nếu không có action phù hợp
  }
};

export default employeeReducer;
