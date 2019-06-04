import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'
import store from './store'
import theme from './theme'
import App from './App'


ReactDOM.render((
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
    <App />
    </MuiThemeProvider>
  </Provider> 
), document.getElementById('root'));