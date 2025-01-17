import ConstantList from "./appConfig";
import { authRoles } from "./auth/authRoles";
export const navigations = [

  
  {
    name: "Dashboard.manage",
    isVisible: true,
    icon: "engineering",
    role: authRoles.user,
    children: [
      // {
      //   name: "Dashboard.eQAActivityLog",
      //   isVisible:true,
      //   path: ConstantList.ROOT_PATH + "user_manager/activity_log",
      //   icon: "keyboard_arrow_right"
      // },
      {
        name: "Thêm Nhân Viên",
        isVisible: true,
        path: ConstantList.ROOT_PATH + "add_employee",
        icon: "keyboard_arrow_right",
        role: authRoles.user,
      },
      {
        name: "Quản Lý Nhân Viên",
        isVisible: true,
        path: ConstantList.ROOT_PATH + "manage_employee",
        icon: "keyboard_arrow_right",
        role: authRoles.user,
      },
      {
        name: "Kết Thúc Nhân Viên",
        isVisible: true,
        path: ConstantList.ROOT_PATH + "end_employee",
        icon: "keyboard_arrow_right",
        role: authRoles.user,
      },
      // {
      //   name: "Tỉnh",
      //   isVisible: true,
      //   path: ConstantList.ROOT_PATH + "province",
      //   icon: "keyboard_arrow_right",
      // },
      // {
      //   name: "Huyện",
      //   isVisible: true,
      //   path: ConstantList.ROOT_PATH + "district",
      //   icon: "keyboard_arrow_right",
      // },
      // {
      //   name: "Xã",
      //   isVisible: true,
      //   path: ConstantList.ROOT_PATH + "ward",
      //   icon: "keyboard_arrow_right",
      // },
    ],
  },
  {
    name: "Lãnh đạo",
    icon: "dashboard",
    path: "",
    isVisible: true,
    role: authRoles.manage,
    children: [
      {
        name: "Lãnh đạo chờ duyệt",
        role: authRoles.manage,
        path: ConstantList.ROOT_PATH + "leader_waiting",
        icon: "keyboard_arrow_right",
        isVisible: true,
      },
      {
        name: "Lãnh đạo đã duyệt",
        role: authRoles.manage,
        path: ConstantList.ROOT_PATH + "leader_approved",
        icon: "keyboard_arrow_right",
        isVisible: true,
      },
    ],
  },
];
