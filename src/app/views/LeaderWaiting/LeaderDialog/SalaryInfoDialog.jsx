import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Tab,
  Tabs,
} from "@material-ui/core";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import { ACTION_PROCESS, LEADERSHIP } from "app/const/EmployeeConst";
import { Grid } from "@material-ui/core";
import { formatMoney, getDayMonthYear, isMobile } from "utils";
import { useDispatch } from "react-redux";
import {
  addSalaryByEmployee,
  updateSalaryByEmployee,
} from "app/redux/actions/SalaryAction";
// import ApprovalDialog from "./ApprovalDialog";
// import AddRequestDialog from "./AddRequestDialog";
// import ReasonRefusalDialog from "./ReasonRefusalDialog";
import moment from "moment";
import ConfirmLetter from "./ConfirmLetter";
import "../../../../app/views/_form.scss";
import { TabPanel, a11yProps } from "app/component/CustomTab";
import SendLeaderDialog from "../../ManageEmployee/SendLeader/sendLeaderDialog";

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: isMobile() ? "block" : "flex",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    flexShrink: "0",
    position: "fixed",
  },
}));

const SalaryInfoDialog = ({
  open,
  t,
  handleClose,
  employee,
  salary,
  isManage,
}) => {
  console.log("salary", salary);
  const [showDialogApproved, setShowDialogApproved] = useState(false);
  const [showDialogAddRequest, setShowDialogAddRequest] = useState(false);
  const [showDialogReasonRefusalDialog, setShowDialogReasonRefusalDialog] =
    useState(false);
  const [showDialogSubmit, setShowDialogSubmit] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleDialogSubmit = () => {
    setShowDialogSubmit(true);
  };
  const handleDialogSubmitClose = () => {
    setShowDialogSubmit(false);
  };

  const handleDialogApproved = () => {
    setShowDialogApproved(true);
  };

  const handleDialogApprovedClose = () => {
    setShowDialogApproved(false);
  };

  const handleDialogAddRequest = () => {
    setShowDialogAddRequest(true);
  };

  const handleDialogAddRequestClose = () => {
    setShowDialogAddRequest(false);
  };

  const handleDialogReasonRefusalDialog = () => {
    setShowDialogReasonRefusalDialog(true);
  };

  const handleDialogReasonRefusalDialogClose = () => {
    setShowDialogReasonRefusalDialog(false);
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
        <DialogTitle id="draggable-dialog-title">
          <Grid container justify="space-between" alignItems="center">
            <Grid item>Đề xuất tăng lương</Grid>
          </Grid>
        </DialogTitle>

        <DialogContent dividers>
          <Grid xs={12} className="flex">
            <Grid xs={2}>
              <Tabs
                orientation={isMobile() ? "horizontal" : "vertical"}
                value={0}
                className={classes.tabs}
              >
                <Tab label="Đơn xin tăng lương" {...a11yProps(0)} />
              </Tabs>
            </Grid>
            <Grid xs={10}>
              <TabPanel value={0} index={0} className="tabPanel">
                <DialogContent dividers className="wrapper-a4 mh-70">
                  <Box className="A4">
                    <Box className="A4-content">
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <div className="flex-center">
                            <Typography className="text-overflow bold fw">
                              CÔNG TY OCEANTECH
                            </Typography>
                          </div>
                          <Typography className="flex-center fw">
                            <b> Số {employee?.id}/ QĐ - TL</b>
                          </Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <div className="flex-center">
                            <Typography className="text-overflow bold fw">
                              CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                            </Typography>
                          </div>
                          <div className="flex-center">
                            <Typography className="text-overflow heading-underline bold fw">
                              Độc lập - Tự do - Hạnh phúc
                            </Typography>
                          </div>
                          <div className="flex-center">
                            <Typography className="text-overflow line-height-25 mt-32 italic fw">
                              Hà Nội, Ngày{" "}
                              {
                                moment(new Date(salary?.startDate))
                                  .format("DD/MM/YYYY")
                                  .split("/")[0]
                              }{" "}
                              tháng{" "}
                              {
                                moment(new Date(salary?.startDate))
                                  .format("DD/MM/YYYY")
                                  .split("/")[1]
                              }{" "}
                              năm{" "}
                              {
                                moment(new Date(salary?.startDate))
                                  .format("DD/MM/YYYY")
                                  .split("/")[2]
                              }
                            </Typography>
                          </div>
                        </Grid>
                      </Grid>
                      <Typography className="flex-center mt-32 bold fw">
                        QUYẾT ĐỊNH
                      </Typography>
                      <Typography className="flex-center pb-12 fw italic">
                        V/v tăng lương cho người lao động
                      </Typography>
                      <Typography className="fw">
                        - Căn cứ vào Điều lệ, nội quy, quy chế của Công ty
                        OCEANTECH;
                      </Typography>
                      <Typography className="fw">
                        - Căn cứ vào hợp đồng số <b>{employee?.code}</b> được ký
                        giữa Công ty OCEANTECH và Ông/Bà <b>{employee?.name}</b>{" "}
                        ngày {moment(employee?.startDate).format("DD")} tháng{" "}
                        {moment(employee?.startDate).format("MM")} năm{" "}
                        {moment(employee?.startDate).format("YYYY")};
                      </Typography>
                      <Typography className="pb-12 fw">
                        - Căn cứ vào sự đóng góp thực tế của Ông/Bà:{" "}
                        <b>{employee?.name}</b> đổi với sự phát triển của Công
                        ty OCEANTECH.
                      </Typography>
                      <div className="flex-center fw">
                        <Typography className="text-overflow bold fw">
                          GIÁM ĐỐC CÔNG TY OCEANTECH
                        </Typography>
                      </div>
                      <Typography className="flex-center line-height-25 bold fw">
                        QUYẾT ĐỊNH
                      </Typography>
                      <Typography className="fw">
                        <b>- Điều 1:</b> Tăng lương cho Ông/Bà:{" "}
                        <b>{employee?.name}</b> đang làm việc tại công ty kể từ
                        ngày{" "}
                        {
                          moment(new Date(salary?.startDate))
                            .format("DD/MM/YYYY")
                            .split("/")[0]
                        }{" "}
                        tháng{" "}
                        {
                          moment(new Date(salary?.startDate))
                            .format("DD/MM/YYYY")
                            .split("/")[1]
                        }{" "}
                        năm{" "}
                        {
                          moment(new Date(salary?.startDate))
                            .format("DD/MM/YYYY")
                            .split("/")[2]
                        }
                        , cụ thể như sau:
                      </Typography>
                      <Typography className="fw">
                        Mức lương hiện tại:{" "}
                        <b>{salary?.oldSalary?.toLocaleString()} VND</b>
                      </Typography>
                      <Typography className="fw">
                        Mức lương sau điều chỉnh:{" "}
                        <b>{salary?.newSalary?.toLocaleString()} VND</b>
                      </Typography>
                      <Typography className="fw">
                        <b>- Điều 2: </b>Các Ông/Bà Phòng nhân sự, Phòng tài
                        chính kế toán và Ông/Bà:{" "}
                        <b>
                          {
                            LEADERSHIP?.find(
                              (item) => item?.id === salary?.leaderId
                            )?.leaderName
                          }{" "}
                        </b>
                        căn cứ thi hành quyết định này.
                      </Typography>
                      <Box className="flex-between mt-32 fw">
                        <Box className="px-32 mt-12 fw">
                          <Typography className="bold italic fw">
                            Nơi Nhận:
                          </Typography>
                          <Typography className="fw">Như điều 2</Typography>
                          <Typography className="fw">Lưu HS,VP</Typography>
                        </Box>
                        <Box className="px-32 fw">
                          <ConfirmLetter hidden={true} title={true} />
                          {salary?.salaryIncreaseStatus === 3 && (
                            <div className="mt-12 flex-center fw">
                              <span className="sign-text fw">
                                {employee?.leaderName}
                              </span>
                            </div>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </DialogContent>
              </TabPanel>
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <div className="text-center m-auto">
            {isManage ? (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  className="mr-12"
                  onClick={() => handleDialogApproved()}
                >
                  Phê duyệt
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="mr-12"
                  onClick={() => handleDialogAddRequest()}
                >
                  Yêu cầu bổ sung
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="mr-12"
                  onClick={() => handleDialogReasonRefusalDialog()}
                >
                  Từ chối
                </Button>
              </>
            ) : (
              !ACTION_PROCESS.MANAGE.includes(salary.salaryIncreaseStatus) && 
              (
                <Button
                  variant="contained"
                  color="primary"
                  type="button"
                  className="mr-12"
                  onClick={() => handleDialogSubmit()}
                >
                  Gửi lãnh đạo
                </Button>
              )
            )}

            <Button
              variant="contained"
              color="secondary"
              type="button"
              onClick={handleClose}
            >
              Hủy
            </Button>
          </div>
        </DialogActions>
      </Dialog>

      {showDialogSubmit && (
        <SendLeaderDialog
          t={t}
          open={showDialogSubmit}
          handleClose={handleDialogSubmitClose}
          handleCloseProfile={handleClose}
          employee={employee}
          salary={salary}
          isSalary={true}
        />
      )}

      {/* {showDialogApproved && (
        <ApprovalDialog
          t={t}
          open={showDialogApproved}
          handleClose={handleDialogApprovedClose}
          handleCloseProfile={handleClose}
          employee={employee}
          salary={salary}
          isSalary={true}
        />
      )}

      {showDialogAddRequest && (
        <AddRequestDialog
          t={t}
          open={showDialogAddRequest}
          handleClose={handleDialogAddRequestClose}
          handleCloseProfile={handleClose}
          employee={employee}
          isSalary={true}
          salary={salary}
        />
      )}

      {showDialogReasonRefusalDialog && (
        <ReasonRefusalDialog
          t={t}
          open={showDialogReasonRefusalDialog}
          handleClose={handleDialogReasonRefusalDialogClose}
          handleCloseProfile={handleClose}
          employee={employee}
          isSalary={true}
          salary={salary}
        />
      )} */}
    </div>
  );
};

export default SalaryInfoDialog;
