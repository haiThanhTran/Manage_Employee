// utils.js
export const formatDate = (timestamp) => {
  if (!timestamp) return "";

  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export function formatMoney(numberString) {
  if (!isNaN(parseFloat(numberString)) && isFinite(numberString)) {
    return parseFloat(numberString).toLocaleString("en-US");
  } else {
    return numberString;
  }
}
export function getDayMonthYear(ms) {
  const date = new Date(ms);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `ngày ${day} tháng ${month} năm ${year}`;
}

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

export function getOldSalary(objectsArray) {
  objectsArray.sort(
    (a, b) => new Date(a.acceptanceDate) - new Date(b.acceptanceDate)
  );

  const filteredArray = objectsArray.filter(
    (obj) => obj.salaryIncreaseStatus === 3
  );

  return filteredArray.length > 0 ? filteredArray[0].newSalary : 0;
}
export const searchDataByKeyword = (data, keyword) => {

  return data.filter(item => {
  
    const stringValues = Object.values(item).map(value => {
      return value ? value.toString().toLowerCase() : '';
    });
   
    return stringValues.some(value => value.includes(keyword.toLowerCase()));
  });
};
