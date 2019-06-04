import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#b6e3ff',
        main: '#82b1ff',
        dark: '#4d82cb',
        contrastText: '#000',
      },
      secondary: {
        light: '#e35138',
        main: '#ad1457',
        dark: '#78002e',
        contrastText: '#fff',
      }
    },
  });

  export default theme;