import { Typography } from '@material-ui/core';
import React from 'react'
import "../../../views/_information.scss";
import "../../../views/_form.scss";


const ConfirmLetter = (props) => {
    const { employee, title, day, year, month, font } = props
    return (
        <div className="footer-container">
            <div className="flex-center">
                <Typography
                    className={font ? 'ff fw text-overflow line-height-25 italic' : 'fw text-overflow line-height-25 italic'}
                >
                    Hà Nội, Ngày {day ? day : new Date().getDate()} tháng {month ? month : new Date().getMonth() + 1}{' '}
                    năm {year ? year : new Date().getFullYear()}
                </Typography>
            </div>

            <h4 className="footer-label">{title ? 'Giám đốc' : 'Người làm đơn'}</h4>
            <span className="footer-sub-label">{title ? '(Ký tên, đóng dấu)' : '(Ký, ghi rõ họ tên)'}</span>
            <div className="footer-signature">{employee?.name}</div>
        </div>
    )
}

export default ConfirmLetter;
