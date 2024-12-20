import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  IconButton,
  Icon,
  TextField,
  Box,
  Input,
  InputAdornment,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Notifications, Visibility } from "@material-ui/icons";
import { Breadcrumb, ConfirmationDialog, ShowDialog } from "egret";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployees,
  getEmployeeById,
  resetCurrentEmployee,
  deleteEmployee
} from "../../redux/actions/EmployeeActions";
import { ACTION_EMPLOYEE, STATUS_EMPLOYEE } from "app/const/EmployeeConst";
import { employeeColumn } from "../../component/Column";
import CustomTable from "../../component/CustomTable";
import EmployeeDialog from "./EmployeeDialog";
import ProfileEmployeeDialog from "../ProfileEmployee/ProfileEmployeeDialog";
import { getExperience } from "app/redux/actions/ExperienceActions";

const Employee = ({ t }) => {
  const [keyword, setKeyword] = useState("");
  const [pagination, setPagination] = useState({ pageSize: 5, pageIndex: 0 });
  const [shouldOpenConfirmationDialog, setShouldOpenConfirmationDialog] =
    useState(false);
  const [id, setId] = useState(null);
  const { listEmployees, totalElements, currentEmployee } = useSelector(
    (state) => state.employees
  );
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
      listStatus: STATUS_EMPLOYEE.ADD,
    };
    dispatch(getEmployees(data));
  };
  useEffect(() => {
    searchEmployee(keyword);
  }, [pagination.pageIndex, pagination.pageSize, keyword]);

  const handleOpenDialogEmployee = (data) => {
    setDialogState({
      ...dialogState,
      showDialogEmployee: true,
    });
    setEmployeeId(data?.id);
  };

  const handleDialogDelete = (certificate) => {
    setShouldOpenConfirmationDialog(true);
    setId(certificate?.id);
  };

  const handleDialogDeleteClose = () => {
    setShouldOpenConfirmationDialog(false);
  };

  const handleConfirmDelete = () => {
    console.log("id", id);
    dispatch(deleteEmployee(id));
    handleDialogDeleteClose();
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

      {ACTION_EMPLOYEE.DELETE.includes(rowData.submitProfileStatus) && (
        <IconButton fontSize="small" color="error" onClick={() => handleDialogDelete(rowData)}>
          <Icon color="error">delete</Icon>
        </IconButton>
      )}

      {ACTION_EMPLOYEE.VIEW.includes(rowData.submitProfileStatus) && (
        <IconButton fontSize="small" color="secondary" onClick={() => handleViewEmployee(rowData)}>
          <Icon>
            <Visibility />
          </Icon>
        </IconButton>
      )}

      {ACTION_EMPLOYEE.NOTIFY.includes(rowData.submitProfileStatus) && (
        <IconButton fontSize="small" color="secondary">
          <Notifications />
        </IconButton>
      )}
    </div>
  ));

  const handleViewEmployee = (employee) => {
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




  console.log("listEmployees:", listEmployees);
  console.log("totalElements:", totalElements);

  return (
    <div className="m-20">
      <div className="mb-sm-30">
        <Breadcrumb routeSegments={[{ name: t("Thêm nhân viên") }]} />
      </div>
      <Grid container spacing={2} justify="space-between">
        <Grid item lg={5} md={5} sm={5} xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleOpenDialogEmployee()}
          >
            Thêm Mới
          </Button>
        </Grid>
        <Grid item lg={3} md={4} sm={4} xs={12}>
          <div className="flex flex-space-between flex-middle mb-20">
            <Input
              className="w-100 mr-14"
              placeholder={t("general.enterSearch")}
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

          {dialogState.showDialogEmployee && (
            <EmployeeDialog
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
            t={t}
          />

      </Grid>
    </div>
  );
};
export default Employee;