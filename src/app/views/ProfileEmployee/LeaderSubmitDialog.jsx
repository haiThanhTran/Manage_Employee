import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import MuiDialogActions from "@material-ui/core/DialogActions";
import {
  SelectValidator,
  TextValidator,
  ValidatorForm,
} from "react-material-ui-form-validator";
import { Grid, MenuItem } from "@material-ui/core";
import {
  LEADERSHIP,
  LEADER_POSITION,
  POSITIONS,
} from "app/const/EmployeeConst";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployee } from "app/redux/actions/EmployeeActions";
import moment from "moment";
import { getLeader } from "app/redux/actions/LeaderActions";
import { convertTimeToDate } from "../../const/utils";

const DialogActions = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    margin: "10px auto",
    display: "flex",
    justifyContent: "center",
  },
}))(MuiDialogActions);

const LeaderSubmitDialog = ({
  open,
  handleClose,
  handleDialogEmployeeClose,
  t,
  employee,
}) => {
  const [leaderSubmit, setLeaderSubmit] = useState({});
  const listLeader = useSelector((state) => state.leader.listLeader);
  const dispatch = useDispatch();

  //   useEffect(() =>{
  //     setLeaderSubmit({
  //         ...employee
  //     })
  // },[employee]);

  useEffect(() => {
    dispatch(getLeader());
  }, []);

  const handleSubmit = () => {
    const data = {
      ...employee,
      ...leaderSubmit,
      submitProfileStatus: 2,
    };
    console.log("data", data);
    dispatch(updateEmployee(data?.data?.id, data?.data));
    handleClose();
    handleDialogEmployeeClose();
  };

  const handleChangInput = (e) => {
    setLeaderSubmit({ ...leaderSubmit, [e.target.name]: e.target.value });
  };

  const leaderPosition = leaderSubmit?.leaderId
    ? listLeader?.find((item) => item.id === leaderSubmit?.leaderId)
        ?.leaderPosition
    : "";
  const leaderName = LEADER_POSITION.find(
    (position) => position.id === leaderPosition
  )?.name;

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={"md"}
        fullWidth={true}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Gửi lãnh đạo
        </DialogTitle>
        <ValidatorForm onSubmit={handleSubmit}>
          <DialogContent dividers>
            <Grid container spacing={2} className="mb-20">
              <Grid item xs={4}>
                <TextValidator
                  label={
                    <span>
                      <span className="text-error">*</span>
                      Ngày trình
                    </span>
                  }
                  type="date"
                  value={
                    typeof leaderSubmit?.submitDay === "string"
                      ? leaderSubmit?.submitDay
                      : convertTimeToDate(leaderSubmit?.submitDay) || ""
                  }
                  variant="outlined"
                  onChange={handleChangInput}
                  className="w-100"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="submitDay"
                  validators={["required"]}
                  errorMessages={["Trường này không được để trống"]}
                  inputProps={{
                    min: moment().format("YYYY-MM-DD"),
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <SelectValidator
                  label={
                    <span>
                      <span className="text-error">*</span>
                      Tên lãnh đạo
                    </span>
                  }
                  select
                  value={leaderSubmit?.leaderId || ""}
                  variant="outlined"
                  inputProps={{
                    readOnly:
                      leaderSubmit?.leaderId &&
                      leaderSubmit?.submitProfileStatus === "4",
                  }}
                  onChange={handleChangInput}
                  className="w-100"
                  name="leaderId"
                  validators={["required"]}
                  errorMessages={["Trường này không được để trống"]}
                >
                  {listLeader?.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item?.id}>
                        {item.leaderName}
                      </MenuItem>
                    );
                  })}
                </SelectValidator>
              </Grid>

              <Grid item xs={4}>
                <TextValidator
                  label={
                    <span>
                      <span className="text-error ">*</span>
                      Chức vụ
                    </span>
                  }
                  value={leaderSubmit?.leaderId ? leaderName : ""}
                  variant="outlined"
                  onChange={handleChangInput}
                  inputProps={{
                    readOnly: true,
                  }}
                  className="w-100"
                  validators={["required"]}
                  errorMessages={["Trường này không được để trống"]}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} className="mb-20">
              <Grid item xs={12}>
                <TextField
                  label={
                    <span>
                      <span className="text-error">*</span>
                      Nội dung
                    </span>
                  }
                  value={leaderSubmit?.submitContent || ""}
                  placeholder="Nhập nội dung"
                  multiline
                  rows={4}
                  rowsMax={10}
                  variant="outlined"
                  onChange={handleChangInput}
                  className="w-100"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="submitContent"
                  validators={["required"]}
                  errorMessages={["Trường này không được để trống"]}
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

export default LeaderSubmitDialog;
