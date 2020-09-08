import React from 'react';
import "./styles.css";

export default function TableHeader(props) {
    return (
        <thead className="table-dark ">
        <tr>
          <th className="thead_test">Xét nghiệm</th>
          <th className="thead_result">Kết quả</th>
          <th className="thead_normal">Giá trị bình thường</th>
          <th className="thead_unit">Đơn vị</th>
          <th className="thead_note">Ghi chú</th>
        </tr>
      </thead>
    )
}
