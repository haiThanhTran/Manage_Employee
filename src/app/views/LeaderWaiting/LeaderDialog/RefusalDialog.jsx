import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { Grid } from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import moment from "moment";
import { useDispatch } from "react-redux";
import { updateEmployee } from "app/redux/actions/EmployeeActions";
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

const ReasonRefusalDialog = ({
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
  isProposal,
  isPromote,
  salary,
  searchEmployee,
}) => {
  const employee = currentEmployee?.data;
  const [content, setContent] = useState({
    rejectionDate: new Date().toISOString().split("T")[0],
    ReasonRefusalDialog: "",
    refuseEndProfileDay: new Date().toISOString().split("T")[0],
    reasonForRefuseEndProfile: "",
    rejectionDateSalary: new Date().toISOString().split("T")[0],
    reasonForRefusalSalary: "",
    rejectionDateProposal: new Date().toISOString().split("T")[0],
    reasonForRefusalProposal: "",
    rejectionDateProcess: new Date().toISOString().split("T")[0],
    reasonForRefusalProcess: "",
  });
  const dispatch = useDispatch();
  const handleChangInput = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const updateDataRegister = {
      ...employee,
      rejectionDate: content.rejectionDate,
      ReasonRefusalDialog: content.ReasonRefusalDialog,
      submitProfileStatus: 5,
    };
    const updateDataEnd = {
      ...employee,
      refuseEndProfileDay: content.refuseEndProfileDay,
      reasonForRefuseEndProfile: content.reasonForRefuseEndProfile,
      submitProfileStatus: 9,
    };
    if (isRegister) {
      try {
        await dispatch(updateEmployee(employee.id, updateDataRegister)); // Đợi dispatch hoàn thành

        // Gọi lại searchEmployee sau khi cập nhật thành công
        searchEmployee();
      } catch (error) {
        console.error("Lỗi khi cập nhật nhân viên:", error);
      }
    }

    if (isEnd) {
      try {
        await dispatch(updateEmployee(employee.id, updateDataEnd)); // Đợi dispatch hoàn thành

        // Gọi lại searchEmployee sau khi cập nhật thành công
        searchEmployee();
      } catch (error) {
        console.error("Lỗi khi cập nhật nhân viên:", error);
      }
    }
    isSalary &&
      dispatch(
        updateSalaryByEmployee({
          ...salary,
          rejectionDateSalary: content.rejectionDateSalary,
          reasonForRefusal: content.reasonForRefusalSalary,
          salaryIncreaseStatus: 5,
        })
      );
    isProposal &&
      dispatch(
        updateProposalByEmployee({
          ...proposal,
          rejectionDateProposal: content.rejectionDateProposal,
          reasonForRefusal: content.reasonForRefusalProposal,
          proposalStatus: 5,
        })
      );
    isPromote &&
      dispatch(
        updatePromoteByEmployee({
          ...promote,
          rejectionDateProcess: content.rejectionDateProcess,
          reasonForRefusal: content.reasonForRefusalProcess,
          processStatus: 5,
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
          Từ chối
        </DialogTitle>
        <ValidatorForm onSubmit={handleSubmit}>
          <DialogContent dividers>
            <Grid container>
              <Grid item xs={12} md={6}>
                <TextValidator
                  label={
                    <span>
                      <span className="text-error">*</span>
                      Ngày từ chối
                    </span>
                  }
                  type="date"
                  value={
                    isRegister
                      ? content.rejectionDate
                      : isEnd
                      ? content.refuseEndProfileDay
                      : isSalary
                      ? content.rejectionDateSalary
                      : isProposal
                      ? content.rejectionDateProposal
                      : isPromote
                      ? content.rejectionDateProcess
                      : ""
                  }
                  variant="outlined"
                  onChange={handleChangInput}
                  className="w-100 pr-12"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name={
                    isRegister
                      ? "rejectionDate"
                      : isEnd
                      ? "refuseEndProfileDay"
                      : isSalary
                      ? "rejectionDateSalary"
                      : isProposal
                      ? "rejectionDateProposal"
                      : isPromote
                      ? "rejectionDateProcess"
                      : ""
                  }
                  validators={["required"]}
                  errorMessages={["Vui lòng chọn ngày từ chối"]}
                  inputProps={{
                    min: moment().format("YYYY-MM-DD"),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextValidator
                  label={
                    <span>
                      <span className="text-error">*</span>
                      Nội dung từ chối
                    </span>
                  }
                  value={
                    isRegister
                      ? content.ReasonRefusalDialog
                      : isEnd
                      ? content.reasonForRefuseEndProfile
                      : isSalary
                      ? content.reasonForRefusalSalary
                      : isProposal
                      ? content.reasonForRefusalProposal
                      : isPromote
                      ? content.reasonForRefusalProcess
                      : ""
                  }
                  variant="outlined"
                  onChange={handleChangInput}
                  className="w-100"
                  name={
                    isRegister
                      ? "ReasonRefusalDialog"
                      : isEnd
                      ? "reasonForRefuseEndProfile"
                      : isSalary
                      ? "reasonForRefusalSalary"
                      : isProposal
                      ? "reasonForRefusalProposal"
                      : isPromote
                      ? "reasonForRefusalProcess"
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

export default ReasonRefusalDialog;
