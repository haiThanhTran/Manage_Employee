import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  addExperience,
  updateExperience,
} from "app/redux/actions/ExperienceActions";
import {convertTimeToDate} from "../../const/utils"

const DialogActions = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    margin: "10px auto",
    display: "flex",
    justifyContent: "center",
  },
}))(MuiDialogActions);

const ExperienceDialog = ({
  open,
  handleClose,
  t,
  employee,
  listExperience,
}) => {
  const [experience, setExperience] = useState(listExperience);
  const dispatch = useDispatch();
  const handleChangeInput = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (experience?.id) {
      console.log("experience",experience)
      const data = {
        id: experience?.id,
        data: { ...experience, employeeId: employee?.id },
      };
      dispatch(updateExperience(data));
      handleClose();
    } else {
      const data = {
        id: employee?.id,
        data: [{ ...experience, employeeId: employee?.id }],
      };

      dispatch(addExperience(data));
      handleClose();
    }
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Kinh nghiệm làm việc
        </DialogTitle>
        <ValidatorForm onSubmit={handleSubmit}>
          <DialogContent dividers>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextValidator
                  className="w-100"
                  label="Tên công ty"
                  name="companyName"
                  value={experience?.companyName}
                  onChange={handleChangeInput}
                  validators={["required"]}
                  errorMessages={["Trường này không được để trống"]}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextValidator
                  className="w-100"
                  label="Ngày bắt đầu"
                  type="date"
                  name="startDate"
                  value={convertTimeToDate(experience?.startDate)}
                  onChange={handleChangeInput}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  validators={["required"]}
                  errorMessages={["Trường này không được để trống"]}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextValidator
                  className="w-100"
                  label="Ngày kết thúc"
                  type="date"
                  name="endDate"
                  value={convertTimeToDate(experience?.endDate)}
                  onChange={handleChangeInput}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  validators={["required"]}
                  errorMessages={["Trường này không được để trống"]}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextValidator
                  className="w-100"
                  label="Địa chỉ công ty"
                  name="companyAddress"
                  value={experience?.companyAddress}
                  onChange={handleChangeInput}
                  validators={["required"]}
                  errorMessages={["Trường này không được để trống"]}
                />
              </Grid>
              <Grid item xs={12}>
                <TextValidator
                  className="w-100"
                  label="Lý do nghỉ việc"
                  name="leavingReason"
                  value={experience?.leavingReason}
                  onChange={handleChangeInput}
                  validators={["required"]}
                  errorMessages={["Trường này không được để trống"]}
                />
              </Grid>
              <Grid item xs={12}>
                <TextValidator
                  className="w-100"
                  label="Mô tả công việc"
                  name="jobDescription"
                  value={experience?.jobDescription}
                  onChange={handleChangeInput}
                  validators={["required"]}
                  errorMessages={["Trường này không được để trống"]}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              className="mx-10"
              type="submit"
            >
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

export default ExperienceDialog;
