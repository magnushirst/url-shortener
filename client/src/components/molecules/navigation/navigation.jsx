import React from 'react';

import Logo from '../../../assets/logo.png'
import { Button } from '../../atoms/button/button';
import {Link} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledH1 = styled.h1`
  font-weight: 900;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
`

export const Navigation = () => (
  <header>
    <Wrapper className="wrapper">
      <div>
        <Link to={'/'}>
            <img alt={'logo'} src={Logo} height={'30'} width={'30'}/>
        </Link>
        <StyledH1>Just a URL Shortener</StyledH1>
      </div>

      <Link to={'/all-links'}>
        <Button label="All URLs" />
      </Link>

    </Wrapper>
  </header>
);


Navigation.propTypes = {
};

Navigation.defaultProps = {
};
