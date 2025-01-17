import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Input,
  Tab,
  Tabs,
} from "@material-ui/core";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import { Grid, TextField, TextareaAutosize } from "@material-ui/core";
import { getDayMonthYear, isMobile } from "../../../const/utils";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployee } from "app/redux/actions/EmployeeActions";
import SendLeaderDialog from "../../ManageEmployee/SendLeader/sendLeaderDialog";
import AddRequestDialog from "./AddRequestDialog";
import RefusalDialog from "./RefusalDialog";
import ConfirmLetter from "./ConfirmLetter";
// import "styles/views/_Resignation.scss";
import moment from "moment";
import { POSITIONS } from "app/const/EmployeeConst";
import { TabPanel, a11yProps } from "app/component/CustomTab";
import "../../../views/_form.scss";
import ApprovalDialog from "./ApprovalDialog";

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

const ResignationLetter = ({
  t,
  open,
  handleClose,
  employee,
  isManage,
  handleDialogEmployeeClose,
  isEnd,
  searchEmployee,
}) => {
  const [showDialogApproved, setShowDialogApproved] = useState(false);
  const [showDialogSubmit, setShowDialogSubmit] = useState(false);
  const [showDialogAddRequest, setShowDialogAddRequest] = useState(false);
  const [showDialogReasonRefusalDialog, setShowDialogReasonRefusalDialog] =
    useState(false);
  const [content, setContent] = useState({});
  const [line, setLine] = useState([]);
  const [isRegister, setIsRegister] = useState(true);


  useEffect(() => {
    setContent({
      ...employee?.data,
      reasonForEnding: ` ${
        employee?.data?.reasonForEnding
          ? employee?.data?.reasonForEnding
          : "Lý do xin nghỉ"
      }`,
    });
  }, [employee]);

  useEffect(() => {
    setLine(content?.reasonForEnding?.split("\n"));
  }, [content.reasonForEnding]);


  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDialogSubmit = () => {
    setShowDialogSubmit(true);
  };
  const handleDialogSubmitClose = () => {
    setShowDialogSubmit(false);
  };

  const handleDialogApproved = async () => {

    const updateData = { ...content, submitProfileStatus: 7 };
    await dispatch(updateEmployee(content.id, updateData));
    await searchEmployee();
    handleClose();
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

  const handleChangInput = (e, field) => {
    switch (field) {
      case "reasonForEnding": {
        if (!e.target.value.startsWith("Lý do xin nghỉ: ")) {
          setContent({
            ...content,
            reasonForEnding: "Lý do xin nghỉ: ",
          });
        } else {
          setContent({
            ...content,
            reasonForEnding: e.target.value,
          });
        }

        break;
      }
      default: {
        setContent({
          ...content,
          [field]: e.target.value,
        });
        break;
      }
    }
  };

  return (
    <div>
      {!isEnd ? (
        <Dialog
          onClose={handleClose}
          open={open}
          maxWidth={"lg"}
          fullWidth={true}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            <Grid container justify="space-between" alignItems="center">
              <Grid item>Đơn xin nghỉ việc</Grid>
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
                  <Tab label="Đơn xin nghỉ việc" {...a11yProps(0)} />
                </Tabs>
              </Grid>
              <Grid xs={10}>
                <TabPanel value={0} index={0} className="tabPanel">
                  <DialogContent dividers className="wrapper-a4 mh-70">
                    <Box className="A4">
                      <Box className="A4-content text-justify">
                        <Typography className="flex-center fw bold">
                          CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                        </Typography>
                        <Typography
                          fontWeight="bold"
                          className="flex-center heading-underline fw"
                        >
                          Độc lập - Tự do - Hạnh phúc
                        </Typography>
                        <Typography className="flex-center mt-32 fw bold">
                          ĐƠN XIN NGHỈ VIỆC
                        </Typography>
                        <Typography className="mt-32 fw text-center">
                          Kính gửi: Ban Giám đốc công ty <b>OCEANTECH</b>
                        </Typography>
                        <Typography className="fw">
                          Tên tôi là: <b>{content?.name}</b>
                        </Typography>
                        <Typography className="fw">
                          Hiện tại đang là{" "}
                          {
                            POSITIONS?.find(
                              (position) =>
                                position?.id === (content?.currentPosition ?? 1)
                            )?.name
                          }{" "}
                          tại công ty OCEANTECH<b></b>
                        </Typography>
                        <Typography className="fw">
                          Tôi làm đơn này, đề nghị Ban Gián đốc cho tôi xin nghỉ
                          việc từ ngày{" "}
                          {
                            moment(
                              new Date(
                                content?.endDay
                                  ? content?.endDay
                                  : content?.endDay
                              )
                            )
                              .format("DD/MM/YYYY")
                              .split("/")[0]
                          }{" "}
                          tháng{" "}
                          {
                            moment(
                              new Date(
                                content?.endDay
                                  ? content?.endDay
                                  : content?.endDay
                              )
                            )
                              .format("DD/MM/YYYY")
                              .split("/")[1]
                          }{" "}
                          năm{" "}
                          {
                            moment(
                              new Date(
                                content?.endDay
                                  ? content?.endDay
                                  : content?.endDay
                              )
                            )
                              .format("DD/MM/YYYY")
                              .split("/")[2]
                          }
                          .
                          {isRegister && (
                            <>
                              <Input
                                id="icon-button-date"
                                className="mr-4 ml-4 fw"
                                style={{ width: "20px" }}
                                type="date"
                                inputProps={{
                                  min: moment().format("YYYY-MM-DD"),
                                  width: "20",
                                }}
                                name="endDay"
                                value={content?.endDay || ""}
                                onChange={(e) => handleChangInput(e, "endDay")}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                              <span style={{ color: "red" }}> * </span>
                            </>
                          )}
                          <br></br>
                          {!isRegister &&
                            `Nghỉ vì lý do : ${content?.reasonForEnding}`}
                          {isRegister && (
                            <div className="relative fw">
                              <span
                                style={{
                                  position: "absolute",
                                  top: `0`,
                                  backgroundColor: "white",
                                  zIndex: "1001",
                                  transform: "translateY(-2px)",
                                }}
                              >
                                Lý do xin nghỉ:{" "}
                              </span>
                              <Input
                                className="no-padding custom-input fw"
                                name="reasonForEnding"
                                multiline
                                value={content?.reasonForEnding || ""}
                                onChange={(e) =>
                                  handleChangInput(e, "reasonForEnding")
                                }
                                style={{
                                  fontFamily: "Times New Roman",
                                  fontSize: "16px",
                                  display: "block",
                                  position: "relative",
                                  zIndex: "1000",
                                  width: "100%",
                                  outline: "unset",
                                }}
                              ></Input>
                              {line?.map((item, index) => (
                                <span
                                  style={{
                                    position: "absolute",
                                    top: `${(1 / line.length) * 100 * index}%`,
                                    right: "0",
                                    left: "0",
                                    width: "100%",
                                    height: line
                                      ? `${(1 / line.length) * 100}%`
                                      : "100%",
                                    borderBottom: "1px dashed",
                                    transform: "translateY(-2px)",
                                  }}
                                ></span>
                              ))}
                            </div>
                          )}
                        </Typography>
                        <Typography className="pb-12 fw">
                          Trong thời gian chờ đợi sự chấp thuận của Ban Giám đốc
                          Công ty, tôi sẽ tiếp tục làm việc nghiêm túc và tiến
                          hành bàn giao công việc cũng như tài sản cho người
                          quản lý trực tiếp của tôi là ông/bà{" "}
                          <b>{employee?.leaderName}</b>
                          <br />
                          Tôi xin chân thành cảm ơn!
                        </Typography>
                        <Typography></Typography>
                        <Grid container className="mt-12 fw">
                          <Grid item xs={6}></Grid>
                          <Grid item xs={6}>
                            <ConfirmLetter
                              employee={employee}
                              day={
                                moment(
                                  new Date(
                                    content?.endDay
                                      ? content?.endDay
                                      : content?.endDay
                                  )
                                )
                                  .format("DD/MM/YYYY")
                                  .split("/")[0]
                              }
                              year={
                                moment(
                                  new Date(
                                    content?.endDay
                                      ? content?.endDay
                                      : content?.endDay
                                  )
                                )
                                  .format("DD/MM/YYYY")
                                  .split("/")[2]
                              }
                              month={
                                moment(
                                  new Date(
                                    content?.endDay
                                      ? content?.endDay
                                      : content?.endDay
                                  )
                                )
                                  .format("DD/MM/YYYY")
                                  .split("/")[1]
                              }
                            />
                          </Grid>
                        </Grid>
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
                <Button
                  variant="contained"
                  color="primary"
                  type="button"
                  className="mr-12"
                  onClick={() => handleDialogSubmit()}
                >
                  Gửi lãnh đạo
                </Button>
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
      ) : (
        <div>
          <DialogContent dividers className="wrapper-a4 mh-70">
            <Box className="A4">
              <Box className="A4-content text-justify">
                <Typography className="flex-center fw bold">
                  CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                </Typography>
                <Typography
                  fontWeight="bold"
                  className="flex-center heading-underline fw"
                >
                  Độc lập - Tự do - Hạnh phúc
                </Typography>
                <Typography className="flex-center mt-32 fw bold">
                  ĐƠN XIN NGHỈ VIỆC
                </Typography>
                <Typography className="mt-32 fw text-center">
                  Kính gửi: Ban Giám đốc công ty <b>OCEANTECH</b>
                </Typography>
                <Typography className="fw">
                  Tên tôi là: <b>{content?.name}</b>
                </Typography>
                <Typography className="fw">
                  Hiện tại đang là{" "}
                  {
                    POSITIONS?.find(
                      (position) =>
                        position?.id === (content?.currentPosition ?? 1)
                    )?.name
                  }{" "}
                  tại công ty OCEANTECH<b></b>
                </Typography>
                <Typography className="fw">
                  Tôi làm đơn này, đề nghị Ban Gián đốc cho tôi xin nghỉ việc từ
                  ngày{" "}
                  {
                    moment(
                      new Date(
                        content?.endDay ? content?.endDay : content?.endDay
                      )
                    )
                      .format("DD/MM/YYYY")
                      .split("/")[0]
                  }{" "}
                  tháng{" "}
                  {
                    moment(
                      new Date(
                        content?.endDay ? content?.endDay : content?.endDay
                      )
                    )
                      .format("DD/MM/YYYY")
                      .split("/")[1]
                  }{" "}
                  năm{" "}
                  {
                    moment(
                      new Date(
                        content?.endDay ? content?.endDay : content?.endDay
                      )
                    )
                      .format("DD/MM/YYYY")
                      .split("/")[2]
                  }
                  .
                  {isRegister && (
                    <>
                      <Input
                        id="icon-button-date"
                        className="mr-4 ml-4 fw"
                        style={{ width: "20px" }}
                        type="date"
                        inputProps={{
                          min: moment().format("YYYY-MM-DD"),
                          width: "20",
                        }}
                        name="endDay"
                        value={content?.endDay || ""}
                        onChange={(e) => handleChangInput(e, "endDay")}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <span style={{ color: "red" }}> * </span>
                    </>
                  )}
                  <br></br>
                  {!isRegister && `Nghỉ vì lý do : ${content?.reasonForEnding}`}
                  {isRegister && (
                    <div className="relative fw">
                      <span
                        style={{
                          position: "absolute",
                          top: `0`,
                          backgroundColor: "white",
                          zIndex: "1001",
                          transform: "translateY(-2px)",
                        }}
                      >
                        Lý do xin nghỉ:{" "}
                      </span>
                      <Input
                        className="no-padding custom-input fw"
                        name="reasonForEnding"
                        multiline
                        value={content?.reasonForEnding || ""}
                        onChange={(e) => handleChangInput(e, "reasonForEnding")}
                        style={{
                          fontFamily: "Times New Roman",
                          fontSize: "16px",
                          display: "block",
                          position: "relative",
                          zIndex: "1000",
                          width: "100%",
                          outline: "unset",
                        }}
                      ></Input>
                      {line?.map((item, index) => (
                        <span
                          style={{
                            position: "absolute",
                            top: `${(1 / line.length) * 100 * index}%`,
                            right: "0",
                            left: "0",
                            width: "100%",
                            height: line
                              ? `${(1 / line.length) * 100}%`
                              : "100%",
                            borderBottom: "1px dashed",
                            transform: "translateY(-2px)",
                          }}
                        ></span>
                      ))}
                    </div>
                  )}
                </Typography>
                <Typography className="pb-12 fw">
                  Trong thời gian chờ đợi sự chấp thuận của Ban Giám đốc Công
                  ty, tôi sẽ tiếp tục làm việc nghiêm túc và tiến hành bàn giao
                  công việc cũng như tài sản cho người quản lý trực tiếp của tôi
                  là ông/bà <b>{employee?.leaderName}</b>
                  <br />
                  Tôi xin chân thành cảm ơn!
                </Typography>
                <Typography></Typography>
                <Grid container className="mt-12 fw">
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <ConfirmLetter
                      employee={employee}
                      day={
                        moment(
                          new Date(
                            content?.endDay ? content?.endDay : content?.endDay
                          )
                        )
                          .format("DD/MM/YYYY")
                          .split("/")[0]
                      }
                      year={
                        moment(
                          new Date(
                            content?.endDay ? content?.endDay : content?.endDay
                          )
                        )
                          .format("DD/MM/YYYY")
                          .split("/")[2]
                      }
                      month={
                        moment(
                          new Date(
                            content?.endDay ? content?.endDay : content?.endDay
                          )
                        )
                          .format("DD/MM/YYYY")
                          .split("/")[1]
                      }
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </DialogContent>

          {!isEnd && (
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
                  <Button
                    variant="contained"
                    color="primary"
                    type="button"
                    className="mr-12"
                    onClick={() => handleDialogSubmit()}
                  >
                    Gửi lãnh đạo
                  </Button>
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
          )}
        </div>
      )}

      {showDialogSubmit && (
        <SendLeaderDialog
          t={t}
          open={showDialogSubmit}
          handleClose={handleDialogSubmitClose}
          employee={employee}
          content={content}
          handleDialogEmployeeClose={handleDialogEmployeeClose}
          isEnd={isEnd}
        />
      )}
      {showDialogAddRequest && (
        <AddRequestDialog
          t={t}
          open={showDialogAddRequest}
          handleClose={handleDialogAddRequestClose}
          handleCloseProfile={handleClose}
          currentEmployee={employee}
          isEnd={true}
          searchEmployee={searchEmployee}
        />
      )}

      {showDialogReasonRefusalDialog && (
        <RefusalDialog
          t={t}
          open={showDialogReasonRefusalDialog}
          handleClose={handleDialogReasonRefusalDialogClose}
          handleCloseProfile={handleClose}
          currentEmployee={employee}
          isEnd={true}
          searchEmployee={searchEmployee}

        />
      )}
    </div>
  );
};

export default ResignationLetter;
