import React, { useEffect, useState } from "react";
import {
  IconButton,
  Input,
  InputAdornment,
  Icon,
  Grid,
} from "@material-ui/core";
import { Notifications, Visibility } from "@material-ui/icons";
import { Breadcrumb, ConfirmationDialog, ShowDialog } from "egret";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployees,
  getEmployeeById,
  resetCurrentEmployee,
  deleteEmployee,
} from "../../redux/actions/EmployeeActions";
import { ACTION_EMPLOYEE, STATUS_EMPLOYEE } from "app/const/EmployeeConst";
import { employeeColumn } from "../../component/Column";
import CustomTable from "../../component/CustomTable";
import ProfileEmployeeDialog from "../ProfileEmployee/ProfileEmployeeDialog";
// import { getLeader } from "app/redux/actions/LeaderActions";
// import ProfileEmployeeDialog from "../ProfileEmployee/ProfileEmployeeDialog";
import ManageEmployeeDialog from "./ManageEmployeeDialog";

function ManageEmployee() {
  const [keyword, setKeyword] = useState("");
  const [pagination, setPagination] = useState({ pageSize: 5, pageIndex: 0 });
  const [shouldOpenConfirmationDialog, setShouldOpenConfirmationDialog] =
    useState(false);
  const [id, setId] = useState(null);
  const { listEmployees, totalElements, currentEmployee } = useSelector(
    (state) => state.employees
  );

  const [showNotify, setShowNotify] = useState(false);

  const [employeeId, setEmployeeId] = useState("");
  const [dialogState, setDialogState] = useState({
    showDialogEmployee: false,
    openConfirmDialog: false,
    showNotifyDialog: false,
    id: null,
  });
  const [showProfile, setShowProfile] = useState({
    showDialogProfile: false,
    openConfirmProfile: false,
    showNotifyProfile: false,
    id: null,
  });
  const dispatch = useDispatch();

  const searchEmployee = (keyword) => {
    const data = {
      keyword,
      pageIndex: pagination.pageIndex + 1,
      pageSize: pagination.pageSize,
      listStatus: STATUS_EMPLOYEE.MANAGE,
    };
    dispatch(getEmployees(data));
  };
  useEffect(() => {
    searchEmployee(keyword);
  }, [pagination.pageIndex, pagination.pageSize, keyword]);

  const handleDialogDelete = (certificate) => {
    setShouldOpenConfirmationDialog(true);
    setId(certificate?.id);
  };

  const handleDialogDeleteClose = () => {
    setShouldOpenConfirmationDialog(false);
  };

  const handleConfirmDelete = () => {
    dispatch(resetCurrentEmployee());
    console.log("id", id);
    dispatch(deleteEmployee(id));
    handleDialogDeleteClose();
  };

  const handleOpenDialogEmployee = (data) => {
    setEmployeeId(data?.id);
    setDialogState({
      ...dialogState,
      showDialogEmployee: true,
    });
  };
  const handleChangeRowsPerPage = (e) => {
    setPagination({
      ...pagination,
      pageSize: parseInt(e.target.value, 10),
      pageIndex: 0,
    });
  };

  const handleChangePage = (e, newPage) => {
    setPagination({
      ...pagination,
      pageIndex: newPage,
    });
  };

  const handleNotifyDialog = (employee) => {
    setShowNotify(true);
    console.log("employee", employee);
    employee && dispatch(getEmployeeById(employee.id));
  };

  const handleCloseNotify = () => {
    dispatch(resetCurrentEmployee());
    setShowNotify(false);
    getEmployeeById({});
  };

  const columns = employeeColumn((rowData, t) => (
    <div>
      {ACTION_EMPLOYEE.EDIT.includes(rowData.submitProfileStatus) && (
        <IconButton
          fontSize="small"
          color="primary"
          onClick={() => handleOpenDialogEmployee(rowData)}
        >
          <Icon>edit</Icon>
        </IconButton>
      )}

      {ACTION_EMPLOYEE.NOTIFY.includes(rowData.submitProfileStatus) && (
        <IconButton
          fontSize="small"
          color="error"
          onClick={() => handleNotifyDialog(rowData)}
        >
          <Notifications />
        </IconButton>
      )}
      {ACTION_EMPLOYEE.DELETE.includes(rowData.submitProfileStatus) && (
        <IconButton
          fontSize="small"
          color="error"
          onClick={() => handleDialogDelete(rowData)}
        >
          <Icon color="error">delete</Icon>
        </IconButton>
      )}
      {ACTION_EMPLOYEE.VIEW.includes(rowData.submitProfileStatus) && (
        <IconButton
          fontSize="small"
          color="secondary"
          onClick={() => handleViewEmployee(rowData)}
        >
          <Icon>
            <Visibility />
          </Icon>
        </IconButton>
      )}
    </div>
  ));

  const handleViewEmployee = (employee) => {
    console.log("employee", employee);
    if (employee?.id) {
      setEmployeeId(employee.id); // Chỉ set nếu id tồn tại
      setShowProfile({
        ...showProfile,
        showDialogProfile: true,
      });
    } else {
      console.error("employee id is undefined");
    }
  };


  return (
    <div className="m-20">
      <div className="mb-sm-30">
        <Breadcrumb routeSegments={[{ name: "Quản lý nhân viên" }]} />
      </div>
      <Grid container spacing={2} justifyContent="flex-end">
        <Grid item lg={3} md={4} sm={4} xs={12}>
          <div className="flex flex-space-between flex-middle mb-20">
            <Input
            variant="outlined"
              className="w-100 mr-14"
              placeholder={"Tìm kiếm"}
              type={"text"}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility">
                    {<SearchIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <CustomTable
            data={listEmployees}
            columns={columns}
            pageSize={pagination.pageSize}
            pageIndex={pagination.pageIndex}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            count={totalElements}
            paging={true}
          />
          {showNotify && (
            <ShowDialog
              onConfirmDialogClose={handleCloseNotify}
              open={showNotify}
              text={
                currentEmployee?.data?.submitProfileStatus === "9"
                  ? currentEmployee?.data?.reasonForRefuseEndProfile ||
                    "Không có"
                  : currentEmployee?.data?.additionalRequestTermination ||
                    "Không có"
              }
              title={
                currentEmployee?.data?.submitProfileStatus === "9"
                  ? "Nội dung từ chối"
                  : "Nội dung yêu cầu bổ sung"
              }
              cancel={"Đóng"}
            />
          )}

          {dialogState.showDialogEmployee && (
            <ManageEmployeeDialog
            open={dialogState.showDialogEmployee}
              handleClose={() => {
                setDialogState((prevState) => ({
                  ...prevState,
                  showDialogEmployee: false,
                }));
                dispatch(resetCurrentEmployee()); // Thêm dispatch ở đây
              }}
              employeeId={employeeId}
            />
          )}
        </Grid>
        
        <ConfirmationDialog
          open={shouldOpenConfirmationDialog}
          onConfirmDialogClose={handleDialogDeleteClose}
          onYesClick={() => handleConfirmDelete()}
          title={"Xác nhận xóa"}
          text={"Bạn có chắc chắn muốn xóa bản ghi này?"}
          Yes={"Xóa"}
          No={"Hủy"}
        />
        <ProfileEmployeeDialog
          open={showProfile.showDialogProfile}
          handleClose={() => {
            setShowProfile((prevState) => ({
              ...prevState,
              showDialogProfile: false,
            }));
            dispatch(resetCurrentEmployee()); // Thêm dispatch ở đây
          }}
          employeeId={employeeId}
        />
      </Grid>
    </div>
  );
}

export default ManageEmployee;
