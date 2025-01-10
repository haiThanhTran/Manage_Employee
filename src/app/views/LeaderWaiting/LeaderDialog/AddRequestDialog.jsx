import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { Grid } from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useDispatch } from "react-redux";
import { updateEmployee } from "app/redux/actions/EmployeeActions";
import { updateSalaryByEmployee } from "app/redux/actions/SalaryAction";
import { updatePromoteByEmployee } from "app/redux/actions/PromoteActions";
import { updateProposalByEmployee } from "app/redux/actions/ProposalActions";

const DialogActions = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    margin: "10px auto",
    display: "flex",
    justifyContent: "center",
  },
}))(MuiDialogActions);

const AddRequestDialog = ({
  t,
  open,
  handleClose,
  currentEmployee,
  proposal,
  promote,
  handleCloseProfile,
  isRegister,
  isEnd,
  isSalary,
  isPromote,
  isProposal,
  salary,
}) => {
  const employee = currentEmployee?.data;

  const [content, setContent] = useState({
    addRequest: "",
    addRequestTermination: "",
    addRequestSalary: "",
  });

  const dispatch = useDispatch();
  const handleChangInput = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const updateData = {
      ...employee,
      addRequest: content.addRequest,
      submitProfileStatus: 4,
    };
    console.log("updateData", updateData);
    isRegister && dispatch(updateEmployee(employee.id, updateData));

    isEnd &&
      dispatch(
        updateEmployee({
          ...employee,
          addRequestTermination: content.addRequestTermination,
          submitProfileStatus: 8,
        })
      );

    isSalary &&
      dispatch(
        updateSalaryByEmployee({
          ...salary,
          addRequest: content.addRequestSalary,
          salaryIncreaseStatus: 4,
        })
      );
    isProposal &&
      dispatch(
        updateProposalByEmployee({
          ...proposal,
          addRequest: content.addRequestProposal,
          proposalStatus: 4,
        })
      );
    isPromote &&
      dispatch(
        updatePromoteByEmployee({
          ...promote,
          addRequest: content.addRequestProcess,
          processStatus: 4,
        })
      );
    handleClose();
    handleCloseProfile();
  };

  return (
    <div>
      <Dialog
        maxWidth={"sm"}
        fullWidth={true}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Yêu cầu bổ sung
        </DialogTitle>
        <ValidatorForm onSubmit={handleSubmit}>
          <DialogContent dividers>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  label={
                    <span>
                      <span className="text-error">*</span>
                      Nội dung yêu cầu bổ sung
                    </span>
                  }
                  value={
                    isRegister
                      ? content.addRequest
                      : isEnd
                      ? content.addRequestTermination
                      : isSalary
                      ? content.addRequestSalary
                      : isProposal
                      ? content.addRequestProposal
                      : isPromote
                      ? content.addRequestProcess
                      : ""
                  }
                  variant="outlined"
                  multiline
                  rows={2}
                  rowsMax={10}
                  onChange={handleChangInput}
                  className="w-100"
                  name={
                    isRegister
                      ? "addRequest"
                      : isEnd
                      ? "addRequestTermination"
                      : isSalary
                      ? "addRequestSalary"
                      : isProposal
                      ? "addRequestProposal"
                      : isPromote
                      ? "addRequestProcess"
                      : ""
                  }
                  validators={["required"]}
                  errorMessages={["Không được để trống"]}
                />
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions>
            <Button variant="contained" color="primary" type="submit">
              Lưu
            </Button>
            <Button
              variant="contained"
              color="secondary"
              type="button"
              onClick={handleClose}
            >
              Hủy
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
};

export default AddRequestDialog;
