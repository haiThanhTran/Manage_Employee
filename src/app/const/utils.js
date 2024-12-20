// utils.js
export const formatDate = (timestamp) => {
    if (!timestamp) return "";
  
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`; 
  };

  export function isMobile() {
    if (window) {
      return window.matchMedia(`(max-width: 767px)`).matches;
    }
    return false;
  }
  

  export const convertTimeToDate = (timestamp) => {
    if (!timestamp) return "";
  
    const date = new Date(timestamp); // Tạo đối tượng Date từ timestamp
  
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Lấy tháng (thêm 1 vì tháng bắt đầu từ 0) và thêm 0 vào đầu nếu cần
    const day = date.getDate().toString().padStart(2, "0"); // Lấy ngày và thêm 0 vào đầu nếu cần
  
    return `${year}-${month}-${day}`; // Trả về chuỗi định dạng YYYY-MM-DD
  };