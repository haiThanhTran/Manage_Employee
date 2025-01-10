import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { AppBar, Avatar, Box, Grid, Tab, Tabs } from "@material-ui/core";
import ConstantList from "../../appConfig";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import {
  GENDER,
  TAB_PROMOTED,
  TAB_PROPOSAL,
  TAB_SARALY,
} from "app/const/EmployeeConst";
import { formatDate } from "../../const/utils";
import { TabPanel, a11yProps } from "app/component/CustomTab";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployeeById,
  resetCurrentEmployee,
} from "../../redux/actions/EmployeeActions";
import Salary from "./Tab/Salary";
import Promote from "./Tab/Promote";
import Proposal from "./Tab/Proposal";
import ProfileEmployeeDialog from "../ProfileEmployee/ProfileEmployeeDialog";
import ResignationDialog from "../LeaderWaiting/LeaderDialog/ResignationDialog";

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function ManageEmployeeDialog(props) {
  const [tab, setTab] = useState(TAB_SARALY);
  const dispatch = useDispatch();
  const { open, handleClose, employeeId, isManage, isEnd } = props;
  const { totalElements, currentEmployee } = useSelector(
    (state) => state.employees
  );
  const [showProfile, setShowProfile] = useState(false);
  const [showReasonEnd, setShowReasonEnd] = useState(false);

  useEffect(() => {
    if (employeeId) {
      dispatch(getEmployeeById(employeeId));
    }
  }, []);
  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  const handleReasonEnd = () => {
    setShowReasonEnd(true);
  };

  const handleReasonEndClose = () => {
    setShowReasonEnd(false);
  };

  const handleViewEmployee = (employee) => {
    setShowProfile(true);
    employee && dispatch(getEmployeeById(employee));
  };

  const handleViewEmployeeClose = () => {
    setShowProfile(false);
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={"lg"}
        fullWidth={true}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Cập nhật thông tin nhân viên
        </DialogTitle>

        <DialogContent dividers>
          <ValidatorForm>
            <Grid container>
              <Grid item xs={12} lg={12} md={12} sm={12}>
                <Grid container spacing={2} className="pb-16">
                  <Grid item xs className="flex flex-center">
                    <Avatar
                      alt="avatar"
                      src={
                        currentEmployee?.data?.image
                          ? currentEmployee?.data?.image
                          : ConstantList.ROOT_PATH + "assets/images/avatar.jpg"
                      }
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "50%",
                        border: "2px solid #ccc",
                        cursor: "pointer",
                      }}
                      className="style-image m-auto"
                    />
                  </Grid>
                  <Grid item xs>
                    <Box className="flex-grow-1 flex-column">
                      <TextValidator
                        label={<span>Mã</span>}
                        value={currentEmployee?.data?.code || ""}
                        className="w-100 "
                        name="code"
                      />
                      <TextValidator
                        label={<span>Tên</span>}
                        value={currentEmployee?.data?.name || ""}
                        className="w-100"
                        name="name"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs>
                    <Box className="flex-grow-1 flex-column">
                      <TextValidator
                        label={<span>Năm sinh</span>}
                        value={
                          formatDate(currentEmployee?.data?.dateOfBirth) || ""
                        }
                        className="w-100"
                        name="dateOfBirth"
                      />
                      <TextValidator
                        label={<span>Giới tính</span>}
                        value={
                          GENDER.find(
                            (item) =>
                              item.value === currentEmployee?.data?.gender
                          )?.name || ""
                        }
                        className="w-100"
                        name="gender"
                      ></TextValidator>
                    </Box>
                  </Grid>
                  <Grid item xs>
                    <Box className="flex-grow-1 flex-column">
                      <TextValidator
                        label={<span>SĐT</span>}
                        value={currentEmployee?.data?.phone || ""}
                        className="w-100"
                        name="phone"
                      />
                      <TextValidator
                        label={<span>Email</span>}
                        value={currentEmployee?.data?.email || ""}
                        className="w-100"
                        name="email"
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </ValidatorForm>
          <div>
            <AppBar position="static">
              <Tabs
                className="text-white"
                value={tab}
                onChange={handleChangeTab}
              >
                <Tab label={"Tăng Lương"} {...a11yProps(0)} />
                <Tab label={"Thăng chức"} {...a11yProps(1)} />
                <Tab label={"Đề suất"} {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <TabPanel value={tab} index={TAB_SARALY}>
              <Salary
                employee={currentEmployee}
                // listLeader={listLeader}
                isManage={isManage}
                isEnd={isEnd}
              />
            </TabPanel>
            <TabPanel value={tab} index={TAB_PROMOTED}>
              <Promote
                currentEmployee={currentEmployee}
                // listLeader={listLeader}
                isManage={isManage}
                isEnd={isEnd}
              />
            </TabPanel>
            <TabPanel value={tab} index={TAB_PROPOSAL}>
              <Proposal
                currentEmployee={currentEmployee}
                // listLeader={listLeader}
                isManage={isManage}
                isEnd={isEnd}
              />
            </TabPanel>
          </div>
        </DialogContent>

        <DialogActions>
          <div className="text-center m-auto">
            <Button
              variant="contained"
              color="primary"
              type="button"
              className="mr-12"
              onClick={() => handleViewEmployee()}
            >
              Xem thông tin
            </Button>

            <Button
              variant="contained"
              color="primary"
              className="mr-12"
              onClick={() => handleReasonEnd()}
            >
              Kết thúc
            </Button>

            <Button
              variant="contained"
              color="secondary"
              type="button"
              onClick={handleClose}
            >
              Đóng
            </Button>
          </div>
        </DialogActions>
      </Dialog>

      {showReasonEnd && (
        <ResignationDialog
          open={showReasonEnd}
          handleClose={handleReasonEndClose}
          employee={currentEmployee}
          handleDialogEmployeeClose={handleClose}
        />
      )}

      {showProfile && (
        <ProfileEmployeeDialog
          open={showProfile}
          handleClose={handleViewEmployeeClose}
          employeeId={employeeId}
          isEnd={isEnd}
        />
      )}
    </div>
  );
}

export default ManageEmployeeDialog;
