import React, { useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { formatDate } from "../../../const/utils";


function CertificateTab(props) {
  const { listCertificates } = props;
  const listCertificate=listCertificates?.data
  useEffect(() => {
    console.log("listCertificates", listCertificates);
  },[])
  return (
    <div className="certificate">
      <div className="ml-30 font-size-24 font-weight-500">
        <Typography className="h3 font-weight-bold mb-20">Văn bằng</Typography>
        <TableContainer component={Paper}>
          <Table border="1">
            <TableHead>
              <TableRow>
                <TableCell className="table-head" align="center">STT</TableCell>
                <TableCell className="table-head" align="center">Tên văn bằng</TableCell>
                <TableCell className="table-head" align="center">Ngày cấp</TableCell>
                <TableCell className="table-head" align="center">Lĩnh vực</TableCell>
                <TableCell className="table-head" align="center">Nội dung</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listCertificates.map((certificate, index) => (
                <TableRow align="center"key={certificate?.id}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{certificate?.certificateName}</TableCell>
                  <TableCell align="center">{formatDate(certificate?.issueDate)}</TableCell>
                  <TableCell align="center">{certificate?.field}</TableCell>
                  <TableCell align="center">{certificate?.content}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );

}

export default CertificateTab