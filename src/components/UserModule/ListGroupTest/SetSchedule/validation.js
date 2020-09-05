// const validate = (values) => {
//   const error = {};
//   const { phoneNumber } = values;
//   if (!phoneNumber) {
//     error.phoneNumber = "Vui lòng không bỏ trống số điện thoại";
//   } else {
//     const numberLength = phoneNumber.trim().length;
//     if (numberLength > 10) {
//       error.phoneNumber = ` Bạn nhập đến ${numberLength} số, xin vui lòng kiểm tra `;
//     }
//     if (numberLength < 10) {
//       error.phoneNumber = ` Bạn mới chỉ nhập ${numberLength} số, xin vui lòng kiểm tra `;
//     }
//     if (phoneNumber && isNaN(Number(phoneNumber))) {
//       error.phoneNumber =
//         "Số điện thoại bạn nhập có chứa ký tự, vui lòng kiểm tra lại";
//     }
//   }

//   return error;
// };

// export default validate;
