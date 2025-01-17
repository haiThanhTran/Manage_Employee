import React, { useEffect } from 'react'
import {
  Avatar,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import ConstantList from "app/appConfig";
import Paper from "@material-ui/core/Paper";
import { GENDER, RELATIONSHIP } from "app/const/EmployeeConst";
import { formatDate } from "../../../const/utils";
import moment from "moment";
import "../../../../app/_ProfileTab.scss";



function ProfileTab(props) {
  const { employeeData, employeeFamily } = props;
  const employee = employeeData?.data || {};
  const listFamily = employeeFamily|| [];

  return (
    <>
      <div className="resume-wrapper">
        <Grid container spacing={2} justify="space-between">
          <Grid item md={4}>
            <div className="resume-image">
              <img
                alt="avatar"
                src={employee?.image || "/assets/images/avatar.jpg"}
              />
            </div>
          </Grid>
          <Grid item md={8}>
            <h3 className="resume-sub-heading">
              Cộng hòa xã hội chủ nghĩa việt nam
            </h3>
            <h4 className="resume-sub-heading heading-underline">
              Độc lập - Tự do - Hạnh phúc
            </h4>
            <h3 className="resume-heading">Sơ yếu lý lịch</h3>
            <h4 className="resume-sub-heading">Tự thuật</h4>
          </Grid>
        </Grid>
        <div className="resume-body">
          <div className="resume-information">
            <h4 className="information-heading">I.Thông tin bản thân</h4>
            <div className="information-details">
              <Grid container spacing={2}>
                <Grid item md={8} lg={8} sm={8} className="flex">
                  <span className="detail-tittle">
                    1. Họ và tên(chữ in hoa):
                  </span>
                  <span className="detail-content uppercase underline-dashed">
                    {employee?.name}
                  </span>
                </Grid>
                <Grid item md={4} lg={4} sm={4} className="flex">
                  <span className="detail-tittle">Nam/Nữ:</span>
                  <span className="detail-content underline-dashed">
                    Giới Tính
                    {GENDER[employee?.gender]?.name}
                  </span>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item md={12} lg={12} sm={12} className="flex">
                  <span className="detail-tittle">2. Ngày sinh:</span>
                  <span className="detail-content underline-dashed">
                    {moment(new Date(employee?.dateOfBirth)).format(
                      "DD/MM/YYYY"
                    )}
                  </span>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item md={12} lg={12} sm={12} className="flex">
                  <span className="detail-tittle">
                    3. Nơi đăng ký hộ khẩu thường trú:
                  </span>
                  <span className="detail-content underline-dashed">
                    {employee?.address}
                  </span>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item md={12} lg={12} sm={12} className="flex">
                  <span className="detail-tittle">4. Điện thoại liên hệ:</span>
                  <span className="detail-content underline-dashed">
                    {employee?.phone}
                  </span>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item md={6} lg={6} sm={6} className="flex">
                  <span className="detail-tittle">5. Dân tộc:</span>
                  <span className="detail-content underline-dashed">
                    {employee?.ethnic}
                  </span>
                </Grid>
                <Grid item md={6} lg={6} sm={6} className="flex">
                  <span className="detail-tittle">Tôn giáo:</span>
                  <span className="detail-content underline-dashed">
                    {employee?.religion}
                  </span>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item md={6} lg={6} sm={6} className="flex">
                  <span className="detail-tittle">6. Số cmnd/cccd:</span>
                  <span className="detail-content underline-dashed">
                    {employee?.citizenIdentificationNumber}
                  </span>
                </Grid>
                <Grid item md={3} lg={3} sm={3} className="flex">
                  <span className="detail-tittle">Ngày cấp:</span>
                  <span className="detail-content underline-dashed">
                    {moment(new Date(employee?.dateOfIssuanceCard)).format(
                      "DD/MM/YYYY"
                    )}
                  </span>
                </Grid>
                <Grid item md={3} lg={3} sm={3} className="flex">
                  <span className="detail-tittle">Nơi cấp :</span>
                  <span className="detail-content underline-dashed">
                    {employee?.placeOfIssueCard}
                  </span>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="resume-family">
            <h4 className="family-heading">II. Quan hệ gia đình</h4>
            <div className="family-detail-table">
              <TableContainer>
                <Table border="1">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align="center"
                        width="6%"
                        className="table-head"
                      >
                        STT
                      </TableCell>
                      <TableCell
                        align="center"
                        width="22%"
                        className="table-head"
                      >
                        Họ và tên
                      </TableCell>
                      <TableCell
                        align="center"
                        width="15%"
                        className="table-head"
                      >
                        Ngày sinh
                      </TableCell>
                      <TableCell
                        align="center"
                        width="15%"
                        className="table-head"
                      >
                        Quan hệ
                      </TableCell>
                      <TableCell
                        align="center"
                        width="15%"
                        className="table-head"
                      >
                        Số điện thoại
                      </TableCell>
                      <TableCell
                        align="center"
                        width="15%"
                        className="table-head"
                      >
                        Số cmnd/cccd
                      </TableCell>
                      <TableCell
                        align="center"
                        width="18%"
                        className="table-head"
                      >
                        Địa chỉ
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {listFamily?.map((familiy, index) => (
                      <TableRow key={familiy?.id}>
                        <TableCell align="center" width={50}>
                          {index + 1}
                        </TableCell>
                        <TableCell align="center">{familiy?.name}</TableCell>
                        <TableCell align="center" width={100}>
                          {formatDate(familiy?.dateOfBirth)}
                        </TableCell>
                        <TableCell align="center">
                          {
                            RELATIONSHIP.find(
                              (item) => item.value === familiy?.relationShip
                            ).name
                          }
                        </TableCell>
                        <TableCell align="center">
                          {familiy?.citizenIdentificationNumber}
                        </TableCell>
                        <TableCell align="center">
                          {familiy?.phoneNumber}
                        </TableCell>
                        <TableCell align="center">{familiy?.address}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
          <div className="resume-reassurance">
            <p className="mt-30 text-indent">
              Tôi xin cam đoan bản khai sơ yếu lý lịch trên là đúng sự thật, nếu
              có điều gì không đúng tôi chịu trách nhiệm trước pháp luật về lời
              khai của mình.
            </p>
          </div>
        </div>
        <div className="resume-footer">
          <div className="footer-container">
            <div className="resume-date">
              <span className="reassurance-place">Tp.Hà Nội</span>,
              <span className="reassurance-day">
                <span className="date-tittle">ngày</span>
                <span className="date-content underline-dashed">
                  {
                    moment(new Date(employee?.submitDay))
                      .format("DD/MM/YYYY")
                      .split("/")[0]
                  }
                </span>
              </span>
              <span className="reassurance-month">
                <span className="date-tittle">tháng</span>
                <span className="date-content underline-dashed">
                  {
                    moment(new Date(employee?.submitDay))
                      .format("DD/MM/YYYY")
                      .split("/")[1]
                  }
                </span>
              </span>
              <span className="reassurance-year">
                <span className="date-tittle">năm</span>
                <span className="date-content underline-dashed">
                  {
                    moment(new Date(employee?.submitDay))
                      .format("DD/MM/YYYY")
                      .split("/")[2]
                  }
                </span>
              </span>
            </div>
            <h4 className="footer-label">Người khai</h4>
            <span className="footer-sub-label">(kí và ghi rõ họ tên)</span>
            <div className="footer-signature">{employee?.name}</div>
          </div>
        </div>
      </div>
    </>
  );

}

export default ProfileTab