import ConstantList from "./appConfig";
export const navigations = [
  {
    name: "Dashboard.dashboard",
    icon: "dashboard",
    path: ConstantList.ROOT_PATH + "dashboard/analytics",
    isVisible: true,
  },
  
  {
    name: "Dashboard.manage",
    isVisible: true,
    icon: "engineering",
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
        path: ConstantList.ROOT_PATH + "manage_employee",
        icon: "keyboard_arrow_right",
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
    children: [
      {
        name: "Lãnh đạo chờ duyệt",
        path: ConstantList.ROOT_PATH + "directory/category",
        icon: "keyboard_arrow_right",
        isVisible: true,
      },
      {
        name: "Lãnh đạo đã duyệt",
        path: ConstantList.ROOT_PATH + "directory/timesheet",
        icon: "keyboard_arrow_right",
        isVisible: true,
      },
    ],
  },
];
