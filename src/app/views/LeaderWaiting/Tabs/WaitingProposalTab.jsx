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
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployeeById,
  resetCurrentEmployee,
} from "app/redux/actions/EmployeeActions";
import { proposalColumn } from "../../../component/Column";
import CustomTable from "../../../component/CustomTable";
import { searchDataByKeyword } from "../../../const/utils";
import { getproposalByLeader } from "app/redux/actions/ProposalActions";
import ProfileEmployeeDialog from "../../ProfileEmployee/ProfileEmployeeDialog";
import ProposalInfoDialog from "../LeaderDialog/ProposalInfoDialog";

const WaitingProposalTab = ({ t }) => {
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(0);
  const [showDialogProposal, setShowDialogSalary] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [proposal, setProposal] = useState({});
  const [proposalList, setProposalList] = useState([]);
  const { proposalByLeader, success } = useSelector((state) => state.proposal);
  const { currentEmployee } = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproposalByLeader());
  }, [pageIndex, pageSize,success]);

  useEffect(() => {
    proposalByLeader.length > 0 && setProposalList(proposalByLeader);
  }, [proposalByLeader]);

  useEffect(() => {
    let newListProposal = [...proposalByLeader];
    newListProposal = newListProposal.slice(
      pageIndex * pageSize,
      pageIndex * pageSize + pageSize
    );
    setProposalList(newListProposal);
  }, [pageSize, pageIndex, proposalByLeader]);

  const handleChangeRowsPerPage = (e) => {
    setPageSize(e?.target?.value);
    setPageIndex(0);
  };

  const handleChangePage = (e, newPage) => {
    setPageIndex(newPage);
  };

  const handleDialogSalary = (proposal) => {
    setShowDialogSalary(true);
    proposal && dispatch(getEmployeeById(proposal?.employeeId));
    setProposal(proposal);
  };
  const handleDialogProposalClose = () => {
    setShowDialogSalary(false);
  };

  const handleViewEmployee = (proposal) => {
    setShowProfile(true);
    dispatch(getEmployeeById(proposal?.employeeId));
  };

  const handleViewEmployeeClose = () => {
    dispatch(resetCurrentEmployee());

    setShowProfile(false);
  };
  const columns = proposalColumn((rowData) => (
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
  const handleSearch = () => {
    let newListProposal = [...proposalByLeader];
    newListProposal = searchDataByKeyword(newListProposal, keyword);
    setProposalList(newListProposal);
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
            data={proposalList}
            columns={columns}
            pageSize={pageSize}
            pageIndex={pageIndex}
            t={t}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            count={proposalByLeader.length}
            paging={true}
          />
          {showProfile && (
            <ProfileEmployeeDialog
              open={showProfile}
              handleClose={handleViewEmployeeClose}
              t={t}
              employee={currentEmployee}
              searchProposal={getproposalByLeader()}
            />
          )}

          {showDialogProposal && (
            <ProposalInfoDialog
              open={showDialogProposal}
              handleClose={handleDialogProposalClose}
              t={t}
              employee={currentEmployee}
              isManage={true}
              proposal={proposal}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default WaitingProposalTab;
