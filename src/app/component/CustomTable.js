import { TablePagination } from "@material-ui/core";
import MaterialTable from "material-table";
import React from "react";

const CustomTable = ({
  columns,
  data,
  paging = false,
  count,
  pageIndex,
  pageSize,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  const sttColumn = {
    title: "STT",
    align: "center",
    width: "50px",
    cellStyle: { maxWidth: "50px", minWidth: "30px", textAlign: "center" },
    headerStyle: { maxWidth: "50px", minWidth: "30px", textAlign: "center" },
    render: (rowData) =>
      paging
        ? pageSize * pageIndex + rowData.tableData.id + 1
        : rowData.tableData.id + 1,
  };

  // Thêm cột STT vào đầu mảng columns mà không làm thay đổi columns gốc
  const updatedColumns = [sttColumn, ...columns];

  return (
    <div>
      <MaterialTable
        columns={updatedColumns}
        data={data}
        options={{
          headerStyle: {
            background: "#7467ef",
            color: "white",
            border: "1px solid #d1d1d1",
            padding: "20px",
            textAlign: "center", // Header căn giữa
            whiteSpace: "normal", // Cho phép xuống dòng
          },
          rowStyle: (rowData, index) => ({
            background: index % 2 === 1 ? "#EEE" : "#FFF",
          }),
          cellStyle: {
            border: "1px solid #d1d1d1",
            padding: "10px",
            whiteSpace: "normal", // Cho phép dữ liệu tự xuống dòng
            wordWrap: "break-word", // Xuống dòng khi quá dài
          },
          sorting: false,
          search: false,
          padding: "dense",
          toolbar: false,
          paging: false,
          maxBodyHeight: "750px",
        }}
      />
      {paging && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          component="div"
          count={count}
          rowsPerPage={pageSize}
          page={pageIndex}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          labelRowsPerPage={"Số dòng trên trang"}
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} ${"Số trang"} ${count}`
          }
        />
      )}
    </div>
  );
};

export default CustomTable;
