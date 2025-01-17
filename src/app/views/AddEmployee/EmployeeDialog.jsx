import React, { useState, useEffect, useRef } from "react";
import {
  Grid,
  Button,
  Dialog,
  MenuItem,
  IconButton,
  Icon,
  Box,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import {
  createEmployee,
  updateEmployee,
  getEmployeeById,
} from "../../redux/actions/EmployeeActions";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
import { toast } from "react-toastify";
import { ConfirmationDialog } from "egret";
import MaterialTable from "material-table";
import MuiDialogActions from "@material-ui/core/DialogActions";
import EmployeeTab from "./AddEmployeeTabs/EmployeeTab";
import CertificateTab from "./AddEmployeeTabs/CertificateTab";
import FamilyTab from "./AddEmployeeTabs/FamilyTab";
import ProfileEmployeeDialog from "../ProfileEmployee/ProfileEmployeeDialog";

import {
  ValidatorForm,
  SelectValidator,
  TextValidator,
} from "react-material-ui-form-validator";
import "react-toastify/dist/ReactToastify.css";
import {
  TAB_CERTIFICATE,
  TAB_EMPLOYEE,
  TAB_FAMILY,
} from "../../const/EmployeeConst";
import { TabPanel, a11yProps } from "../../component/CustomTab";
import { useDispatch, useSelector } from "react-redux";
import { getCertificate } from "app/redux/actions/CertificateActions";

const DialogActions = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    margin: "10px auto",
    display: "flex",
    justifyContent: "center",
  },
}))(MuiDialogActions);

const EmployeeDialog = ({ open, handleClose, employeeId }) => {
  const [tab, setTab] = useState(0);
  const [showProfile, setShowProfile] = useState(false);
  const { currentEmployee } = useSelector((state) => state.employees);
  const { listCertificate, success } = useSelector(
    (state) => state.certificate
  );

  const dispatch = useDispatch();
  const refAddEmployee = useRef(null);
  useEffect(() => {
    dispatch(getEmployeeById(employeeId)) &&
      dispatch(getCertificate(employeeId));
  }, [employeeId]);

  const handleChangeTab = (e, newValue) => {
    if (newValue !== TAB_EMPLOYEE) {
      if (currentEmployee?.data?.id) {

        setTab(newValue);
      } else {


        toast.error("Vui lòng lưu thông tin nhân viên trước !");
      }
    } else {
      setTab(TAB_EMPLOYEE);
    }
  };

  const handleSubmit = () => {
    // 1. Kích hoạt validation ở form con.
    if (refAddEmployee.current) {
      refAddEmployee.current.submit(); // Sửa đổi: Dùng .submit() thay vì .handleSubmit()
    }
  };

  const handleFormSubmit = (data) => {
    if (currentEmployee?.data?.id) {
      dispatch(updateEmployee(data?.id, data));
      handleClose();
    } else {
      dispatch(createEmployee(data));
      handleClose();
    }
  };

  const handleRegister = () => {
    setShowProfile(true);
  };

  const handleDialogClose = () => {
    setShowProfile(false);
  };

  return (
    <div>
      <Dialog
        maxWidth={"lg"}
        fullWidth
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            {currentEmployee?.id ? "Cập nhật nhân viên" : " Thêm mới nhân viên"}
          </DialogTitle>
        </DialogContent>

        <DialogContent dividers>
          <div>
            <AppBar position="static" color="default">
              <Tabs
                value={tab}
                onChange={handleChangeTab}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
              >
                <Tab label="Thông tin nhân viên" {...a11yProps(TAB_EMPLOYEE)} />
                <Tab
                  label="Thông tin văn bằng"
                  {...a11yProps(TAB_CERTIFICATE)}
                />
                <Tab label="Thông tin gia đình" {...a11yProps(TAB_FAMILY)} />
              </Tabs>
            </AppBar>
            <TabPanel value={tab} index={TAB_EMPLOYEE}>
              <EmployeeTab
                employeeData={currentEmployee?.data}
                handleClose={handleClose}
                onFormSubmit={handleFormSubmit}
                refAddEmployee={refAddEmployee}
              />
            </TabPanel>
            <TabPanel value={tab} index={TAB_CERTIFICATE}>
              <CertificateTab
                employee={currentEmployee?.data}
                listCertificate={listCertificate}
              />
            </TabPanel>
            <TabPanel value={tab} index={TAB_FAMILY}>
              <FamilyTab employee={currentEmployee?.data} />
            </TabPanel>
          </div>
        </DialogContent>
        <DialogActions>
          {employeeId && (
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={() => handleRegister()}
            >
              Đăng ký
            </Button>
          )}

          {currentEmployee?.id && (
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={() => handleRegister()}
            >
              Đăng ký
            </Button>
          )}

          {tab === 0 && (
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleSubmit()}
              >
                Lưu
              </Button>
            </div>
          )}

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
      {showProfile && (
        <ProfileEmployeeDialog
          employee={employeeId}
          open={showProfile}
          handleClose={handleDialogClose}
          handleDialogEmployeeClose={handleClose}
        />
      )}
    </div>
  );
};

export default EmployeeDialog;
