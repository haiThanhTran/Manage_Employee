import { Button, Grid, Icon, IconButton, MenuItem } from "@material-ui/core";
import { promoteColumn } from "../../../component/Column";
import CustomTable from "app/component/CustomTable";
import { ACTION_PROCESS, POSITIONS } from "app/const/EmployeeConst";
import { Notifications, Visibility } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useDispatch, useSelector } from "react-redux";
import {
  addPromoteByEmployee,
  deletePromoteByEmployee,
  getPromoteByEmployee,
  updatePromoteByEmployee,
} from "app/redux/actions/PromoteActions";

import { ConfirmationDialog, ShowDialog } from "egret";
import { getLeader } from "app/redux/actions/LeaderActions";
import PromoteInfoDialog from "../../LeaderWaiting/LeaderDialog/PromoteInfoDialog";
import moment from "moment";

const Promote = ({ t, currentEmployee, listLeader, isManage, isEnd }) => {
  const employee = currentEmployee.data;
  const [promote, setPromote] = useState({
    promotionDay: moment().format("YYYY-MM-DD"),
  });
  const [shouldOpenConfirmationDialog, setShouldOpenConfirmationDialog] =
    useState(false);
  const [id, setId] = useState(null);
  const { promoteByEmployee, success } = useSelector((state) => state.promote);
  const [showPromote, setShowPromote] = useState(false);
  const [showNotify, setShowNotify] = useState(false);
  const dispatch = useDispatch();
  console.log("employee", employee);
  useEffect(() => {
    employee?.id && dispatch(getPromoteByEmployee(employee?.id));
  }, [employee?.id]);

  useEffect(() => {
    dispatch(getLeader());
  }, []);

  const handleChangInput = (e) => {
    setPromote({ ...promote, [e.target.name]: e.target.value });
  };

  const handleDialogOpen = (employee) => {
    setPromote(employee);
  };

  const handleDialogClose = () => {
    setShowPromote(false);
    setPromote({ promotionDay: moment().format("YYYY-MM-DD") });
  };

  const handleDialogDelete = (promote) => {
    setShouldOpenConfirmationDialog(true);
    setId(promote?.id);
  };

  const handleDialogDeleteClose = () => {
    setShouldOpenConfirmationDialog(false);
    setId(null);
  };

  const handleConfirmDelete = () => {
    dispatch(deletePromoteByEmployee(id));
    handleDialogDeleteClose();
  };

  const handleViewPromote = (promote) => {
    setShowPromote(true);
    promote && setPromote(promote);
  };

  const handleCancel = () => {
    setPromote({ promotionDay: moment().format("YYYY-MM-DD") });
  };

  const handleNotifyDialog = (promote) => {
    setShowNotify(true);
    setPromote(promote);
  };
  const handleCloseNotify = () => {
    setShowNotify(false);
    setPromote({ promotionDay: moment().format("YYYY-MM-DD") });
  };
  const handleSubmit = () => {
    handleViewPromote();
    if (promote?.id) {
      dispatch(updatePromoteByEmployee(promote));
    } else {
      dispatch(
        addPromoteByEmployee({
          id: employee?.id,
          data: [
            { currentPosition: promote?.currentPosition || 9, ...promote },
          ],
        })
      );
    }
  };
  const data = isManage
    ? promoteByEmployee?.filter((item) =>
        ACTION_PROCESS.MANAGE.includes(item?.processStatus)
      )
    : promoteByEmployee;
  const columns = promoteColumn((rowData) => (
    <div>
      {ACTION_PROCESS.EDIT.includes(rowData.processStatus) && (
        <IconButton
          fontSize="small"
          color="primary"
          onClick={() => handleDialogOpen(rowData)}
        >
          <Icon>edit</Icon>
        </IconButton>
      )}

      {ACTION_PROCESS.DELETE.includes(rowData.processStatus) && (
        <IconButton
          fontSize="small"
          color="error"
          onClick={() => handleDialogDelete(rowData)}
        >
          <Icon color="error">delete</Icon>
        </IconButton>
      )}

      {ACTION_PROCESS.VIEW.includes(rowData.processStatus) && (
        <IconButton
          fontSize="small"
          color="secondary"
          onClick={() => handleViewPromote(rowData)}
        >
          <Icon>
            <Visibility />
          </Icon>
        </IconButton>
      )}

      {ACTION_PROCESS.NOTIFY.includes(rowData.processStatus) && (
        <IconButton
          fontSize="small"
          color="secondary"
          onClick={() => handleNotifyDialog(rowData)}
        >
          <Notifications />
        </IconButton>
      )}
    </div>
  ));
  return (
    <div>
      {!isManage && (
        <ValidatorForm onSubmit={handleSubmit}>
          <Grid container spacing={2} xs={12}>
            <Grid item xs={2}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                    Ngày thăng chức
                  </span>
                }
                type="date"
                value={
                  promote?.promotionDay
                    ? moment(promote?.promotionDay).format("YYYY-MM-DD")
                    : moment().format("YYYY-MM-DD")
                }
                disabled={isEnd ? "disabled" : ""}
                variant="outlined"
                onChange={handleChangInput}
                className="w-100"
                InputLabelProps={{
                  shrink: true,
                }}
                name="promotionDay"
                validators={["required"]}
                errorMessages={["Vui lòng chọn ngày thăng chức"]}
              />
            </Grid>
            <Grid item xs={2}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                    Vị trí hiện tại
                  </span>
                }
                value={
                  POSITIONS.find((item) => item.id === promote?.currentPosition)
                    ?.name || POSITIONS.find((item) => item.id === 9)?.name
                }
                variant="outlined"
                disabled
                className="w-100 "
                name="currentPosition"
              />
            </Grid>
            <Grid item xs={2}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                    Vị trí mới
                  </span>
                }
                value={promote?.newPosition || ""}
                disabled={isEnd ? "disabled" : ""}
                variant="outlined"
                select
                onChange={handleChangInput}
                className="w-100 "
                name="newPosition"
                validators={["required"]}
                errorMessages={["Vui lòng chọn vị trí mới"]}
              >
                {POSITIONS?.map((item, index) => {
                  return (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </TextValidator>
            </Grid>

            <Grid item xs={4}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                    Ghi chú
                  </span>
                }
                value={promote?.note || ""}
                disabled={isEnd ? "disabled" : ""}
                variant="outlined"
                onChange={handleChangInput}
                className="w-100 "
                name="note"
                validators={["required"]}
                errorMessages={["Vui lòng nhập ghi chú"]}
              />
            </Grid>
            <Grid item xs={2} className="text-center mt-auto">
              <Button
                variant="contained"
                color="primary"
                className="mr-10"
                type="submit"
                disabled={isEnd ? "disabled" : ""}
              >
                Lưu
              </Button>
              <Button
                variant="contained"
                color="secondary"
                type="button"
                disabled={isEnd ? "disabled" : ""}
                onClick={() => handleCancel()}
              >
                Hủy
              </Button>
            </Grid>
          </Grid>
        </ValidatorForm>
      )}
      <div className="pt-20">
        <CustomTable data={data} t={t} columns={columns} />
      </div>
      {showPromote && (
        <PromoteInfoDialog
          open={showPromote}
          t={t}
          handleClose={handleDialogClose}
          employee={employee}
          promote={promote}
        />
      )}

      {showNotify && (
        <ShowDialog
          onConfirmDialogClose={handleCloseNotify}
          open={showNotify}
          text={
            promote?.processStatus === 4
              ? promote?.additionalRequest || "Không có"
              : promote?.reasonForRefusal || "Không có"
          }
          title={
            promote?.processStatus === 4
              ? "Nội dung yêu cầu bổ sung"
              : "Lý do từ chối"
          }
        />
      )}

      {shouldOpenConfirmationDialog && (
        <ConfirmationDialog
          title={"Xác nhận"}
          open={shouldOpenConfirmationDialog}
          onConfirmDialogClose={handleDialogDeleteClose}
          onYesClick={handleConfirmDelete}
          text={"Bạn có chắc chắn muốn xóa"}
          Yes={"Xóa"}
          No={"Hủy"}
        />
      )}
    </div>
  );
};

export default Promote;
