import {
  Button,
  IconButton,
  Input,
  InputAdornment,
  TextField,
  Icon,
  Grid,
} from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployeeById,
  resetCurrentEmployee,
} from "app/redux/actions/EmployeeActions";
import { salaryColumn } from "../../../component/Column";
import CustomTable from "../../../component/CustomTable";
import { getSalaryByLeader } from "app/redux/actions/SalaryAction";
import { searchDataByKeyword } from "../../../const/utils";
import ProfileEmployeeDialog from "../../ProfileEmployee/ProfileEmployeeDialog";
import SalaryInfoDialog from "../LeaderDialog/SalaryInfoDialog";

const WaitingSalaryTab = ({ t }) => {
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(0);
  const [showDialogSalary, setShowDialogSalary] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [salary, setSalary] = useState({});
  const [salaryList, setSalaryList] = useState([]);
  const { salaryByLeader, success } = useSelector((state) => state.salary);
  const { currentEmployee } = useSelector((state) => state.employees);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSalaryByLeader());
  }, [pageIndex, pageSize, success]);
  useEffect(() => {
    salaryByLeader.length > 0 && setSalaryList(salaryByLeader);
  }, [salaryByLeader]);
  useEffect(() => {
    let newListSalary = [...salaryByLeader];
    newListSalary = newListSalary.slice(
      pageIndex * pageSize,
      pageIndex * pageSize + pageSize
    );
    setSalaryList(newListSalary);
  }, [pageSize, pageIndex, salaryByLeader]);

  const handleChangeRowsPerPage = (e) => {
    setPageSize(e?.target?.value);
    setPageIndex(0);
  };

  const handleChangePage = (e, newPage) => {
    setPageIndex(newPage);
  };

  const handleDialogSalary = (salary) => {
    setShowDialogSalary(true);
    salary && dispatch(getEmployeeById(salary?.employeeId));
    setSalary(salary);
  };
  const handleDialogSalaryClose = () => {
    setShowDialogSalary(false);
  };

  const handleViewEmployee = (salary) => {

    setShowProfile(true);
    dispatch(getEmployeeById(salary?.employeeId));

  };

  const handleViewEmployeeClose = () => {
    dispatch(resetCurrentEmployee());

    setShowProfile(false);
  };

  const handleSearch = () => {
    let newListSalary = [...salaryByLeader];
    newListSalary = searchDataByKeyword(newListSalary, keyword);
    setSalaryList(newListSalary);
  };

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const columns = salaryColumn((rowData) => (
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

      <IconButton
        fontSize="small"
        color="primary"
        onClick={() => handleDialogSalary(rowData)}
      >
        <Icon>edit</Icon>
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
            data={salaryList}
            columns={columns}
            pageSize={pageSize}
            pageIndex={pageIndex}
            t={t}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            count={salaryByLeader.length}
            paging={true}
          />
          {showProfile && (
            <ProfileEmployeeDialog
              open={showProfile}
              handleClose={handleViewEmployeeClose}
              t={t}
              employee={currentEmployee}
              isManage={true}
            />
          )}

          {showDialogSalary && (
            <SalaryInfoDialog
              open={showDialogSalary}
              handleClose={handleDialogSalaryClose}
              t={t}
              employee={currentEmployee}
              isManage={true}
              salary={salary}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default WaitingSalaryTab;
