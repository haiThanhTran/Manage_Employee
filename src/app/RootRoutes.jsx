import React from "react";
import { Redirect } from "react-router-dom";
import homeRoutes from "./views/home/HomeRoutes";
import sessionRoutes from "./views/sessions/SessionRoutes";
import dashboardRoutes from "./views/dashboard/DashboardRoutes";
import administrativeUnitRoutes from "./views/AdministrativeUnit/AdministrativeUnitRoutes";
import UserRoutes from "./views/User/UserRoutes";
import departmentRoutes from "./views/Department/DepartmentRoutes";
import ConstantList from "./appConfig";
// import MenuRoutes from "./views/Menus/MenuRoutes";
import pageLayoutRoutes from "./views/page-layouts/PageLayoutRoutees";
import MenuRoutes from "./views/Menus/MenuRoutes";
import ShiftWorkRouters from "./views/ShiftWork/ShiftWorkRouters";
import TimeSheetRoutes from "./views/TimeSheet/TimeSheetRoutes";
import ColorRoutes from "./views/Color/ColorRoutes";
import CategoryRoutes from "./views/Category/CategoryRoutes";
import EmployeeRoutes from "./views/AddEmployee/EmployeeRoutes";
import ManageEmployeeRoutes from "./views/ManageEmployee/ManageEmployeeRoutes";
import EndEmployeeRoute from "./views/EndEmployee/EndEmployeeRoute";
import LeaderWaitingRoutes from "./views/LeaderWaiting/LeaderWaitingRoute";
import LeaderApprovedRoutes from "./views/LeaderApproved/LeaderApprovedRoutes";


const redirectRoute = [
  {
    path: ConstantList.ROOT_PATH,
    exact: true,
    component: () => <Redirect to={ConstantList.HOME_PAGE} />, //Luôn trỏ về HomePage được khai báo trong appConfig
  },
];

const errorRoute = [
  {
    component: () => <Redirect to={ConstantList.ROOT_PATH + "session/404"} />,
  },
];

const routes = [
  ...homeRoutes,
  ...sessionRoutes,
  ...dashboardRoutes,
  ...TimeSheetRoutes,
  ...administrativeUnitRoutes,
  ...departmentRoutes,
  ...pageLayoutRoutes,
  ...MenuRoutes,
  ...UserRoutes,
  ...ShiftWorkRouters,
  ...ColorRoutes,
  ...CategoryRoutes,
  // ...errorRoute,
  ...EmployeeRoutes,
  ...ManageEmployeeRoutes,
  ...EndEmployeeRoute,
  ...LeaderWaitingRoutes,
  ...LeaderApprovedRoutes
];

export default routes;
