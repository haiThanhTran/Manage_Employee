import {
  Grid,
  Icon,
  Input,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import { employeeColumn } from "../../component/Column";
import CustomTable from "app/component/CustomTable";
import { ACTION_EMPLOYEE, STATUS_EMPLOYEE } from "app/const/EmployeeConst";
import {
  getEmployees,
  getEmployeeById,
  resetCurrentEmployee,
} from "app/redux/actions/EmployeeActions";
import { Breadcrumb } from "egret";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import ResignationLetter from "../LeaderWaiting/LeaderDialog/ResignationDialog";
import ProfileEmployeeDialog from "../ProfileEmployee/ProfileEmployeeDialog";

const LeaderApproved = ({ t }) => {
  const [keyword, setKeyword] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { listEmployees, totalElements, currentEmployee } = useSelector(
    (state) => state.employees
  );
  const dispatch = useDispatch();

  const searchEmployee = () => {
    const data = {
      keyword,
      pageSize,
      pageIndex: pageIndex + 1,
      listStatus: STATUS_EMPLOYEE.APPROVED,
    };
    dispatch(getEmployees(data));
  };

  useEffect(() => {
    searchEmployee();
  }, [pageSize, pageIndex]);

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

  const handleDialogOpen = (employee) => {
    dispatch(getEmployeeById(employee?.id || {}));
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    dispatch(resetCurrentEmployee());
    setShowDialog(false);
  };

  const handleViewEmployee = (employee) => {
    dispatch(getEmployeeById(employee?.id));
    setShowProfile(true);
  };

  const handleViewEmployeeClose = () => {
    dispatch(resetCurrentEmployee());
    setShowProfile(false);
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
      {ACTION_EMPLOYEE.PENDING_END.includes(rowData.submitProfileStatus) && (
        <IconButton
          fontSize="small"
          color="primary"
          onClick={() => handleDialogOpen(rowData)}
        >
          <Icon>edit</Icon>
        </IconButton>
      )}
    </div>
  ));
  return (
    <div className="m-20">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[{ name: "Lãnh đạo" }, { name: "Lãnh đạo đã duyệt" }]}
        />
      </div>
      <Grid container spacing={2} justify="space-between">
        <Grid item lg={5} md={5} sm={5} xs={12} />
        <Grid item lg={3} md={4} sm={4} xs={12}>
          <div className="flex flex-space-between flex-middle mb-20">
            <Input
              className="w-100 md-14"
              placeholder={t("general.enterSearch")}
              type="text"
              value={keyword}
              onChange={handleChangeKeyword}
              onKeyDown={handleKeyDown}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch}>
                    <SearchIcon />
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

          {showDialog && (
            <ResignationLetter
              open={showDialog}
              handleClose={handleDialogClose}
              t={t}
              employee={currentEmployee}
              isManage={true}
            />
          )}

          {showProfile && (
            <ProfileEmployeeDialog
              open={showProfile}
              handleClose={handleViewEmployeeClose}
              t={t}
              handleDialogLetterClose={handleDialogClose}
              employee={currentEmployee}
              isManage={true}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default LeaderApproved;
