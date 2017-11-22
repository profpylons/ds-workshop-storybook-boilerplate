import React from 'react'
import ReactDOM from 'react-dom'

/*
import { ThemeProvider } from 'styled-components'
import { theme, Button } from '../lib/my-awesome-library'
*/

/*
const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <div>
    <h1>Hello world</h1>
    <Button color="primary">1111</Button>
    </div>
    </ThemeProvider>
  )
}
*/

const App = () => {
  return (
    <h1>Hello world</h1>
  )
}

ReactDOM.render(<App />, document.getElementById('react-root'));
