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
import { ACTION_PROCESS, LEADERSHIP, POSITIONS } from "app/const/EmployeeConst";
import {
  addPromoteByEmployee,
  updatePromoteByEmployee,
} from "app/redux/actions/PromoteActions";
import { useDispatch } from "react-redux";
import ApprovalDialog from "./ApprovalDialog";
import AddRequestDialog from "./AddRequestDialog";
import RefusalDialog from "./RefusalDialog";
import "../../../../app/views/_form.scss";

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

const PromoteInfoDialog = ({
  open,
  t,
  handleClose,
  employee,
  promote,
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
  console.log("promote", promote);
  console.log("employee", employee);
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
            <Grid item>Đề xuất thăng chức</Grid>
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
                <Tab label="Đơn xin thăng chức" {...a11yProps(0)} />
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
                            <b> Số {employee?.id}/ QĐ - BN</b>
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
                          <div className="flex-center mt-32 fw">
                            <Typography className="text-overflow line-height-25 fw italic">
                              Hà Nội, Ngày{" "}
                              {
                                moment(new Date(promote?.promotionDay))
                                  .format("DD/MM/YYYY")
                                  .split("/")[0]
                              }{" "}
                              tháng{" "}
                              {
                                moment(new Date(promote?.promotionDay))
                                  .format("DD/MM/YYYY")
                                  .split("/")[1]
                              }{" "}
                              năm{" "}
                              {
                                moment(new Date(promote?.promotionDay))
                                  .format("DD/MM/YYYY")
                                  .split("/")[2]
                              }
                            </Typography>
                          </div>
                        </Grid>
                      </Grid>
                      <Typography className="flex-center mt-32 fw bold">
                        QUYẾT ĐỊNH
                      </Typography>
                      <Typography className="flex-center pb-12 fw italic">
                        V/v thăng chức
                      </Typography>
                      <div className="fex-center">
                        <Typography className="text-overflow fw bold">
                          HỘI ĐỒNG THÀNH VIÊN CÔNG TY OCEANTECH
                        </Typography>
                      </div>
                      <Typography className="fw">
                        - Căn cứ Luật Doanh nghiệp 2020 và các văn bản hướng dẫn
                        thi hành;
                      </Typography>
                      <Typography className="fw">
                        - Căn cứ Điều lệ Công ty OCEANTECH;
                      </Typography>
                      <Typography className="fw">
                        - Căn cứ yêu cầu hoạt động sản xuất kinh doanh;
                      </Typography>
                      <Typography className="fw">
                        - Xét năng lực, phẩm chất và trình độ của Ông/Bà{" "}
                        <b>{employee?.name}</b>.
                      </Typography>
                      <Typography className="flex-center line-height-25 fw bold">
                        QUYẾT ĐỊNH
                      </Typography>
                      <Typography className="fw">
                        <b>Điều 1:</b> Bổ nhiệm chức danh{" "}
                        <b>
                          {
                            POSITIONS?.find(
                              (item) => item?.id === promote?.newPosition
                            )?.name
                          }
                        </b>{" "}
                        đối với:
                      </Typography>
                      <Typography className="fw">
                        - Ông/Bà: <b>{employee?.name}</b>. Giới tính:{" "}
                        {employee?.gender === 0 ? "Nữ" : "Nam"}
                      </Typography>
                      <Typography className="fw">
                        - Sinh ngày:{" "}
                        {moment(new Date(employee?.dateOfBirth)).format(
                          "DD/MM/YYYY"
                        )}
                        . Dân tộc: {employee?.religion}. Tôn giáo:{" "}
                        {employee?.ethnic}
                      </Typography>
                      <Typography className="fw">
                        - Số chứng minh nhân dân/Thẻ căn cước công dân:{" "}
                        {employee?.citizenIdentificationNumber}. Nơi cấp:{" "}
                        {employee?.placeOfIssueCard} Ngày cấp:{" "}
                        {moment(new Date(employee?.dateOfIssuanceCard)).format(
                          "DD/MM/YYYY"
                        )}
                      </Typography>
                      <Typography className="fw">
                        - Nơi đăng ký hộ khẩu thường trú: {employee?.address}
                      </Typography>
                      <Typography className="fw">
                        - Nơi ở hiện tại: {employee?.address}
                      </Typography>
                      <Typography className="fw">
                        <b>Điều 2: </b>Quyền và nghĩa vụ
                      </Typography>
                      <Typography className="fw">
                        - Thực hiện quyền và nghĩa vụ của cấp bậc được bổ nhiệm
                        theo quy định của công ty
                      </Typography>
                      <Typography className="fw">
                        <b>Điều 3: </b>Hiệu lực thi hành
                      </Typography>
                      <Typography className="fw">
                        - Ông/Bà có tên tại Điều 1 và các cơ quan, tổ chức, cá
                        nhân liên quan chịu trách nhiệm thi hành quyết định này.
                      </Typography>
                      <Typography className="fw">
                        Quyết định có hiệu lực kể từ ngày ký.
                      </Typography>
                      <Box className="flex-between mt-32 fw">
                        <Box>
                          <Typography className="fw bold italic">
                            Nơi Nhận:
                          </Typography>
                          <Typography className="fw">
                            Ông/Bà:
                            {
                              <b>
                                {
                                  LEADERSHIP?.find(
                                    (item) => item?.id === promote?.leaderId
                                  )?.leaderName
                                }
                              </b>
                            }
                          </Typography>
                          <Typography className="fw">
                            Cơ quan, tổ chức, cá nhân liên quan
                          </Typography>
                          <Typography className="fw">Lưu HS,VP</Typography>
                        </Box>
                        <Box>
                          <Typography className="flex-center fw blod">
                            TM. HỘI ĐỒNG THÀNH VIÊN
                          </Typography>
                          <Typography className="flex-center fw bold">
                            Chủ tịch Hội đồng thành viên
                          </Typography>
                          <Typography className="flex-center fw italic">
                            (Ký tên, đóng dấu)
                          </Typography>
                          {promote?.processStatus === "3" && (
                            <div className="mt-32 flex-center">
                              <span className="sign-text ">
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
              !ACTION_PROCESS.MANAGE.includes(promote.processStatus) && (
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
          promote={promote}
          isPromote={true}
        />
      )}

      {showDialogApproved && (
        <ApprovalDialog
          t={t}
          open={showDialogApproved}
          handleClose={handleDialogApprovedClose}
          handleCloseProfile={handleClose}
          employee={employee}
          promote={promote}
          isPromote={true}
        />
      )}

      {showDialogAddRequest && (
        <AddRequestDialog
          t={t}
          open={showDialogAddRequest}
          handleClose={handleDialogAddRequestClose}
          handleCloseProfile={handleClose}
          employee={employee}
          isPromote={true}
          promote={promote}
        />
      )}

      {showDialogReasonRefusalDialog && (
        <RefusalDialog
          t={t}
          open={showDialogReasonRefusalDialog}
          handleClose={handleDialogReasonRefusalDialogClose}
          handleCloseProfile={handleClose}
          employee={employee}
          isPromote={true}
          promote={promote}
        />
      )}
    </div>
  );
};

export default PromoteInfoDialog;
