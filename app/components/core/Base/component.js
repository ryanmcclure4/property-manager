import React, { Component } from 'react';
import { Main } from 'components';
import Navigation from './Navigation';
import { Wrapper } from './style';
import { ThemeProvider } from 'styled-components';
import { theme } from 'general';

class Base extends Component {
  render() {
    const { data } = this.props;
    console.log('DATA', data);
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Navigation />
          {data.business.loading ?
            'LOADING...' :
            <Main />
          }
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default Base;
