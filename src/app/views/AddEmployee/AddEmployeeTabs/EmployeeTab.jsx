import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import {
  Avatar,
  Button,
  Grid,
  IconButton,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { toast } from "react-toastify";
import ConstantList from "../../../appConfig";
import { convertTimeToDate } from "../../../const/utils";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { GENDER, TEAM } from "../../../const/EmployeeConst";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../../services/EmployeeService";
import {
  createEmployee,
  updateEmployee,
} from "../../../redux/actions/EmployeeActions";
import {
  addAddressValidationRule,
  addAgeValidationRule,
  addEmailValidationRule,
  addEmployeeIdValidationRule,
  addFullNameValidationRule,
  addIdentityCardValidationRule,
  addPhoneValidationRule,
  removeAddressValidationRule,
  removeAgeValidationRule,
  removeEmailValidationRule,
  removeEmployeeIdValidationRule,
  removeFullNameValidationRule,
  removeIdentityCardValidationRule,
  removePhoneValidationRule,
} from "../../../const/Validation";
import moment from "moment";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

const EmployeeTab = forwardRef((props, ref) => {
  const { employeeData, onFormSubmit, refAddEmployee } = props;
  const formRef = useRef(null);
  const { currentEmployee } = useSelector((state) => state.employees);
  const [employee, setEmployee] = useState(employeeData || {});
  useEffect(() => {
    setEmployee(employeeData);
  }, [employeeData]);
  useEffect(() => {
    addEmployeeIdValidationRule();
    addPhoneValidationRule();
    addIdentityCardValidationRule();
    addAgeValidationRule();
    addEmailValidationRule();
    addFullNameValidationRule();
    addAddressValidationRule();

    return () => {
      removeEmployeeIdValidationRule();
      removePhoneValidationRule();
      removeIdentityCardValidationRule();
      removeAgeValidationRule();
      removeEmailValidationRule();
      removeFullNameValidationRule();
      removeAddressValidationRule();
    };
  }, []);

  const handleChangeImage = async (event) => {
    const file = event.target.files[0];

    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error(
          "Kích thước của tệp ảnh quá lớn. Vui lòng chọn một tệp ảnh nhỏ hơn 10MB."
        );
        event.target.value = null;
        return;
      }
      const formData = new FormData();
      formData.append("file", file);
      try {
        const response = await uploadImage(formData);

        if (response?.status === 200) {
          const imageUrl =
            response?.data &&
            `${ConstantList.API_ENPOINT}/public/image/${response?.data?.name}`;
          setEmployee((prev) => ({ ...prev, image: imageUrl }));
        } else {
          console.error("Upload failed");
        }
      } catch (error) {
        console.error("Error during upload:", error);
      }
    } else {
      toast.error("Chọn một ảnh JPG/PNG.");
      event.target.value = null;
    }
  };

  const handleChangeInput = (event) => {
    setEmployee({ ...employee, [event.target.name]: event.target.value });
  };

  useImperativeHandle(refAddEmployee, () => ({
    submit: () => {
      formRef.current.submit();
    },
    isFormValid: (showError = true) => {
      return formRef.current.isFormValid(showError);
    },
  }));

  const handleSubmit = () => {
    const data = {
      ...employee,
      employeeFamilyDtos: [],
      certificatesDto: [],
    };
    onFormSubmit(data);
  };

  // if (!currentEmployee) {
  //   return <div>Loading...</div>;
  // }

  return (
    <ValidatorForm onSubmit={handleSubmit} ref={formRef}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} className="text-center">
          <Avatar
            alt="avatar"
            src={
              employee?.image
                ? employee?.image
                : ConstantList.ROOT_PATH + "assets/images/avatar.jpg"
            }
            className="m-auto style-image"
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "2px solid #ccc",
              cursor: "pointer",
            }}
          />
          <IconButton
            variant="outlined"
            color="warning"
            component="label"
            className="mt-10"
          >
            <AddAPhotoIcon />
            <input
              accept="image/*"
              id="icon-button-file"
              type="file"
              name="image"
              style={{ display: "none" }}
              onChange={handleChangeImage}
              className="display-none"
            />
          </IconButton>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2} className="mb-20">
            <Grid item xs={12} md={6}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                    Mã nhân viên
                  </span>
                }
                value={employee?.code || ""}
                onChange={handleChangeInput}
                className="w-100 "
                name="code"
                validators={["required", "isEmployeeIdValid"]}
                errorMessages={[
                  "Mã nhân viên không được để trống",
                  "Mã nhân không đúng định dạng(NV+2 số cuối của năm+3 số)",
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                    Tên nhân viên
                  </span>
                }
                value={employee?.name || ""}
                onChange={handleChangeInput}
                className="w-100"
                name="name"
                validators={["required", "isFullNameValid"]}
                errorMessages={[
                  "Tên nhân viên không được để trống",
                  "Họ và tên không được chứa số và ký tự đặc biệt",
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                    Giới tính
                  </span>
                }
                select
                value={
                  employee?.gender !== undefined &&
                  employee?.gender !== null &&
                  employee?.gender !== ""
                    ? Number(employee?.gender)
                    : ""
                }
                onChange={handleChangeInput}
                className="w-100"
                name="gender"
                validators={["required"]}
                errorMessages={["Giới tính nhân viên không được để trống"]}
              >
                {GENDER.map((item, index) => {
                  return (
                    <MenuItem value={item.value} key={item.value}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </TextValidator>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                    Năm sinh
                  </span>
                }
                type="date"
                value={
                  typeof employee?.dateOfBirth === "string"
                    ? employee?.dateOfBirth
                    : convertTimeToDate(employee?.dateOfBirth) || ""
                }
                onChange={handleChangeInput}
                className="w-100"
                InputLabelProps={{
                  shrink: true,
                }}
                name="dateOfBirth"
                validators={["required", "isAgeValid"]}
                errorMessages={["Không được để trống", "Bạn chưa đủ 18 tuổi"]}
                inputProps={{
                  max: moment().format("YYYY-MM-DD"),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                    SĐT
                  </span>
                }
                value={employee?.phone || ""}
                onChange={handleChangeInput}
                className="w-100"
                name="phone"
                validators={["required", "isPhoneNumberValid"]}
                errorMessages={[
                  "Số điện thoại không được để trống",
                  "Số điện thoại phải bắt đầu từ chữ số 0 và có 10 chữ số",
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                    Nhóm
                  </span>
                }
                select
                value={employee?.team || ""} // Sửa ở đây, dùng employee?.team
                onChange={handleChangeInput}
                className="w-100"
                name="team"
                validators={["required"]}
                errorMessages={["Nhóm nhân viên không được để trống"]}
              >
                {TEAM.map((item) => {
                  return (
                    <MenuItem value={item.value} key={item.value}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </TextValidator>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                    Số CCCD
                  </span>
                }
                value={employee?.citizenIdentificationNumber || ""}
                onChange={handleChangeInput}
                className="w-100"
                name="citizenIdentificationNumber"
                validators={["required", "isIdentityCardValid"]}
                errorMessages={[
                  "Số CCCD không được để trống",
                  "Căn cước công dân phải có 9 hoặc 12 chữ số",
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                    Ngày cấp
                  </span>
                }
                type="date"
                value={
                  typeof employee?.dateOfIssuanceCard === "string"
                    ? employee?.dateOfIssuanceCard
                    : convertTimeToDate(employee?.dateOfIssuanceCard) || ""
                }
                onChange={handleChangeInput}
                className="w-100"
                InputLabelProps={{
                  shrink: true,
                }}
                name="dateOfIssuanceCard"
                validators={["required"]}
                errorMessages={["Không được để trống"]}
                inputProps={{
                  max: moment().format("YYYY-MM-DD"),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                    Nơi cấp
                  </span>
                }
                value={employee?.placeOfIssueCard || ""}
                onChange={handleChangeInput}
                className="w-100"
                name="placeOfIssueCard"
                validators={["required", "isAddressValid"]}
                errorMessages={["Không được để trống", "Vui lòng nhập địa chỉ"]}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                    Email
                  </span>
                }
                value={employee?.email || ""}
                onChange={handleChangeInput}
                className="w-100"
                name="email"
                validators={["required", "isEmailValid"]}
                errorMessages={["Không để trống", "Email không hợp lệ"]}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                label={
                  <span>
                    <span className="text-error">*</span>
                    Địa chỉ
                  </span>
                }
                value={employee?.address || ""}
                onChange={handleChangeInput}
                className="w-100"
                name="address"
                validators={["required"]}
                errorMessages={["Địa chỉ không được để trống"]}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ValidatorForm>
  );
});

export default EmployeeTab;
