import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Step from "@material-ui/core/Step";
import StepContent from "@material-ui/core/StepContent";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    fontFamily: "'Quicksand', sans-serif",
    fontWeight: 500,
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    fontFamily: "'Quicksand', sans-serif",
    fontWeight: 600,
    padding: theme.spacing(3),
  },
  steps: {
    "& span": {
      fontFamily: "'Quicksand', sans-serif",
      fontWeight: 600,
      fontSize: 16,
    },
  },
  tittle: {
    fontFamily: "'Quicksand', sans-serif",
    fontWeight: 600,
    textAlign: "center",
    padding: "30px 10px",
    color: theme.palette.secondary.main,
    background:
      "linear-gradient(to top,rgb(243, 242, 242,0.5),transparent 100%)",
  },
  content: {
    fontFamily: "'Quicksand', sans-serif ",
    fontWeight: 500,
    fontSize: 15,
  },
  reset: {
    fontFamily: "'Quicksand', sans-serif ",
    fontWeight: 500,
    fontSize: 16,
  },
}));

function getSteps() {
  return [
    "Bước 1 : Đăng ký thông tin",
    "Bước 2 : Lấy mẫu",
    "Bước 3 : Phân tích mẫu và trả kết quả",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return ` Khách hàng gửi yêu cầu lấy máu xét nghiệm tại nhà. Nhân viên sẽ tiếp nhận thông tin về ngày, giờ lấy máu xét nghiệm, tư vấn những việc cần làm trước khi lấy máu. Đồng thời, báo giá dịch vụ lấy máu xét nghiệm tại nhà.`;
    case 1:
      return "Đúng thời gian đã hẹn trước, kỹ thuật viên xét nghiệm sẽ đến tận nhà để lấy máu.";
    case 2:
      return `Mẫu được phân tích và trả kết quả kèm theo tư vấn của bác sĩ theo lịch hẹn, đồng thời kết quả sẽ được cập nhật trên hệ thống website, dễ dàng thuận tiện cho việc hồi cứu , xem lại kết quả cũ`;
    default:
      return "Unknown step";
  }
}

export default function RegistrationTutorial() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
      <div >
        <Container maxWidth="lg" className={classes.root}>
          <Paper>
            <div className={classes.tittle}>
              <h4>Các bước xét nghiệm máu tại nhà</h4>
            </div>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel className={classes.steps}>{label}</StepLabel>
                  <StepContent>
                    <Typography className={classes.content}>
                      {getStepContent(index)}
                    </Typography>
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          variant="contained"
                          size="small"
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Quay lại
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          color="secondary"
                          onClick={handleNext}
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1
                            ? "Kết thúc"
                            : "Tiếp tục"}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} className={classes.resetContainer}>
                <Typography className={classes.reset}>
                  Click để xem lại các bước làm xét nghiệm tại nhà
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleReset}
                  className={classes.button}
                >
                  Xem lại
                </Button>
              </Paper>
            )}
          </Paper>
        </Container>
      </div>

  );
}
