export const GENDER = [
    {
      value: 0,
      name: "Nam",
    },
    {
      value: 1,
      name: "Nữ",
    },
    {
      value: 2,
      name: "Khác",
    },
  ];
  export const STATUS_EMPLOYEE = {
    ADD: "1,2,4,5",
    MANAGE: "3,6,8,9",
    END: "0,7",
    PENDING: "2,6",
    APPROVED: "0,3,7",
  };
  
  export const TEAM = [
    { value: 0, name: "BA" },
    { value: 1, name: "Frontend" },
    { value: 2, name: "Backend" },
    { value: 3, name: "Mobile" },
    { value: 4, name: "Tester" },
  ];
  
  export const STATUS_PROFILE = [
    "Nộp lưu",
  
    "Lưu mới",
  
    "Chờ duyệt",
  
    "Đã duyệt",
  
    "Yêu cầu bổ sung",
  
    "Từ chối",
  
    "Chờ duyệt kết thúc",
  
    "Đã duyệt kết thúc",
  
    "Yêu cầu bổ sung kết thúc",
  
    "Từ chối kết thúc",
  ];
  
  export const ACTION_EMPLOYEE = {
    VIEW: "2, 3,6,8,9",
    EDIT: "1,4,5,3,8,9",
    DELETE: "1",
    NOTIFY: "4,5, 8,9",
    END: "7",
    PENDING_END: "6",
    PENDING: "2",
  };
  
  export const TAB_EMPLOYEE = 0;
  export const TAB_CERTIFICATE = 1;
  export const TAB_FAMILY = 2;
  
  export const TAB_SARALY = 0;
  export const TAB_PROMOTED = 1;
  export const TAB_PROPOSAL = 2;
  
  export const TAB_PENDING_REGISTER = 0;
  export const TAB_PENDING_PROMOTED = 1;
  export const TAB_PENDING_SARALY = 2;
  export const TAB_PENDING_PROPOSAL = 3;
  
  export const ACTION_PROCESS = {
    VIEW: "2,3,4,5",
    EDIT: "1,4,5",
    DELETE: "1",
    NOTIFY: "4,5",
    MANAGE: "2,3",
    SAVE: "1",
  };
  
  export const STATUS_PROCESS = [
    "Lưu mới",
  
    "Chờ duyệt",
  
    "Đã duyệt",
  
    "Yêu cầu bổ sung",
  
    "Từ chối",
  ];
  export const RELATIONSHIP = [
    {
      value: 0,
      name: "Ông",
    },
    {
      value: 1,
      name: "Bà",
    },
    {
      value: 2,
      name: "Bố",
    },
    {
      value: 3,
      name: "Mẹ",
    },
    {
      value: 4,
      name: "Vợ/chồng",
    },
    {
      value: 5,
      name: "Anh trai",
    },
    {
      value: 6,
      name: "Em trai",
    },
    {
      value: 7,
      name: "Chị gái",
    },
    {
      value: 8,
      name: "Em gái",
    },
    {
      value: 9,
      name: "Khác",
    },
  ];
  
  export const POSITIONS = [
    { id: 1, name: "Giám đốc" },
    { id: 2, name: "Phó giám đốc" },
    { id: 3, name: "Trưởng phòng" },
    { id: 4, name: "Phó phòng" },
    { id: 5, name: "Trưởng nhóm Fontend" },
    { id: 6, name: "Trưởng nhóm Backend" },
    { id: 7, name: "Trưởng nhóm BA" },
    { id: 8, name: "Trưởng nhóm Tester" },
    { id: 9, name: "Nhân viên" },
  ];
  
  export const PROPOSAL = [
    { id: 1, name: "Đào tạo" },
    { id: 2, name: "Quy trình" },
    { id: 3, name: "Thời gian" },
    { id: 4, name: "Kế hạch" },
  ];
  
  export const LEADERSHIP = [
    {
      id: 36,
      leaderName: "Nguyen Van B",
      leaderPosition: 3,
      activeStatus: 1,
      userId: 7,
    },
    {
      id: 35,
      leaderName: "Nguyen Van E",
      leaderPosition: 3,
      activeStatus: 2,
      userId: 6,
    },
    {
      id: 34,
      leaderName: "Nguyen Van D",
      leaderPosition: 3,
      activeStatus: 1,
      userId: 5,
    },
    {
      id: 2,
      leaderName: "Nguyen Van C",
      leaderPosition: 2,
      activeStatus: 1,
      userId: 4,
    },
    {
      id: 1,
      leaderName: "Nguyen Van A",
      leaderPosition: 4,
      activeStatus: 1,
      userId: 3,
    },
  ];
  
  export const LEADER_POSITION=[
    {name: "Trưởng nhóm BA",id:0},
    {name: "Trưởng nhóm Tester",id:1},
    {name: "Trưởng nhóm Front-End",id:2},
    {name: "Trưởng nhóm Back-End",id:3},
    {name: "Trưởng nhóm PHP",id:4},
    {name: "Trưởng nhóm Android",id:5},
  ]
  