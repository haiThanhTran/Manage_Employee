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
    width: paging && "12",
    cellStyle: {
        maxWidth: "50px", 
        minWidth: "50px", 
      },
    headerStyle: {
        maxWidth: "50px", 
        minWidth: "50px", 
      },
    render: (rowData) => (
      <div
        style={{
          height: "inherit",
          overflow: "auto",
          width: "50px", // Thêm width ở đây để tránh lỗi style
          textAlign: "center",
          display: "flex",
        }}
      >
        {paging
          ? pageSize * pageIndex + rowData.tableData.id + 1
          : rowData.tableData.id + 1}
      </div>
    ),
  };
  columns.splice(1, 0, sttColumn);
  return (
    <div>
      {" "}
      <MaterialTable
        columns={columns}
        data={data}
        // localization={{
        //   body: {
        //     emptyDataSourceMessage: t("general.emptyDataMessageTable"),
        //   },
        // }}
        options={{
          headerStyle: {
            background: "#7467ef",
            color: "white",
            border: "1px solid #d1d1d1",
            padding: "10px 0px",
            whiteSpace: "nowrap", // Prevent wrapping to the next line
          },

          rowStyle: (rowData, index) => ({
            background: index % 2 === 1 ? "#EEE" : "#FFF",
          }),
          cellStyle: {
            border: "1px solid #d1d1d1",
            padding: "10px 4px",
            whiteSpace: "nowrap"
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
          rowsPerPageOptions={[5, 10, 25,50,100]}
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
