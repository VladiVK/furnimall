import React from 'react';
import { Wrapper } from './style';
const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span>FurniMall</span>
      </h5>
      <h5>all rights reserved</h5>
    </Wrapper>
  );
};

export default Footer;
