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
import { Grid } from "@material-ui/core";
import { getDayMonthYear, isMobile } from "utils";
import { ACTION_PROCESS, PROPOSAL } from "app/const/EmployeeConst";
import {
  addProposalByEmployee,
  updateProposalByEmployee,
} from "app/redux/actions/ProposalActions";
import { useDispatch } from "react-redux";
// import ApprovalDialog from "./ApprovalDialog";
// import AddRequestDialog from "./AddRequestDialog";
// import ReasonRefusalDialog from "./ReasonRefusalDialog";
import ConfirmLetter from "./ConfirmLetter";
import "../../../views/_form.scss";
import moment from "moment";
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

const ProposalInfoDialog = ({
  open,
  t,
  handleClose,
  employee,
  proposal,
  isManage,
}) => {
  const [showDialogApproved, setShowDialogApproved] = useState(false);
  const [showDialogAddRequest, setShowDialogAddRequest] = useState(false);
  const [showDialogReasonRefusalDialog, setShowDialogReasonRefusalDialog] =
    useState(false);
  const [showDialogSubmit, setShowDialogSubmit] = useState(false);

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
  const dispatch = useDispatch();

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
            <Grid item>Đề xuất tham mưu</Grid>
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
                <Tab label="Đơn xin đề xuất" {...a11yProps(0)} />
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
                            <Typography className="text-overflow fw bold">
                              CÔNG TY OCEANTECH
                            </Typography>
                          </div>
                          <Typography className="flex-center fw">
                            <b> Số {employee?.id}/ QĐ - TL</b>
                          </Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <div className="flex-center">
                            <Typography className="text-overflow fw bold">
                              CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM{" "}
                            </Typography>
                          </div>
                          <div className="flex-center">
                            <Typography className="text-overflow heading-underline fw bold">
                              Độc lập - Tự do - Hạnh phúc
                            </Typography>
                          </div>
                          <div className="flex-center fw bold">
                            <Typography className="text-overflow line-height-25 mt-32 fw italic">
                              Hà Nội, Ngày{" "}
                              {
                                moment(new Date(proposal?.proposalDate))
                                  .format("DD/MM/YYYY")
                                  .split("/")[0]
                              }{" "}
                              tháng{" "}
                              {
                                moment(new Date(proposal?.proposalDate))
                                  .format("DD/MM/YYYY")
                                  .split("/")[1]
                              }{" "}
                              năm{" "}
                              {
                                moment(new Date(proposal?.proposalDate))
                                  .format("DD/MM/YYYY")
                                  .split("/")[2]
                              }
                            </Typography>
                          </div>
                        </Grid>
                      </Grid>
                      <div className="flex-center fw">
                        <Typography className="text-overflow mt-32 mb-8 fw bold">
                          ĐƠN ĐỀ XUẤT
                        </Typography>
                      </div>
                      <Typography className="fw text-center">
                        {" "}
                        <b>Kính gửi:</b> - Ban giám đốc Công ty OCEANTECH
                      </Typography>
                      <Typography className="fw">
                        Tôi tên là <b>{employee?.name}</b>, hiện đang làm nhân
                        viên IT của Công ty OCEANTECH
                      </Typography>
                      <Typography className="fw">
                        Hôm nay tôi viết đơn này{" "}
                        <b>
                          {
                            PROPOSAL.find(
                              (item) => item.id === proposal?.type
                            )?.name
                          }
                        </b>
                      </Typography>
                      <Typography className="fw">
                        Trong quá trình làm việc tại Công ty OCEANTECH, tôi nhận
                        thấy đề xuất của tôi giúp cải thiện
                      </Typography>
                      <Typography className="fw">
                        {" "}
                        - Giúp cải thiện được năng xuất làm việc, tinh thần
                        thoải mái.
                      </Typography>
                      <Typography className="fw">
                        {" "}
                        - Tạo một không gian lành mạnh, cạnh tranh cao trong
                        công việc.
                      </Typography>
                      <Typography className="fw">
                        Tôi viết đơn này mong ban lãnh đạo Công ty OCEANTECH,
                        xem xét đề xuất của tôi.
                      </Typography>
                      <Typography className="fw">
                        Xin trân trọng cảm ơn!
                      </Typography>
                      <Box className="flex-between mt-32 fw">
                        <Box className="mt-12 fw">
                          <Typography className="fw bold italic">
                            Nơi Nhận:
                          </Typography>

                          <Typography className="fw">
                            Cơ quan, tổ chức, cá nhân liên quan
                          </Typography>
                          <Typography className="fw">Lưu HS,VP</Typography>
                        </Box>
                        <Box>
                          <ConfirmLetter employee={employee} hidden={true} />
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
          <div className="text-center m-auto ">
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
              !ACTION_PROCESS.MANAGE.includes(proposal.proposalStatus) && 
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
                Đóng
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
          proposal={proposal}
          isProposal={true}
        />
      )}

      {/* {showDialogApproved && (
        <ApprovalDialog
          t={t}
          open={showDialogApproved}
          handleClose={handleDialogApprovedClose}
          handleCloseProfile={handleClose}
          employee={employee}
          proposal={proposal}
          isProposal={true}
        />
      )}

      {showDialogAddRequest && (
        <AddRequestDialog
          t={t}
          open={showDialogAddRequest}
          handleClose={handleDialogAddRequestClose}
          handleCloseProfile={handleClose}
          employee={employee}
          isProposal={true}
          proposal={proposal}
        />
      )}

      {showDialogReasonRefusalDialog && (
        <ReasonRefusalDialog
          t={t}
          open={showDialogReasonRefusalDialog}
          handleClose={handleDialogReasonRefusalDialogClose}
          handleCloseProfile={handleClose}
          employee={employee}
          isProposal={true}
          proposal={proposal}
        />
      )} */}
    </div>
  );
};

export default ProposalInfoDialog;
