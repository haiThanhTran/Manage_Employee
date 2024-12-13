export const GET_EMPLOYEES = "GET_EMPLOYEES";
export const GET_EMPLOYEES_SUCCESS = "GET_EMPLOYEES_SUCCESS";
export const GET_EMPLOYEES_FAIL = "GET_EMPLOYEES_FAIL";

export const CREATE_EMPLOYEE = "CREATE_EMPLOYEE";
export const CREATE_EMPLOYEE_SUCCESS = "CREATE_EMPLOYEE_SUCCESS";
export const CREATE_EMPLOYEE_FAIL = "CREATE_EMPLOYEE_FAIL";

export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
export const UPDATE_EMPLOYEE_SUCCESS = "UPDATE_EMPLOYEE_SUCCESS";
export const UPDATE_EMPLOYEE_FAIL = "UPDATE_EMPLOYEE_FAIL";

export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const DELETE_EMPLOYEE_SUCCESS = "DELETE_EMPLOYEE_SUCCESS";
export const DELETE_EMPLOYEE_FAIL = "DELETE_EMPLOYEE_FAIL";

export const GET_EMPLOYEE_BY_ID = "GET_EMPLOYEE_BY_ID";
export const GET_EMPLOYEE_BY_ID_SUCCESS = "GET_EMPLOYEE_BY_ID_SUCCESS";
export const GET_EMPLOYEE_BY_ID_FAIL = "GET_EMPLOYEE_BY_ID_FAIL";

export const UPLOAD_EMPLOYEE_IMAGE = "UPLOAD_EMPLOYEE_IMAGE";
export const UPLOAD_EMPLOYEE_IMAGE_SUCCESS = "UPLOAD_EMPLOYEE_IMAGE_SUCCESS";
export const UPLOAD_EMPLOYEE_IMAGE_FAIL = "UPLOAD_EMPLOYEE_IMAGE_FAIL";

export const RESET_CURRENT_EMPLOYEE = 'RESET_CURRENT_EMPLOYEE';

export const getEmployees = (action) => ({
  type: GET_EMPLOYEES,
  payload: action
});

export const getEmployeesSuccess = (employees) => ({
  type: GET_EMPLOYEES_SUCCESS,
  payload: employees,
});

export const getEmployeesFail = (error) => ({
  type: GET_EMPLOYEES_FAIL,
  payload: error,
});

export const createEmployee = (employee) => ({
  type: CREATE_EMPLOYEE,
  payload: employee,
});

export const createEmployeeSuccess = (employee) => ({
  type: CREATE_EMPLOYEE_SUCCESS,
  payload: employee,
});

export const createEmployeeFail = (error) => ({
  type: CREATE_EMPLOYEE_FAIL,
  payload: error,
});

export const updateEmployee = (id, employeeNew) => ({
  type: UPDATE_EMPLOYEE,
  payload: { id, employeeNew },
});

export const updateEmployeeSuccess = (employee) => ({
  type: UPDATE_EMPLOYEE_SUCCESS,
  payload: employee,
});

export const updateEmployeeFail = (error) => ({
  type: UPDATE_EMPLOYEE_FAIL,
  payload: error,
});

export const deleteEmployee = (employeeId) => ({
  type: DELETE_EMPLOYEE,
  payload: employeeId,
});

export const deleteEmployeeSuccess = (employeeId) => ({
  type: DELETE_EMPLOYEE_SUCCESS,
  payload: employeeId,
});

export const deleteEmployeeFail = (error) => ({
  type: DELETE_EMPLOYEE_FAIL,
  payload: error,
});



export const getEmployeeById = (id) => ({
  type: GET_EMPLOYEE_BY_ID,
  payload: id,
});
export const getEmployeeByIdSuccess = (employee) => ({
  type: GET_EMPLOYEE_BY_ID_SUCCESS,
  payload: employee,
});
export const getEmployeeByIdFail = (error) => ({
  type: GET_EMPLOYEE_BY_ID_FAIL,
  payload: error,
});

export const uploadEmployeeImage = (data) => ({
  type: UPLOAD_EMPLOYEE_IMAGE,
  payload: data,
});
export const uploadEmployeeImageSuccess = (data) => ({
  type: UPLOAD_EMPLOYEE_IMAGE_SUCCESS,
  payload: data,
});
export const uploadEmployeeImageFail = (error) => ({
  type: UPLOAD_EMPLOYEE_IMAGE_FAIL,
  payload: error,
});

export const resetCurrentEmployee = () => ({
  type: RESET_CURRENT_EMPLOYEE,
});