import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Grid } from "@material-ui/core";
import moment from "moment";
import { useDispatch } from "react-redux";
import { updateEmployee } from "app/redux/actions/EmployeeActions";

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
  },
}))(MuiDialogActions);

const EndEmployeeDialog = ({  open, handleClose, employee }) => {
  const [numberSaved, setNumberSaved] = useState("");
  const codeEndDate = `NL${moment().format("MM")}${moment().format("YY")}/`;
  const employeeData = employee?.data;
  const dispatch = useDispatch();

  const handleChangInput = (e) => {
    const value = e.target.value;

    if (value.startsWith(codeEndDate)) {
      setNumberSaved(value);
    }
  };

  const handleSubmit = () => {
    const dataEndEmployee = {
      ...employeeData,
      decisionDay: new Date().toISOString().split("T")[0],
      numberSaved,
      submitProfileStatus: "0",
    };
    dispatch(updateEmployee(dataEndEmployee?.id, dataEndEmployee));
    handleClose();
  };

  return (
    <Dialog
      maxWidth={"sm"}
      fullWidth={true}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Kết thúc nhân viên
      </DialogTitle>
      <ValidatorForm onSubmit={handleSubmit}>
        <DialogContent dividers>
          <Grid container>
            <Grid item xs={12} md={6}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                    Ngày quyết định
                  </span>
                }
                disabled
                type="date"
                value={new Date().toISOString().split("T")[0]}
                variant="outlined"
                name="decisionDay"
                className="w-100 pr-12"
                InputLabelProps={{ shrink: true }}
                validators={["required"]}
                errorMessages={["Trường này không được để trống"]}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                    Mã nộp lưu
                  </span>
                }
                value={numberSaved || codeEndDate}
                variant="outlined"
                onChange={handleChangInput}
                className="w-100"
                name="numberSaved"
                validators={["required", `matchRegexp:^${codeEndDate}\\d{3}$`]}
                errorMessages={[
                  "Trường này không được để trống",
                  "Mã nộp lưu phải có dạng " + codeEndDate + "3 số bất kỳ",
                ]}
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
  );
};

export default EndEmployeeDialog;
