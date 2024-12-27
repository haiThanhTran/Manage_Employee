import { Button, Grid, Icon, IconButton, MenuItem } from "@material-ui/core";
import { salaryColumn } from "../../../component/Column";
import CustomTable from "../../../component/CustomTable";
import { ACTION_PROCESS, LEADERSHIP } from "../../../const/EmployeeConst";
import { Notifications, Visibility } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useDispatch, useSelector } from "react-redux";
import {
  addSalaryByEmployee,
  deleteSalaryByEmployee,
  getSalaryByEmployee,
  updateSalaryByEmployee,
} from "../../../redux/actions/SalaryAction";
import { convertTimeToDate, getOldSalary } from "../../../const/utils";
import { ConfirmationDialog, ShowDialog } from "egret";
// import { getLeader } from "app/redux/actions/LeaderActions";
import SalaryInfoDialog from "../../LeaderWaiting/LeaderDialog/SalaryInfoDialog";
import moment from "moment";

function Salary(props) {
  const { employee, listLeader, isManage, isEnd } = props;
  const currentEmployee = employee?.data;
  const currentEmployeeLeaderId = employee?.data?.leaderId;
  const currentEmployeeId = employee?.data?.id;
  const { salaryByEmployee, success } = useSelector((state) => state.salary);
  console.log("currentEmployee", currentEmployee);
  const [salary, setSalary] = useState({
    startDate: moment().format("YYYY-MM-DD"),
    reason: "",
    note: "",
    oldSalary: getOldSalary(salaryByEmployee),
    newSalary: 0,
    leaderId: currentEmployeeLeaderId,
    employeeId:currentEmployeeId
  });
  console.log("currentEmployee", currentEmployee);
  const [shouldOpenConfirmationDialog, setShouldOpenConfirmationDialog] =
    useState(false);
  const [id, setId] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [showNotify, setShowNotify] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    currentEmployee?.id && dispatch(getSalaryByEmployee(currentEmployee?.id));
  }, [currentEmployee?.id, success]);

  const handleChangInput = (e) => {
    setSalary({ ...salary, [e.target.name]: e.target.value });
  };

  const handleDialogOpen = (employee) => {
    setSalary(employee);
  };

  const handleDialogClose = () => {
    setSalary({});
    setShowDialog(false);
  };

  const handleDialogDelete = (salary) => {
    setShouldOpenConfirmationDialog(true);
    setId(salary?.id);
  };

  const handleDialogDeleteClose = () => {
    setShouldOpenConfirmationDialog(false);
    setId(null);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteSalaryByEmployee(id));
    handleDialogDeleteClose();
  };

  const handleViewSalary = (salary) => {
    setShowDialog(true);
    salary && setSalary(salary);
  };

  const handleCancel = () => {
    setSalary({});
  };

  const handleNotifyDialog = (salary) => {
    setShowNotify(true);
    setSalary(salary);
  };
  const handleCloseNotify = () => {
    setShowNotify(false);
    setSalary({});
  };
  const handleSubmit = () => {
    if (salary?.leaderId) {
      handleViewSalary(salary);
      dispatch(updateSalaryByEmployee(salary));
    } else {
      if (salary?.id) {
        dispatch(
          updateSalaryByEmployee({
            ...salary,
            leaderId: salary.leaderId || currentEmployee?.leaderId,
          })
        );

    } else {
      dispatch(
        addSalaryByEmployee({
          id: currentEmployee?.id,
          data: [{ oldSalary: salary?.oldSalary || 0, ...salary }],
        })
      );
    }
      handleDialogClose();
    }
    setShowDialog(true);
  };

  const data = isManage
    ? salaryByEmployee?.filter((item) =>
        ACTION_PROCESS.MANAGE.includes(item?.salaryIncreaseStatus)
      )
    : salaryByEmployee;
  const columns = salaryColumn((rowData) => (
    <div>
      {ACTION_PROCESS.EDIT.includes(rowData.salaryIncreaseStatus) && (
        <IconButton
          fontSize="small"
          color="primary"
          onClick={() => handleDialogOpen(rowData)}
        >
          <Icon>edit</Icon>
        </IconButton>
      )}

      {ACTION_PROCESS.DELETE.includes(rowData.salaryIncreaseStatus) && (
        <IconButton
          fontSize="small"
          color="error"
          onClick={() => handleDialogDelete(rowData)}
        >
          <Icon color="error">delete</Icon>
        </IconButton>
      )}

      
        <IconButton
          fontSize="small"
          color="secondary"
          onClick={() => handleViewSalary(rowData)}
        >
          <Icon>
            <Visibility />
          </Icon>
        </IconButton>
      

      {ACTION_PROCESS.NOTIFY.includes(rowData.salaryIncreaseStatus) && (
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
        <ValidatorForm key={salary?.id || "new"} onSubmit={handleSubmit}>
          <Grid container spacing={2} xs={12}>
            <Grid item xs={4}>
              <TextValidator
                variant="outlined"
                disabled={isEnd ? "disabled" : ""}
                label={
                  <span>
                    <span className="text-error">*</span>
                    Ngày tăng lương
                  </span>
                }
                type="date"
                value={
                  salary?.startDate
                    ? moment(salary?.startDate).format("YYYY-MM-DD")
                    : ""
                }
                onChange={handleChangInput}
                className="w-100"
                InputLabelProps={{
                  shrink: true,
                }}
                name="startDate"
                validators={["required"]}
                errorMessages={["Vui lòng chọn ngày"]}
              />
            </Grid>
            <Grid item xs={4}>
              <TextValidator
                variant="outlined"
                disabled={isEnd ? "disabled" : ""}
                label={
                  <span>
                    <span className="text-error">*</span>
                    Lương cũ
                  </span>
                }
                value={
                  getOldSalary(salaryByEmployee) || salary?.oldSalary || 0
                }
                inputProps={{
                  readOnly:
                    salary?.oldSalary && salary?.salaryIncreaseStatus === "4",
                }}
                onChange={handleChangInput}
                disabled
                className="w-100 "
                name="oldSalary"
                validators={["required", "matchRegexp:^\\d*$"]}
                errorMessages={["Không để trống", "Vui lòng nhập số"]}
              />
            </Grid>
            <Grid item xs={4}>
              <TextValidator
                variant="outlined"
                disabled={isEnd ? "disabled" : ""}
                label={
                  <span>
                    <span className="text-error">*</span>
                    Lương mới
                  </span>
                }
                value={salary?.newSalary || ""}
                onChange={handleChangInput}
                className="w-100 "
                name="newSalary"
                validators={[
                  "required",
                  "matchRegexp:^\\d*$",
                  `minNumber:${salary?.oldSalary || 0}`,
                ]}
                errorMessages={[
                  "Không để trống",
                  "Vui lòng nhập số",
                  "Lương mới phải lớn hơn lương cũ",
                ]}
              />
            </Grid>

            <Grid item xs={4}>
              <TextValidator
                variant="outlined"
                disabled={isEnd ? "disabled" : ""}
                label={
                  <span>
                    <span className="text-error">*</span>
                    Lý do
                  </span>
                }
                value={salary?.reason || ""}
                onChange={handleChangInput}
                className="w-100 "
                name="reason"
                validators={["required"]}
                errorMessages={["Vui lòng nhập lý do"]}
              />
            </Grid>
            <Grid item xs={4}>
              <TextValidator
                variant="outlined"
                disabled={isEnd ? "disabled" : ""}
                label={
                  <span>
                    <span className="text-error">*</span>
                    Ghi chú
                  </span>
                }
                value={salary?.note || ""}
                onChange={handleChangInput}
                className="w-100 "
                name="note"
                validators={["required"]}
                errorMessages={["Vui lòng nhập ghi chú"]}
              />
            </Grid>
            {/* {salary?.id && (
              <Grid item xs={7}>
                <TextValidator
                  variant="outlined"
                  disabled={isEnd ? "disabled" : ""}
                  label={<span> Trình lãnh đạo</span>}
                  select
                  value={salary?.leaderId || ""}
                  onChange={handleChangInput}
                  className="w-100"
                  name="leaderId"
                >
                  {LEADERSHIP?.map((item, index) => {
                    return (
                      <MenuItem value={item.id} key={item.id}>
                        {item.leaderName}
                      </MenuItem>
                    );
                  })}
                </TextValidator>
              </Grid>
            )} */}
            <Grid item xs={salary?.id ? 3 : 2} className="text-center mt-auto">
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
                onClick={() => handleCancel()}
                disabled={isEnd ? "disabled" : ""}
              >
                Hủy
              </Button>
            </Grid>
          </Grid>
        </ValidatorForm>
      )}
      <div className="pt-20">
        <CustomTable data={data} columns={columns} />
      </div>
      {showDialog && (
        <SalaryInfoDialog
          open={showDialog}
          handleClose={handleDialogClose}
          employee={currentEmployee}
          salary={salary}
        />
      )}

      {showNotify && (
        <ShowDialog
          onConfirmDialogClose={handleCloseNotify}
          open={showNotify}
          text={
            salary?.salaryIncreaseStatus === 4
              ? salary?.additionalRequest || "Không có"
              : salary?.reasonForRefusal || "Không có"
          }
          title={
            salary?.salaryIncreaseStatus === 4
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
}

export default Salary;
