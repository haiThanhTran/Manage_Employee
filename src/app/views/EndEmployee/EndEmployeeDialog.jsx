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

const EndEmployeeDialog = ({ t, open, handleClose, employee }) => {
  const [numberSaved, setNumberSaved] = useState("");
  const codeEndDate = `NL${moment().format("MM")}${moment().format("YY")}/`; 

  const dispatch = useDispatch();

  const handleChangInput = (e) => {
    const value = e.target.value;

    if (value.startsWith(codeEndDate)) {
      setNumberSaved(value);
    }
  };

  const handleSubmit = () => {
    dispatch(
      updateEmployee({
        ...employee,
        decisionDay: new Date().toISOString().split("T")[0],
        numberSaved,
        submitProfileStatus: "0",
      })
    );
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
        {t("employee.submit")}
      </DialogTitle>
      <ValidatorForm onSubmit={handleSubmit}>
        <DialogContent dividers>
          <Grid container>
            <Grid item xs={12} md={6}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                    {t("employee.decisionDay")}
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
                errorMessages={[t("general.required")]}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                    {t("employee.numberSaved")}
                  </span>
                }
                value={numberSaved || codeEndDate}
                variant="outlined"
                onChange={handleChangInput}
                className="w-100"
                name="numberSaved"
                validators={["required", `matchRegexp:^${codeEndDate}\\d{3}$`]}
                errorMessages={[
                  t("general.required"),
                  "Mã nộp lưu phải có dạng " + codeEndDate + "3 số bất kỳ",
                ]}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" type="submit">
            {t("general.save")}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            type="button"
            onClick={handleClose}
          >
            {t("general.cancel")}
          </Button>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
};

export default EndEmployeeDialog;
