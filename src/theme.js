import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4334eb',
    },
    secondary: {
      main: '#a7a7a7',
    },
    danger: {
      main: '#be1738'
    },
    black: {
      main: '#000000'
    },
  },
});

export default theme;