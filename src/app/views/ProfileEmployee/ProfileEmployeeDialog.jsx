import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
} from "@material-ui/core";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { Tab, Tabs } from "@material-ui/core";
import { TabPanel, a11yProps } from "app/component/CustomTab";
import CvTab from "./Tabs/CvTab";
import ProfileTab from "./Tabs/ProfileTab";
import CertificateTab from "./Tabs/CertificateTab";
import { useDispatch, useSelector } from "react-redux";
import { getFamily } from "../../redux/actions/FamilyAction";
import { getCertificate } from "../../redux/actions/CertificateActions";
import { ACTION_EMPLOYEE, STATUS_EMPLOYEE } from "app/const/EmployeeConst";
import { isMobile } from "../../const/utils";
import { getExperience } from "../../redux/actions/ExperienceActions";
import LeaderSubmitDialog from "./LeaderSubmitDialog";
import { getEmployeeById } from "app/redux/actions/EmployeeActions";
import ResignationDialog from "./../LeaderWaiting/LeaderDialog/ResignationDialog";

const DialogActions = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    margin: "10px auto",
    display: "flex",
    justifyContent: "center",
  },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: isMobile() ? "block" : "flex",
    // height: "750px",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    flexShrink: "0",
  },
  tabPanel: {
    minWidth: "960px",
    minHeight: "750px",
    padding: "10px",
    background: "white",
    overflow: "auto",
  },
}));

function ProfileEmployeeDialog(props) {
  const {
    t,
    open,
    handleClose,
    employeeId,
    isManage,
    handleDialogProcess,
    handleDialogEmployeeClose,
    isEnd,
  } = props;
  const [isLeaderSubmit, setIsLeaderSubmit] = useState(false);
  const [employeeData, setEmployeeData] = useState(null);
  const [tab, setTab] = useState(0);
  const { listEmployees, totalElements, currentEmployee } = useSelector(
    (state) => state.employees
  );
  const { listCertificate } = useSelector((state) => state.certificate);
  const { familyList } = useSelector((state) => state.family);
  const { listExperience } = useSelector((state) => state.experience);
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     if (employee?.data) {
  //       setEmployeeData(employee.data);
  //       dispatch(getFamily(employee.data?.id));
  //       dispatch(getCertificate(employee.data?.id));
  //       dispatch(getExperience(employee.data?.id));
  //     }
  //   }, [employee]);

  useEffect(() => {
    if (employeeId) {
      // Chỉ gọi API khi employeeId có giá trị hợp lệ
      dispatch(getEmployeeById(employeeId));
      dispatch(getCertificate(employeeId));
      dispatch(getExperience(employeeId));
      dispatch(getFamily(employeeId));
    }
  }, [employeeId, dispatch]);

  console.log("currentEmployee", currentEmployee);

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleLeaderSubmitDialog = () => {
    setIsLeaderSubmit(true);
  };

  return (
    <div>
      <Dialog
        maxWidth={"lg"}
        fullWidth={true}
        onClose={handleClose}
        open={open}
      >
        <DialogTitle onClose={handleClose}>Hồ sơ nhân viên</DialogTitle>

        <DialogContent dividers>
          <Grid xs={12} className="flex">
            <Grid xs={2}>
              <Tabs
                orientation={isMobile() ? "horizontal" : "vertical"}
                value={tab}
                onChange={handleChange}
                className={classes.tabs}
              >
                <Tab label="Cv" {...a11yProps(0)} />
                <Tab label="Sơ yếu lý lịch" {...a11yProps(1)} />
                <Tab label="Văn bằng" {...a11yProps(2)} />
                {isEnd && <Tab label="Đơn xin nghỉ việc" {...a11yProps(3)} />}
              </Tabs>
            </Grid>
            <Grid xs={10}>
              <TabPanel value={tab} index={0} className={classes.tabPanel}>
                <CvTab
                  employeeCv={currentEmployee}
                  listExperience={listExperience}
                />
              </TabPanel>
              <TabPanel value={tab} index={1} className={classes.tabPanel}>
                <ProfileTab
                  employeeFamily={familyList}
                  employeeData={currentEmployee}
                  t={t}
                />
              </TabPanel>
              <TabPanel value={tab} index={2} className={classes.tabPanel}>
                <CertificateTab listCertificates={listCertificate} t={t} />
              </TabPanel>
              {isEnd &&
              <TabPanel value={tab} index={3} className="tabPanel">
                <ResignationDialog
                  t={t}
                  open={open}
                  handleClose={handleClose}
                  employee={currentEmployee}
                  isManage={isManage}
                  handleDialogEmployeeClose={handleDialogEmployeeClose}
                  isEnd={isEnd}
                />
              </TabPanel>
              }
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          {ACTION_EMPLOYEE.EDIT.includes(
            Number(currentEmployee?.data?.submitProfileStatus)
          ) &&
            STATUS_EMPLOYEE.ADD.includes(
              Number(currentEmployee?.data?.submitProfileStatus)
            ) && (
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  type="button"
                  onClick={() => handleLeaderSubmitDialog()}
                >
                  Gửi lãnh đạo
                </Button>
              </div>
            )}
          {isManage &&
            (ACTION_EMPLOYEE.PENDING_END.includes(
              currentEmployee?.submitProfileStatus
            ) ||
              STATUS_EMPLOYEE.APPROVED.includes(
                currentEmployee?.submitProfileStatus
              )) && (
              <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={handleDialogProcess}
              >
                Lịch sử cập nhật
              </Button>
            )}
          {/* {isManage &&
            ACTION_EMPLOYEE.PENDING.includes(employee?.submitProfileStatus) && (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleDialogApproved()}
                >
                  Phê duyệt
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleDialogAddRequest()}
                >
                  Yêu cầu bổ sung
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleDialogReasonRefusalDialog()}
                >
                  Từ chối
                </Button>
              </>
            )} */}
          <Button
            variant="contained"
            color="secondary"
            type="button"
            onClick={handleClose}
          >
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
      {isLeaderSubmit && (
        <LeaderSubmitDialog
          t={t}
          open={isLeaderSubmit}
          handleClose={handleClose}
          handleDialogEmployeeClose={handleDialogEmployeeClose}
          employee={currentEmployee}
        />
      )}

      

      {/* {showProcess && (
        <ManageEmployeeDialog
          open={showProcess}
          t={t}
          handleClose={handleDialogProcessClose}
          employee={employee}
          isManage={isManage}
        />
      )} */}

      {/* {showDialogApproval && (
        <ApprovalDialog
          t={t}
          open={showDialogApproval}
          handleClose={handleDialogApprovedClose}
          handleCloseProfile={handleClose}
          employee={employee}
          isRegister={true}
        />
      )}
      {showDialogAddRequest && (
        <AddRequestDialog
          t={t}
          open={showDialogAddRequest}
          handleClose={handleDialogAddRequestClose}
          handleCloseProfile={handleClose}
          employee={employee}
          isRegister={true}
        />
      )}
      {showDialogReasonRefusalDialog && (
        <ReasonRefusalDialog
          t={t}
          open={showDialogReasonRefusalDialog}
          handleClose={handleDialogReasonRefusalDialogClose}
          handleCloseProfile={handleClose}
          employee={employee}
          isRegister={true}
        />
      )} */}
    </div>
  );
}

export default ProfileEmployeeDialog;
