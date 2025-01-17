import {
  IconButton,
  Input,
  InputAdornment,
  Icon,
  Grid,
} from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployeeById,
  getEmployees,
  resetCurrentEmployee,
} from "app/redux/actions/EmployeeActions";
import { ACTION_EMPLOYEE, STATUS_EMPLOYEE } from "app/const/EmployeeConst";
import { employeeColumn } from "../../../component/Column";
import CustomTable from "../../../component/CustomTable";
import ProfileEmployeeDialog from "../../ProfileEmployee/ProfileEmployeeDialog";
import ResignationLetter from "../LeaderDialog/ResignationDialog";

const WaitingRegisterTab = ({ t }) => {
  const [keyword, setKeyword] = useState("");
  // const [currentEmployee, setCurrentEmployee] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { listEmployees, totalElements, success, currentEmployee, waiting } =
    useSelector((state) => state.employees);
  const dispatch = useDispatch();
  const searchEmployee = () => {
    const data = {
      keyword,
      pageIndex: pageIndex + 1,
      pageSize,
      listStatus: STATUS_EMPLOYEE.PENDING,
    };
    dispatch(getEmployees(data));
  };
  useEffect(() => {
    searchEmployee();
  }, [pageIndex, pageSize, success]);

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    searchEmployee();
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchEmployee();
    }
  };

  const handleChangeRowsPerPage = (e) => {
    setPageSize(e?.target?.value);
    setPageIndex(0);
  };

  const handleChangePage = (e, newPage) => {
    setPageIndex(newPage);
  };

  const handleDialogOpen = async (employee) => {

    setShowDialog(true);
    employee && dispatch(getEmployeeById(employee?.id));
  };

  const handleDialogClose = () => {
    dispatch(resetCurrentEmployee());
    setShowDialog(false);
  };

  const handleViewEmployee = (employee) => {

    const res= dispatch(getEmployeeById(employee?.id));
    if(res){

      setShowProfile(true);
    }
  };

  const handleViewEmployeeClose = () => {
    dispatch(resetCurrentEmployee());
    setShowProfile(false);
  };

  const columns = employeeColumn((rowData) => (
    <div>
      {ACTION_EMPLOYEE.PENDING_END.includes(rowData.submitProfileStatus) && (
        <IconButton
          fontSize="small"
          color="secondary"
          onClick={() => handleViewEmployee(rowData)}
        >
          <Visibility />
        </IconButton>
      )}
      <IconButton
        fontSize="small"
        color="primary"
        onClick={() =>
          ACTION_EMPLOYEE.PENDING_END.includes(rowData.submitProfileStatus)
            ? handleDialogOpen(rowData)
            : handleViewEmployee(rowData)
        }
      >
        <Icon>
          <DescriptionIcon />
        </Icon>
      </IconButton>
    </div>
  ));
  return (
    <div className="m-20">
      <Grid Grid container spacing={2} justify="space-between">
        <Grid item lg={5} md={5} sm={5} xs={12} />
        <Grid item lg={3} md={4} sm={4} xs={12}>
          <div className="flex flex-space-between flex-middle mb-20">
            <Input
              className="w-100 mr-14"
              placeholder={"Tìm kiếm"}
              type={"text"}
              value={keyword}
              onChange={handleChangeKeyword}
              onKeyDown={handleKeyDown}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleSearch()}
                  >
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
            pageSize={pageSize}
            pageIndex={pageIndex}
            t={t}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            count={totalElements}
            paging={true}
          />

          {showDialog && currentEmployee && (
            <ResignationLetter
              open={showDialog}
              handleClose={handleDialogClose}
              employee={currentEmployee}
              isManage={true}
              searchEmployee={searchEmployee}
            />
          )}

          {showProfile && (
            <ProfileEmployeeDialog
              open={showProfile}
              handleClose={handleViewEmployeeClose}
              t={t}
              handleDialogClose={handleDialogClose}
              employee={currentEmployee}
              isManage={true}
              searchEmployee={searchEmployee}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default WaitingRegisterTab;
