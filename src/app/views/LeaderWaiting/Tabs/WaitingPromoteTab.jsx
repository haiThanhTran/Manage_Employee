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
  setEmployee,
} from "app/redux/actions/EmployeeActions";

import CustomTable from "app/component/CustomTable";
import { getPromoteByLeader } from "app/redux/actions/PromoteActions";
import { searchDataByKeyword } from "../../../const/utils";
import ProfileEmployeeDialog from "../../ProfileEmployee/ProfileEmployeeDialog";
import PromoteInfoDialog from "../LeaderDialog/PromoteInfoDialog";
import { promoteColumn } from "../../../component/Column";

const WaitingPromoteTab = ({ t }) => {
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(0);
  const [showDialogPromote, setShowDialogPromote] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [newEmployee, setNewEmployee] = useState("");
  const [promote, setPromote] = useState({});
  const [promoteList, setPromoteList] = useState([]);
  const { promoteByLeader, success } = useSelector((state) => state.promote);

  const { currentEmployee } = useSelector((state) => state.employees);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPromoteByLeader());
  }, [pageIndex, pageSize, success]);
  useEffect(() => {
    promoteByLeader.length > 0 && setPromoteList(promoteByLeader);
  }, [promoteByLeader]);
  useEffect(() => {
    if (currentEmployee?.data) {
      setNewEmployee(currentEmployee?.data);
    }
  }, [currentEmployee]);

  useEffect(() => {
    let newListPromote = [...promoteByLeader];
    newListPromote = newListPromote.slice(
      pageIndex * pageSize,
      pageIndex * pageSize + pageSize
    );
    setPromoteList(newListPromote);
  }, [pageSize, pageIndex, promoteByLeader]);

  const handleChangeRowsPerPage = (e) => {
    setPageSize(e?.target?.value);
    setPageIndex(0);
  };

  const handleChangePage = (e, newPage) => {
    setPageIndex(newPage);
  };

  const handleDialogPromote = async (promote) => {
    setShowDialogPromote(true);
    setPromote(promote);
    if (promote) {
      await dispatch(getEmployeeById(promote?.employeeId));
    }
  };

  const handleDialogPromoteClose = () => {
    setShowDialogPromote(false);
  };

  const handleViewEmployee = (promote) => {

    setShowProfile(true);
    dispatch(getEmployeeById(promote?.employeeId));
  };

  const handleViewEmployeeClose = () => {
    dispatch(resetCurrentEmployee());

    setShowProfile(false);
  };

  const columns = promoteColumn((rowData) => (
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
        onClick={() => handleDialogPromote(rowData)}
      >
        <Icon>edit</Icon>
      </IconButton>
    </div>
  ));

  const handleSearch = () => {
    let newListPromote = [...promoteByLeader];
    newListPromote = searchDataByKeyword(newListPromote, keyword);

    setPromoteList(newListPromote);
  };
  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
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
            data={promoteList}
            columns={columns}
            pageSize={pageSize}
            pageIndex={pageIndex}
            t={t}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            count={promoteByLeader.length}
            paging={true}
          />
          {showProfile && (
            <ProfileEmployeeDialog
              open={showProfile}
              handleClose={handleViewEmployeeClose}
              t={t}
              currentEmployee={currentEmployee}
            />
          )}

          {showDialogPromote && (
            <PromoteInfoDialog
              open={showDialogPromote}
              handleClose={handleDialogPromoteClose}
              t={t}
              employee={newEmployee}
              isManage={true}
              promote={promote}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default WaitingPromoteTab;
