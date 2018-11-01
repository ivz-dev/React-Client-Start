import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { Wrapper } from './components/common'
import Header from './components/header'

// Pages import 
import Main from './pages/Main'
import Categories from './pages/Categories'

const theme = {
  mainColor: "#fff"
}


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
         <Normalize />
          <Header />
          <Wrapper>
            <Route exact path='/' component={Main} />
            <Route path='/categories' component={Categories} />
          </Wrapper>
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
