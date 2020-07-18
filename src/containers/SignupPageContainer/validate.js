const validate = (values) => {
  const error = {};
  const { lastnameAndName,phoneNumber, username, password, repassword} = values;
  if (!lastnameAndName) {
    error.lastnameAndName = "You don't leave a bank";
  } else if (lastnameAndName.trim().length < 5) {
    error.lastnameAndName = "Must be 5 characters or over";
  }
  if (!phoneNumber) {
    error.phoneNumber = "You don't leave a bank";
  } else if (phoneNumber.trim().length < 5) {
    error.phoneNumber = "Must be 5 characters or over";
  }
  if (!username) {
    error.username = "You don't leave a bank";
  } else if (username.trim().length < 5) {
    error.username = "Must be 5 characters or over";
  }
  if (!password) {
    error.password = "You don't leave a bank";
  } else if (password.trim().length < 5) {
    error.password = "Must be 5 characters or over";
  }

  if (!repassword) {
    error.repassword = "You don't leave a bank"
  } else if (repassword.length < 5) {
    error.repassword = "Must be 5 characters or over"
  }



  return error;
};

export default validate;
