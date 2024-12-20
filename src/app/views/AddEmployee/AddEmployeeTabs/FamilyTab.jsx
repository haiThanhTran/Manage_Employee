import React, { useEffect, useState } from "react";
import { Button, Grid, Icon, IconButton, MenuItem } from "@material-ui/core";
import { familyColumn } from "../../../component/Column";
import CustomTable from "../../../component/CustomTable";
import { GENDER, RELATIONSHIP } from "app/const/EmployeeConst";
import {
  createFamily,
  deleteFamily,
  getFamily,
  updateFamily,
} from "../../../redux/actions/FamilyAction";
import {
  addAgeValidationRule,
  addEmailValidationRule,
  addIdentityCardValidationRule,
  addPhoneValidationRule,
  removeEmailValidationRule,
  removeIdentityCardValidationRule,
  removePhoneValidationRule,
} from "../../../const/Validation";
import moment from "moment";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useDispatch, useSelector } from "react-redux";
import { convertTimeToDate } from "../../../const/utils";
import { ConfirmationDialog } from "egret";

function FamilyTab(props) {
  const [family, setFamily] = useState({});
  const [formKey, setFormKey] = useState(0); // Thêm key để reset form
  const { employee } = props;

  const [id, setId] = useState(null);
  const [shouldOpenConfirmationDialog, setShouldOpenConfirmationDialog] =
    useState(false);
  const { familyList, success } = useSelector((state) => state.family);
  const dispatch = useDispatch();

  useEffect(() => {
    addPhoneValidationRule();
    addIdentityCardValidationRule();
    addAgeValidationRule();
    addEmailValidationRule();

    return () => {
      removePhoneValidationRule();
      removeIdentityCardValidationRule();
      removeEmailValidationRule();
    };
  }, []);

  useEffect(() => {
    dispatch(getFamily(employee?.id));
  }, [employee?.id, success]);

  const handleChangInput = (e) => {
    const { name, value } = e.target;
    setFamily({ ...family, [name]: value });
  };

  const handleCancel = () => {
    setFamily({});
    setFormKey((prev) => prev + 1); // Reset Form
  };

  const handleSubmit = () => {
    const data = {
      id: employee?.id,
      data: [{ ...family }],
    };
    if (family?.id) {
      dispatch(updateFamily(family));
    } else {
      dispatch(createFamily(data));
    }
    setFamily({});
    setFormKey((prev) => prev + 1); // Reset Form
  };

  const handleDialogOpen = (family) => {
    setFamily(family);
  };

  const handleDialogDelete = (family) => {
    setShouldOpenConfirmationDialog(true);
    setId(family?.id);
  };

  const handleDialogDeleteClose = () => {
    setShouldOpenConfirmationDialog(false);
    setFamily({});
  };

  const handleConfirmDelete = () => {
    dispatch(deleteFamily(id));
    handleDialogDeleteClose();
  };

  const columns = familyColumn((rowData) => (
    <div>
      <IconButton onClick={() => handleDialogOpen(rowData)}>
        <Icon fontSize="small" color="primary">
          edit
        </Icon>
      </IconButton>

      <IconButton onClick={() => handleDialogDelete(rowData)}>
        <Icon fontSize="small" color="error">
          delete
        </Icon>
      </IconButton>
    </div>
  ));

  return (
    <div>
      <ValidatorForm key={formKey} onSubmit={handleSubmit}>
        <Grid container spacing={2} className="mb-20">
          <Grid item xs={12} md={6}>
            <TextValidator
              variant="outlined"
              label="*Họ và tên"
              value={family?.name || ""}
              onChange={handleChangInput}
              name="name"
              className="w-100"
              validators={["required"]}
              errorMessages={["Trường này không được để trống"]}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <TextValidator
              variant="outlined"
              label="*Ngày sinh"
              type="date"
              value={
                typeof family?.dateOfBirth === "string"
                  ? family?.dateOfBirth
                  : convertTimeToDate(family?.dateOfBirth) || ""
              }
              onChange={handleChangInput}
              name="dateOfBirth"
              className="w-100"
              InputLabelProps={{ shrink: true }}
              validators={["required"]}
              errorMessages={["Trường này không được để trống"]}
              inputProps={{ max: moment().format("YYYY-MM-DD") }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <TextValidator
              variant="outlined"
              label="*Giới Tính"
              select
              value={family?.gender !== undefined ? Number(family.gender) : ""}
              onChange={handleChangInput}
              name="gender"
              className="w-100"
              validators={["required"]}
              errorMessages={["Trường này không được để trống"]}
            >
              {GENDER.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
            </TextValidator>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextValidator
              variant="outlined"
              label="*Số điện thoại"
              value={family?.phoneNumber || ""}
              onChange={handleChangInput}
              name="phoneNumber"
              className="w-100"
              validators={["required", "isPhoneNumberValid"]}
              errorMessages={[
                "Trường này không được để trống",
                "Số điện thoại không hợp lệ",
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextValidator
              variant="outlined"
              label="*Quan hệ"
              select
              value={
                family?.relationShip !== undefined
                  ? Number(family.relationShip)
                  : ""
              }
              onChange={handleChangInput}
              name="relationShip"
              className="w-100"
              validators={["required"]}
              errorMessages={["Trường này không được để trống"]}
            >
              {RELATIONSHIP.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
            </TextValidator>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextValidator
              variant="outlined"
              label="*Email"
              value={family?.email || ""}
              onChange={handleChangInput}
              name="email"
              className="w-100"
              validators={["required", "isEmailValid"]}
              errorMessages={[
                "Trường này không được để trống",
                "Email không hợp lệ",
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextValidator
              variant="outlined"
              label="*Địa chỉ"
              value={family?.address || ""}
              onChange={handleChangInput}
              name="address"
              className="w-100"
              validators={["required"]}
              errorMessages={["Trường này không được để trống"]}
            />
          </Grid>

          <Grid item xs={12} className="flex flex-center text-center mt-auto">
            <Button
              variant="contained"
              color="secondary"
              type="button"
              onClick={handleCancel}
              style={{ marginRight: "10px" }}
            >
              Hủy
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Lưu
            </Button>
          </Grid>
        </Grid>
      </ValidatorForm>

      <CustomTable data={familyList} columns={columns} paging={false} />

      <ConfirmationDialog
        open={shouldOpenConfirmationDialog}
        onConfirmDialogClose={handleDialogDeleteClose}
        onYesClick={handleConfirmDelete}
        title="Xác nhận xóa"
        text="Bạn có chắc chắn muốn xóa?"
        Yes="Xóa"
        No="Hủy"
      />
    </div>
  );
}

export default FamilyTab;
