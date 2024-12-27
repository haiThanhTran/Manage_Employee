import {
  IconButton,
  Input,
  InputAdornment,
  Icon,
  Grid,
} from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import { Breadcrumb } from "egret";
import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import SaveIcon from "@material-ui/icons/Save";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployeeById,
  getEmployees,
} from "../../redux/actions/EmployeeActions";
import { ACTION_EMPLOYEE, STATUS_EMPLOYEE } from "app/const/EmployeeConst";
import { employeeColumn } from "app/component/Column";
import CustomTable from "app/component/CustomTable";
import EndEmployeeDialog from "./EndEmployeeDialog";
import ProfileEmployeeDialog from "../ProfileEmployee/ProfileEmployeeDialog";
import ManageEmployeeDialog from "../ManageEmployee/ManageEmployeeDialog";

const EndEmployee = ({ t }) => {
  const [keyword, setKeyword] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(0);
  const [showProfile, setShowProfile] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const { listEmployees, totalElements, currentEmployee } = useSelector(
    (state) => state.employees
  );

  const dispatch = useDispatch();

  const searchEmployee = () => {
    const data = {
      keyword,
      pageIndex: pageIndex + 1,
      pageSize,
      listStatus: STATUS_EMPLOYEE.END,
    };
    dispatch(getEmployees(data));
  };
  useEffect(() => {
    searchEmployee();
  }, [pageIndex, pageSize]);
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

  const handleViewEmployee = (employee) => {
    console.log("employee", employee);
    dispatch(getEmployeeById(employee?.id));
    setShowProfile(true);
  };

  const handleViewEmployeeClose = () => {
    setShowProfile(false);
  };

  const handleDialogOpen = (employee) => {
    setShowDialog(true);
    dispatch(getEmployeeById(employee));
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  const columns = employeeColumn((rowData) => (
    <div>
      <IconButton
        fontSize="small"
        color="secondary"
        onClick={() => handleViewEmployee(rowData)}
      >
        <Icon>
          <Visibility />
        </Icon>
      </IconButton>
      {ACTION_EMPLOYEE.END.includes(rowData.submitProfileStatus) && (
        <IconButton
          fontSize="small"
          color="primary"
          onClick={() => handleDialogOpen(rowData)}
        >
          <Icon>
            <SaveIcon />
          </Icon>
        </IconButton>
      )}
    </div>
  ));
  return (
    <div className="m-20">
      <div className="mb-sm-30">
        <Breadcrumb routeSegments={[{ name: t("Kết thúc nhân viên") }]} />
      </div>
      <Grid container spacing={2} justify="space-between">
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

          <ManageEmployeeDialog 
            employee={currentEmployee}
            open={showProfile}
            isManage={false}
            isEnd={true}
            handleClose={handleViewEmployeeClose}
            t={t}
          />

          {showDialog && (
            <EndEmployeeDialog
              t={t}
              employee={currentEmployee}
              open={showDialog}
              handleClose={handleDialogClose}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default EndEmployee;
