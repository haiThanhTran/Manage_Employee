import { Icon, IconButton } from "@material-ui/core";
import { Notifications, Visibility } from "@material-ui/icons";
import {
  GENDER,
  POSITIONS,
  PROPOSAL,
  RELATIONSHIP,
  STATUS_PROCESS,
  STATUS_PROFILE,
  TEAM,
} from "app/const/EmployeeConst";
import { formatDate } from "../const/utils";

export const employeeColumn = (action) => [
  {
    title: "Thao tác",
    field: "custom",
    render: action,
    align: "center",
    width: "10%",
  },
  { title: "Mã nhân viên", field: "code", textAlign: "center",width: "50px",display: "flex" },
  { title: "Tên nhân viên", field: "name", align: "left" },
  {
    title: "Ngày sinh",
    field: "dateOfBirth",
    align: "center",
    render: (rowData) => formatDate(rowData.dateOfBirth),
  },
  {
    title: "Giới tính",
    field: "gender",
    align: "left",
    render: (rowData) =>
      GENDER.find((item) => item.value === rowData.gender)?.name,
  },
  {
    title: "Nhóm",
    field: "team",
    align: "left",
    render: (rowData) => TEAM.find((item) => item.value === rowData.team)?.name,
  },
  {
    title: "Điện thoại",
    field: "phone",
    align: "center"
  },
  {
    title: "Email",
    field: "email",
    align: "left",
  },
  {
    title: "Trạng thái",
    field: "submitProfileStatus",
    align: "left",
    render: (rowData) => STATUS_PROFILE[rowData.submitProfileStatus],
  },
];

export const certificateColumn = (action) => [
  {
    title: "Thao tác",
    field: "custom",
    render: action,
    align: "center",
  },
  { title: "Tên văn bằng", field: "certificateName", align: "left" },
  {
    title: "Ngày cấp",
    field: "issueDate",
    align: "center",
    render: (rowData) => (rowData.issueDate),
  },
  { title: "Lĩnh vực", field: "field", align: "left" },
  { title: "Nội dung", field: "content", align: "left" },
];

export const familyColumn = (action) => [
  {
    title: "Thao tác",
    field: "custom",
    render: action,
    align: "center",
  },
  { title: "Họ và tên", field: "name", align: "left" },
  {
    title: "Ngày sinh",
    field: "dateOfBirth",
    align: "center",
    render: (rowData) => (rowData.dateOfBirth),
  },
  {
    title: "Giới tính",
    field: "gender",
    align: "left",
    render: (rowData) =>
      GENDER.find((item) => item.value === rowData.gender)?.name,
  },
  { title: "Điện thoại", field: "phoneNumber", align: "center" },
  {
    title: "Căn cước công dân",
    field: "citizenIdentificationNumber",
    align: "center",
  },
  {
    title: "Quan hệ",
    field: "relationShip",
    align: "left",
    render: (rowData) =>
      RELATIONSHIP.find((item) => item.value === rowData.relationShip)?.name,
  },
  { title: "Email", field: "email", align: "left" },
  { title: "Địa chỉ", field: "address", align: "left" },
];

export const salaryColumn = (action) => [
  {
    title: "Thao tác",
    field: "custom",
    render: action,
    align: "center",
  },
  {
    title: "Ngày tăng lương",
    field: "startDate",
    align: "center",
    render: (rowData) => (rowData.startDate),
  },

  { title: "Mức lương cũ", field: "oldSalary", align: "right" },
  { title: "Mức lương mới", field: "newSalary", align: "right" },
  { title: "Ghi chú", field: "note", align: "left" },
  {
    title: "Trạng thái",
    field: "salaryIncreaseStatus",
    align: "left",
    render: (rowData) => STATUS_PROCESS[+rowData.salaryIncreaseStatus - 1],
  },
];

export const promoteColumn = (action) => [
  {
    title: "Thao tác",
    field: "custom",
    render: action,
    align: "center",
  },

  {
    title: "Ngày thăng chức",
    field: "promotionDay",
    align: "center",
    render: (rowData) => (rowData.promotionDay),
  },
  {
    title: "Vị trí cũ",
    field: "currentPosition",
    align: "left",
    render: (rowData) =>
      POSITIONS.find((item) => item.id === rowData.currentPosition)?.name,
  },
  {
    title: "Vị trí mới",
    field: "newPosition",
    align: "left",
    render: (rowData) =>
      POSITIONS.find((item) => item.id === rowData.newPosition)?.name,
  },
  { title: "Ghi chú", field: "note", align: "left" },
  {
    title: "Trạng thái",
    field: "processStatus",
    align: "left",
    render: (rowData) => STATUS_PROCESS[+rowData.processStatus - 1],
  },
];

export const proposalColumn = (action) => [
  {
    title: "Thao tác",
    field: "custom",
    render: action,
    align: "center",
  },
  {
    title: "Ngày đề xuất",
    field: "proposalDate",
    align: "center",
    render: (rowData) => (rowData.proposalDate),
  },
  {
    title: "Loại đề xuất",
    field: "type",
    align: "left",
    render: (rowData) =>
      PROPOSAL.find((item) => item.id === rowData.type)?.name,
  },
  { title: "Ghi chú", field: "note", align: "left" },
  { title: "Nội dung", field: "content", align: "left" },
  { title: "Mô tả", field: "detailedDescription", align: "left" },
  {
    title: "Trạng thái",
    field: "proposalStatus",
    align: "left",
    render: (rowData) => STATUS_PROCESS[+rowData.proposalStatus - 1],
  },
];
