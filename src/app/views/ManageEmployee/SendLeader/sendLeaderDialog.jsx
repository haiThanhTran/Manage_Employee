import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { Grid, MenuItem } from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployee } from "app/redux/actions/EmployeeActions";
import { getLeader } from "app/redux/actions/LeaderActions";
import { POSITIONS } from "app/const/EmployeeConst";
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

const SendLeaderDialog = ({
    t,
    open,
    handleClose,
    employee,
    handleDialogEmployeeClose,
    content,
    promote,
    salary,
    proposal,
    isEnd
  }) => {
    const [leader, setLeader] = useState("");
    const { listLeader } = useSelector((state) => state.leader);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getLeader());
    }, []);
    const handleSubmit = () => {
      if (promote) {
        console.log("promote", promote);
        dispatch(updatePromoteByEmployee({ ...promote, leaderId: leader, processStatus: 2 }));
        handleClose();
      } else if (salary) {
        console.log("salary", salary);
        console.log("employee", employee);
        dispatch(updateSalaryByEmployee({ ...salary,employeeId:employee?.id,leaderId: leader, salaryIncreaseStatus: 2 }));
        handleClose();
      } else if (proposal) {
        console.log("proposal", proposal);
        dispatch(updateProposalByEmployee({ ...proposal, leaderId: leader, proposalStatus: 2 }));
        handleClose();
      } else {
        const data={
              ...content,
              leaderId: leader,
              submitProfileStatus: 6,
            }
        console.log("update", data)
        dispatch(updateEmployee(data?.id, data));
        handleDialogEmployeeClose();
      }
    };
  
    const handleChangInput = (e) => {
      setLeader(e.target.value);
    };
    const leaderPosition = leader
      ? listLeader?.find((item) => item.id === leader).leaderPosition
      : "";
    const leaderName = POSITIONS.find(
      (position) => position.id === leaderPosition
    )?.name;
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
            {isEnd ? "Kết thúc hồ sơ" : "Trình lãnh đạo"}
          </DialogTitle>
          <ValidatorForm onSubmit={handleSubmit}>
            <DialogContent dividers>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <TextValidator
                    label={
                      <span>
                        <span className="text-error">*</span>
                        Tên lãnh đạo
                      </span>
                    }
                    select
                    value={leader || ""}
                    variant="outlined"
                    onChange={handleChangInput}
                    className="w-100 pr-12"
                    name="leader"
                    validators={["required"]}
                    errorMessages={["Vui lòng chọn lãnh đạo"]}
                  >
                    {listLeader?.map((item, index) => {
                      return (
                        <MenuItem key={index} value={item?.id}>
                          {item.leaderName}
                        </MenuItem>
                      );
                    })}
                  </TextValidator>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextValidator
                    label={
                      <span>
                        <span className="text-error ">*</span>
                        Chức vụ
                      </span>
                    }
                    value={leaderName || ""}
                    variant="outlined"
                    className="w-100"
                    validators={["required"]}
                    errorMessages={["Vui lòng chọn chức vụ"]}
                  />
                </Grid>
              </Grid>
            </DialogContent>
  
            <DialogActions>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                type="button"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  };
  
  export default SendLeaderDialog;
  