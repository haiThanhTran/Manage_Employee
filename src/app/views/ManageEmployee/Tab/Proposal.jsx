import { Button, Grid, Icon, IconButton, MenuItem } from "@material-ui/core";
import { proposalColumn } from "app/component/Column";
import CustomTable from "app/component/CustomTable";
import { ACTION_PROCESS, PROPOSAL } from "app/const/EmployeeConst";
import { Notifications, Visibility } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useDispatch, useSelector } from "react-redux";
import {
  addProposalByEmployee,
  deleteProposalByEmployee,
  getProposalByEmployee,
  updateProposalByEmployee,
} from "../../../redux/actions/ProposalActions";
import { convertTimeToDate } from "../../../const/utils";
import { ConfirmationDialog, ShowDialog } from "egret";
import { getLeader } from "../../../redux/actions/LeaderActions";
import ProposalInfoDialog from "../../LeaderWaiting/LeaderDialog/ProposalInfoDialog";
import moment from "moment";

const Proposal = ({ t, currentEmployee, listLeader, isManage, isEnd }) => {
  const employee = currentEmployee?.data;
  const [proposal, setProposal] = useState({
    proposalDate: new Date(),
  });
  console.log(proposal);
  const [shouldOpenConfirmationDialog, setShouldOpenConfirmationDialog] =
    useState(false);
  const [id, setId] = useState(null);
  const { proposalByEmployee} = useSelector(
    (state) => state.proposal
  );
  const [showDialog, setShowDialog] = useState(false);
  const [showNotify, setShowNotify] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    employee?.id && dispatch(getProposalByEmployee(employee?.id));
  }, [employee?.id]);

  useEffect(() => {
    dispatch(getLeader());
  }, []);

  const handleChangInput = (e) => {
    setProposal({ ...proposal, [e.target.name]: e.target.value });
  };

  const handleDialogOpen = (proposal) => {
    setProposal(proposal);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    setProposal({});
  };

  const handleDialogDelete = (proposal) => {
    setShouldOpenConfirmationDialog(true);
    setId(proposal?.id);
  };

  const handleDialogDeleteClose = () => {
    setShouldOpenConfirmationDialog(false);
    setId(null);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteProposalByEmployee(id));
    handleDialogDeleteClose();
  };

  const handleViewProposal = (proposal) => {
    setShowDialog(true);
    proposal && setProposal(proposal);
  };

  const handleCancel = () => {
    setProposal({});
  };

  const handleNotifyDialog = (proposal) => {
    setShowNotify(true);
    setProposal(proposal);
  };
  const handleCloseNotify = () => {
    setShowNotify(false);
    setProposal({});
  };
  const handleSubmit = () => {
    handleViewProposal();
    if (proposal?.id) {
      dispatch(updateProposalByEmployee(proposal));
    } else {
      dispatch(
        addProposalByEmployee({
          id: employee?.id,
          data: [{ oldProposal: proposal?.oldProposal || 0, ...proposal }],
        })
      );
    }
  };
  const data = isManage
    ? proposalByEmployee?.filter((item) =>
        ACTION_PROCESS.MANAGE.includes(item?.proposalStatus)
      )
    : proposalByEmployee;
  const columns = proposalColumn((rowData) => (
    <div>
      {ACTION_PROCESS.EDIT.includes(rowData.proposalStatus) && (
        <IconButton
          fontSize="small"
          color="primary"
          onClick={() => handleDialogOpen(rowData)}
        >
          <Icon>edit</Icon>
        </IconButton>
      )}

      {ACTION_PROCESS.DELETE.includes(rowData.proposalStatus) && (
        <IconButton
          fontSize="small"
          color="error"
          onClick={() => handleDialogDelete(rowData)}
        >
          <Icon color="error">delete</Icon>
        </IconButton>
      )}

      {ACTION_PROCESS.VIEW.includes(rowData.proposalStatus) && (
        <IconButton
          fontSize="small"
          color="secondary"
          onClick={() => handleViewProposal(rowData)}
        >
          <Icon>
            <Visibility />
          </Icon>
        </IconButton>
      )}

      {ACTION_PROCESS.NOTIFY.includes(rowData.proposalStatus) && (
        <IconButton
          fontSize="small"
          color="secondary"
          onClick={() => handleNotifyDialog(rowData)}
        >
          <Notifications />
        </IconButton>
      )}
    </div>
  ));
  return (
    <div>
      {!isManage && (
        <ValidatorForm onSubmit={handleSubmit}>
          <Grid container spacing={2} xs={12}>
            <Grid item xs={2}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                    Ngày đề xuất
                  </span>
                }
                type="date"
                value={
                  proposal?.proposalDate
                    ? moment(proposal?.proposalDate).format("YYYY-MM-DD")
                    : moment().format("YYYY-MM-DD")
                }
                disabled={isEnd ? "disabled" : ""}
                variant="outlined"
                onChange={handleChangInput}
                className="w-100"
                InputLabelProps={{
                  shrink: true,
                }}
                name="proposalDate"
                validators={["required"]}
                errorMessages={["Ngày đề xuất không được để trống"]}
              />
            </Grid>
            <Grid item xs={2}>
              <TextValidator
                label={<span> Loại đề xuất</span>}
                select
                value={proposal?.type || ""}
                disabled={isEnd ? "disabled" : ""}
                variant="outlined"
                onChange={handleChangInput}
                className="w-100"
                name="type"
              >
                {PROPOSAL?.map((item, index) => {
                  return (
                    <MenuItem value={item.id} key={item.id}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </TextValidator>
            </Grid>
            <Grid item xs={2}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                      Nội dung
                  </span>
                }
                value={proposal?.content || ""}
                disabled={isEnd ? "disabled" : ""}
                variant="outlined"
                onChange={handleChangInput}
                className="w-100 "
                name="content"
                validators={["required"]}
                errorMessages={["Nội dung không được để trống"]}
              />
            </Grid>

            <Grid item xs={2}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                      Ghi chú
                  </span>
                }
                value={proposal?.note || ""}
                disabled={isEnd ? "disabled" : ""}
                variant="outlined"
                onChange={handleChangInput}
                className="w-100 "
                name="note"
                validators={["required"]}
                errorMessages={["Ghi chú không được để trống"]}
              />
            </Grid>

            <Grid item xs={2}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                      Mô tả chi tiết
                  </span>
                }
                value={proposal?.detailedDescription || ""}
                disabled={isEnd ? "disabled" : ""}
                variant="outlined"
                onChange={handleChangInput}
                className="w-100 "
                name="detailedDescription"
                validators={["required"]}
                errorMessages={["Mô tả chi tiết không được để trống"]}
              />
            </Grid>
            <Grid
              item
              xs={2}
              className="text-center mt-auto"
            >
              <Button
                variant="contained"
                color="primary"
                className="mr-10"
                type="submit"
                disabled={isEnd ? "disabled" : ""}
              >
                Lưu
              </Button>
              <Button
                variant="contained"
                color="secondary"
                type="button"
                disabled={isEnd ? "disabled" : ""}
                onClick={() => handleCancel()}
              >
                Hủy
              </Button>
            </Grid>
          </Grid>
        </ValidatorForm>
      )}
      <div className="pt-20">
        <CustomTable data={data} t={t} columns={columns} />
      </div>
      {showDialog && (
        <ProposalInfoDialog
          open={showDialog}
          t={t}
          handleClose={handleDialogClose}
          employee={employee}
          proposal={proposal}
        />
      )}

      {showNotify && (
        <ShowDialog
          onConfirmDialogClose={handleCloseNotify}
          open={showNotify}
          text={
            proposal?.proposalStatus === 4
              ? proposal?.additionalRequest || "Không có"
              : proposal?.reasonForRefusal || "Không có"
          }
          title={
            proposal?.proposalStatus === 4
              ? "Nội dung yêu cầu bổ sung"
              : "Lý do từ chối"
          }
        />
      )}

      {shouldOpenConfirmationDialog && (
        <ConfirmationDialog
          title={t("general.confirm")}
          open={shouldOpenConfirmationDialog}
          onConfirmDialogClose={handleDialogDeleteClose}
          onYesClick={handleConfirmDelete}
          text={t("general.deleteConfirm")}
          Yes={t("general.confirm")}
          No={t("general.cancel")}
        />
      )}
    </div>
  );
};

export default Proposal;
