import { createMuiTheme} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: green[500],
      },
    },
  });
export default theme