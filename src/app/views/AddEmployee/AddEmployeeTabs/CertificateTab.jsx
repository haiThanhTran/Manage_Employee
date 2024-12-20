import React, { useEffect, useState } from "react";
import { Button, Grid, Icon, IconButton } from "@material-ui/core";
import { certificateColumn } from "../../../component/Column";
import CustomTable from "../../../component/CustomTable";
import {
  addCertificate,
  deleteCertificate,
  updateCertificate,
} from "app/redux/actions/CertificateActions";
import { ConfirmationDialog } from "egret";
import moment from "moment";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useDispatch } from "react-redux";
import { convertTimeToDate } from "../../../const/utils";

function CertificateTab(props) {
  const [certificate, setCertificate] = useState({}|| "");
  const { employee, listCertificate } = props;
  const [id, setId] = useState(null);
  const [shouldOpenConfirmationDialog, setShouldOpenConfirmationDialog] =
    useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setCertificate(listCertificate);
    console.log("listCertificate", listCertificate);
  }, [listCertificate]); // Lắng nghe sự thay đổi của listCertificate

  const handleChangInput = (e) => {
    setCertificate({ ...certificate, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setCertificate({});
  };

  const handleSubmit = () => {
    const data = {
      id: employee?.id,
      data: [{ ...certificate }],
    };
    if (certificate?.id) {
      dispatch(updateCertificate(certificate));
    } else {
      dispatch(addCertificate(data));
    }
    setCertificate({});
  };
  
  const handleDialogOpen = (certificate) => {
    setCertificate(certificate);
  };

  const handleDialogDelete = (certificate) => {
    setShouldOpenConfirmationDialog(true);
    setId(certificate?.id);
  };

  const handleDialogDeleteClose = () => {
    setShouldOpenConfirmationDialog(false);
    setCertificate({});
  };

  const handleConfirmDelete = () => {
    dispatch(deleteCertificate(id));
    handleDialogDeleteClose();
  };

  const columns = certificateColumn((rowData) => (
    <div>
      <IconButton onClick={() => handleDialogOpen(rowData)}>
        <Icon fontSize="small" color="primary">
          edit
        </Icon>
      </IconButton>

      <IconButton onClick={() => handleDialogDelete(rowData)}>
        <Icon fontSize="small" color="error">
          delete
        </Icon>
      </IconButton>
    </div>
  ));

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextValidator
              variant="outlined"
              label={
                <span>
                  <span className="text-error">*</span>
                  Tên chứng chỉ
                </span>
              }
              onChange={handleChangInput}
              name="certificateName"
              value={certificate?.certificateName || ""}
              validators={["required"]}
              errorMessages={["Trường này không được để trống"]}
              className="w-100"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextValidator
              variant="outlined"
              label={
                <span>
                  <span className="text-error">*</span>
                  Ngày cấp
                </span>
              }
              type="date"
              value={
                typeof certificate?.issueDate === "string"
                  ? certificate?.issueDate
                  : convertTimeToDate(certificate?.issueDate) || ""
              }
              onChange={handleChangInput}
              className="w-100"
              InputLabelProps={{
                shrink: true,
              }}
              name="issueDate"
              validators={["required"]}
              errorMessages={["Trường này không được để trống"]}
              inputProps={{
                max: moment().format("YYYY-MM-DD"),
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextValidator
              variant="outlined"
              label={
                <span>
                  <span className="text-error">*</span>
                  Lĩnh vực
                </span>
              }
              value={certificate?.field || ""}
              onChange={handleChangInput}
              className="w-100"
              name="field"
              validators={["required"]}
              errorMessages={["Trường này không được để trống"]}
            />
          </Grid>

          {/* Chỉnh Nội dung văn bằng chiếm đủ chiều ngang */}
          <Grid item xs={12}>
            <TextValidator
              variant="outlined"
              label={
                <span>
                  <span className="text-error">*</span>
                  Nội dung văn bằng
                </span>
              }
              value={certificate?.content || ""}
              onChange={handleChangInput}
              className="w-100"
              name="content"
              validators={["required"]}
              errorMessages={["Trường này không được để trống"]}
            />
          </Grid>

          {/* Căn chỉnh nút Lưu và Hủy */}
          <Grid item xs={12}>
            <Grid container justifyContent="flex-end" spacing={2}>
              <Grid item>
                <Button variant="contained" color="primary" type="submit">
                  Lưu
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleCancel}
                >
                  Hủy
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ValidatorForm>

      <CustomTable data={certificate} columns={columns} paging={false} />

      <ConfirmationDialog
        open={shouldOpenConfirmationDialog}
        onConfirmDialogClose={handleDialogDeleteClose}
        onYesClick={() => handleConfirmDelete()}
        title={"Xác nhận xóa"}
        text={"Bạn có chắc chắn muốn xóa bản ghi này?"}
        Yes={"Xóa"}
        No={"Hủy"}
      />

    </div>
  );
}

export default CertificateTab;
