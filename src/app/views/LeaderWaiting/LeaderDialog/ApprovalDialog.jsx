import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { Grid } from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
  resetCurrentEmployee,
  updateEmployee,
} from "app/redux/actions/EmployeeActions";
import { updateSalaryByEmployee } from "app/redux/actions/SalaryAction";
import { updateProposalByEmployee } from "app/redux/actions/ProposalActions";
import { updatePromoteByEmployee } from "app/redux/actions/PromoteActions";

const DialogActions = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    margin: "10px auto",
    display: "flex",
    justifyContent: "center",
  },
}))(MuiDialogActions);

const ApprovalDialog = ({
  t,
  open,
  handleClose,
  currentEmployee,
  proposal,
  promote,
  handleCloseProfile,
  isRegister,
  isProposal,
  isPromote,
  isSalary,
  salary,
  searchEmployee,
  searchProposal,
  searchPromote,
}) => {
  const employee = currentEmployee?.data;
  const [appointmentDate, setAppointmentDate] = useState("");
  const [acceptanceDate, setAcceptanceDate] = useState("");
  const dispatch = useDispatch();
  const handleChangInput = (e) => {
    setAppointmentDate(e.target.value);
  };
  const handleSubmit = async () => {
    const updateData = { ...employee, appointmentDate, submitProfileStatus: 3 };
    const updateDataPromote = { ...employee, appointmentDate, submitProfileStatus: 3 };
    if (isRegister) {
      try {
        const registerApproval = await dispatch(
          updateEmployee(employee.id, updateData)
        ); // Đợi dispatch hoàn thành
        if (registerApproval) {
          await searchEmployee();
        }
      } catch (error) {
        console.error("Lỗi khi cập nhật nhân viên:", error);
      }
    }

    if (isSalary) {
      dispatch(
        updateSalaryByEmployee({
          ...salary,
          acceptanceDate,
          salaryIncreaseStatus: 3,
        })
      );
    }

    if (isProposal) {
      try {
        await dispatch(
          updateProposalByEmployee({
            ...proposal,
            acceptanceDate,
            proposalStatus: 3,
          })
        ); // Đợi dispatch hoàn thành

        // Gọi lại searchEmployee sau khi cập nhật thành công
        searchProposal();
      } catch (error) {
        console.error("Lỗi khi cập nhật nhân viên:", error);
      }
    }

    if (isPromote) {
      try {
        await dispatch(
          updatePromoteByEmployee({
            ...promote,
            acceptanceDate,
            processStatus: 3,
          })
        ); // Đợi dispatch hoàn thành

        // Gọi lại searchEmployee sau khi cập nhật thành công
        searchProposal();
      } catch (error) {
        console.error("Lỗi khi cập nhật nhân viên:", error);
      }
    }
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
          Phê duyệt
        </DialogTitle>
        <ValidatorForm onSubmit={handleSubmit}>
          <DialogContent dividers>
            <Grid container>
              <Grid item xs={12}>
                <TextValidator
                  label={
                    <span>
                      <span className="text-error">*</span>
                      Ngày duyệt
                    </span>
                  }
                  type="date"
                  value={new Date().toISOString().split("T")[0] || ""}
                  variant="outlined"
                  onChange={handleChangInput}
                  className="w-100"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name={
                    isRegister
                      ? "appointmentDate"
                      : isSalary
                      ? "acceptanceDate"
                      : isProposal
                      ? "acceptanceDate"
                      : isPromote
                      ? "acceptanceDate"
                      : ""
                  }
                  validators={["required"]}
                  errorMessages={["Vui lòng chọn ngày duyệt"]}
                  inputProps={{
                    min: moment().format("YYYY-MM-DD"),
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions>
            <Button variant="contained" color="primary" type="submit">
              Duyệt
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

export default ApprovalDialog;
