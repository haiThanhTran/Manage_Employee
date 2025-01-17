import {
  Avatar,
  Button,
  Grid,
  Icon,
  IconButton,
  Typography,
} from "@material-ui/core";
import ConstantList from "app/appConfig";
import React, { useEffect, useState } from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import { useDispatch } from "react-redux";
import {
  ACTION_EMPLOYEE,
  GENDER,
  STATUS_EMPLOYEE,
} from "app/const/EmployeeConst";
import { formatDate } from "../../../const/utils";
import {
  getEmployeeById,
  getEmployees,
  updateEmployee,
} from "app/redux/actions/EmployeeActions";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ExperienceDialog from "../ExperienceDialog";
import { ConfirmationDialog } from "egret";
import { deleteExperience } from "app/redux/actions/ExperienceActions";
import "../../../../app/_CVTab.scss";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import DateRangeIcon from "@material-ui/icons/DateRange";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

const CvTab = (props) => {
  const { employeeCv, listExperience } = props;
  const employee = employeeCv?.data || {};
  const experiences = listExperience || [];
  const [
    shouldOpenConfirmationDeleteAllDialog,
    setShouldOpenConfirmationDeleteAllDialog,
  ] = useState(false);
  const [id, setId] = useState(null);
  const [experience, setExperience] = useState({});
  const [isUpdateSkill, setIsUpdateSkill] = useState(false);
  const [skill, setSkill] = useState(employee?.skill);
  const [activity, setActivity] = useState(employee?.activity);
  const [isUpdateActivity, setIsUpdateActivity] = useState(false);
  const [isExperience, setIsExperience] = useState(false);
  const dispatch = useDispatch();



  const handleUpdateSkill = () => {
    setIsUpdateSkill(true);
  };
  const handleBtnUpdateSkill = (e) => {
    setSkill(e.target.value);
  };

  const handleUpdateSkillClose = () => {
    setIsUpdateSkill(false);
  };
  const handleSubmitSkill = () => {
    const data = { ...employee, skill };
    dispatch(updateEmployee(data?.id, data));
    handleUpdateSkillClose();
  };

  const handleCloseSkill = () => {
    handleUpdateSkillClose();
  };

  const handleUpdateActive = () => {
    setIsUpdateActivity(true);
  };
  const handleBtnUpdateActive = (e) => {
    setActivity(e.target.value);
  };

  const handleUpdateActiveClose = () => {
    setIsUpdateActivity(false);
  };
  const handleSubmitActivity = () => {
    const data = { ...employee, activity };
    dispatch(updateEmployee(data?.id, data));
    handleUpdateActiveClose();
  };

  const handleCancelActivity = () => {
    handleUpdateActiveClose();
  };

  const handleExperienceDialog = (experience) => {
    setIsExperience(true);
    setExperience(experience);
  };

  const handleCloseExperience = () => {
    setIsExperience(false);
    setExperience({});
  };

  const handleDialogConfirm = (experience) => {
    setShouldOpenConfirmationDeleteAllDialog(true);
    setId(experience?.id);
  };

  const handleConfirmationResponse = () => {
    dispatch(deleteExperience(id));
    handleDialogConfirmationClose();
  };

  const handleDialogConfirmationClose = () => {
    setShouldOpenConfirmationDeleteAllDialog(false);
    setId(null);
  };


  if (!employee || !listExperience) {
    return <div>Loading...</div>; // Hoặc loader
  }
  return (
    <div className="wrapper">
      <Grid container spacing={2} xs={12} className="ml-0">
        <Grid item xs={5} className="background-left">
          <div className="text-center mb-10 mt-20">
            <Typography className="h2 font-weight-bold employee-name">
              {employee?.name}
            </Typography>
            <Typography className="h3 font-weight-bold positon">
              Nhân viên
            </Typography>
          </div>
          <Avatar
            alt="avatar"
            src={
              employee?.image ||
              ConstantList.ROOT_PATH + "assets/images/avatar.jpg"
            }
            className="style-image image text-center m-auto"
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "2px solid #ccc",
              cursor: "pointer",
            }}
          />
          <div className="m-20 pb-20 border-bottom">
            <div className="flex">
              <div className="typography">Thông tin liên hệ</div>
            </div>
            <div className="flex mt-10">
              <MailOutlineIcon className="info-icon" />
              <span className="ml-10">{employee?.email}</span>
            </div>
            <div className="flex mt-10">
              <PhoneIcon className="info-icon" />
              <span className="ml-10">{employee?.phone}</span>
            </div>
            <div className="flex mt-10">
              <PersonIcon className="info-icon" />
              <span className="ml-10">
                {GENDER.find((item) => item.value === employee?.gender)?.name}
              </span>
            </div>
            <div className="flex mt-10">
              <DateRangeIcon className="info-icon" />
              <span className="ml-10">{formatDate(employee?.dateOfBirth)}</span>
            </div>
            <div className="flex mt-10">
              <HomeIcon className="info-icon" />
              <span className="ml-10">{employee?.address}</span>
            </div>
          </div>

          <div className="m-20 pb-20 border-bottom">
            <div className="flex">
              <div className="typography">Các kỹ năng</div>
              {ACTION_EMPLOYEE.EDIT.includes(employee?.submitProfileStatus) &&
                STATUS_EMPLOYEE.ADD.includes(employee?.submitProfileStatus) && (
                  <IconButton onClick={() => handleUpdateSkill()}>
                    <Icon fontSize="small" color="primary">
                      edit
                    </Icon>
                  </IconButton>
                )}
            </div>
            <div className="skills mt-10">
              {isUpdateSkill && (
                <div>
                  <textarea
                    value={skill || ""}
                    onChange={handleBtnUpdateSkill}
                    rows={5}
                  ></textarea>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleSubmitSkill()}
                    className="mr-10"
                  >
                    Lưu
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    type="button"
                    onClick={() => handleCloseSkill()}
                  >
                    Hủy
                  </Button>
                </div>
              )}
              {!isUpdateSkill && (
                <ul>
                  {skill?.split("\n").map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="m-20">
            <Typography className="h3 font-weight-bold">Ngoại ngữ</Typography>
            <ul className="language">
              <li>
                <span>Tiếng anh</span>
                <div className="skill">
                  <StarIcon className="star-icon" />
                  <StarIcon className="star-icon" />
                  <StarHalfIcon className="star-icon" />
                  <StarOutlineIcon className="star-icon" />
                  <StarOutlineIcon className="star-icon" />
                </div>
              </li>
              <li>
                <span>Tiếng trung</span>
                <div className="skill">
                  <StarIcon className="star-icon" />
                  <StarIcon className="star-icon" />
                  <StarOutlineIcon className="star-icon" />
                  <StarOutlineIcon className="star-icon" />
                  <StarOutlineIcon className="star-icon" />
                </div>
              </li>
            </ul>
          </div>
          <div className="m-20">
            <Typography className="h3 font-weight-bold">Tin học</Typography>
            <ul className="language">
              <li>
                <span>Word</span>
                <div className="skill">
                  <StarIcon className="star-icon" />
                  <StarIcon className="star-icon" />
                  <StarIcon className="star-icon" />
                  <StarIcon className="star-icon" />
                  <StarHalfIcon className="star-icon" />
                </div>
              </li>
              <li>
                <span>Excel</span>
                <div className="skill">
                  <StarIcon className="star-icon" />
                  <StarIcon className="star-icon" />
                  <StarIcon className="star-icon" />
                  <StarIcon className="star-icon" />
                  <StarHalfIcon className="star-icon" />
                </div>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={7}>
          <div className="pl-20 mt-20">
            <div className="flex">
              <div className="typography">Mục tiêu nghề nghiệp</div>
            </div>
            <div className="decription pb-20 border-bottom mt-10">
              Áp dụng những kinh nghiệm về kỹ năng bán hàng và sự hiểu biết về
              thị trường để trở thành một nhân viên bán hàng chuyên nghiệp, mang
              đến nhiều giá trị cho khách hàng. Từ đó giúp Công ty tăng số lượng
              khách hàng và mở rộng tập khách hàng.
            </div>
          </div>

          <div className="mt-20 pl-20">
            <div className="flex">
              <div className="typography">Hoạt động</div>
              {ACTION_EMPLOYEE.EDIT.includes(employee?.submitProfileStatus) &&
                STATUS_EMPLOYEE.ADD.includes(employee?.submitProfileStatus) && (
                  <IconButton onClick={() => handleUpdateActive()}>
                    <Icon fontSize="small" color="primary">
                      edit
                    </Icon>
                  </IconButton>
                )}
            </div>
            <div className="active pb-20 border-bottom mt-10">
              {isUpdateActivity && (
                <div>
                  <textarea
                    value={activity || ""}
                    onChange={handleBtnUpdateActive}
                    rows={5}
                  ></textarea>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleSubmitActivity()}
                    className="mr-10"
                  >
                    Lưu
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    type="button"
                    onClick={handleCancelActivity}
                  >
                    Hủy
                  </Button>
                </div>
              )}
              {!isUpdateActivity && (
                <ul>
                  {activity?.split("\n").map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="mt-20 pl-20 experiences">
            <Typography className="h3 font-weight-bold">
              <div className="flex">
                <div className="typography">Kinh nghiệm làm việc</div>
                {ACTION_EMPLOYEE.EDIT.includes(employee?.submitProfileStatus) &&
                  STATUS_EMPLOYEE.ADD.includes(
                    employee?.submitProfileStatus
                  ) && (
                    <IconButton onClick={() => handleExperienceDialog()}>
                      <Icon fontSize="small" color="primary">
                        <AddCircleIcon className="add-icon" />
                      </Icon>
                    </IconButton>
                  )}
              </div>
            </Typography>
            {experiences?.map((experience, index) => {
              return (
                <div>
                  <Typography className="h4 font-weight-bold mt-10">
                    {experience?.companyName}
                    {ACTION_EMPLOYEE.EDIT.includes(
                      employee?.submitProfileStatus
                    ) &&
                      STATUS_EMPLOYEE.ADD.includes(
                        employee?.submitProfileStatus
                      ) && (
                        <IconButton
                          onClick={() => handleExperienceDialog(experience)}
                        >
                          <Icon fontSize="small" color="primary">
                            edit
                          </Icon>
                        </IconButton>
                      )}
                    {ACTION_EMPLOYEE.EDIT.includes(
                      employee?.submitProfileStatus
                    ) &&
                      STATUS_EMPLOYEE.ADD.includes(
                        employee?.submitProfileStatus
                      ) && (
                        <IconButton
                          onClick={() => handleDialogConfirm(experience)}
                        >
                          <Icon fontSize="small" color="error">
                            delete
                          </Icon>
                        </IconButton>
                      )}
                  </Typography>
                  <Typography className="h5 font-weight-bold">
                    {formatDate(experience?.startDate).slice(3)} -
                    {formatDate(experience?.endDate).slice(3)}
                  </Typography>
                  <Typography className="h5 font-weight-bold">
                    {experience?.companyAddress}
                  </Typography>
                  {experience?.jobDescription.split("\n").map((description) => {
                    return (
                      <ul>
                        <li>{description}</li>
                      </ul>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </Grid>
      </Grid>

      {isExperience && (
        <ExperienceDialog
          open={isExperience}
          handleClose={handleCloseExperience}
          employee={employee}
          listExperience={experience}
        />
      )}

      {shouldOpenConfirmationDeleteAllDialog && (
        <ConfirmationDialog
          open={shouldOpenConfirmationDeleteAllDialog}
          onConfirmDialogClose={handleDialogConfirmationClose}
          onYesClick={() => handleConfirmationResponse()}
          title={"Bạn có xác nhận xóa không?"}
          text={"Bạn có chắc chắn muốn xóa không?"}
          Yes={"Yes"}
          No={"No"}
        />
      )}
    </div>
  );
};

export default CvTab;
