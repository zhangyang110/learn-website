import React, {Component} from 'react';
import styled from 'styled-components';

// import { NavLink } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';

const BgDiv = styled.div`
  background-color: #2d2d32;
  color: #ffffff;
  padding-top:2.857vw;
  padding-bottom:1.9vw;
`;

const StyledP = styled.p`
  margin-bottom: 0;
  padding-bottom: 1.76vw;
  font-size:0.86vw;
`;

const StyledF = styled.p`
  margin-bottom:0;
  padding-bottom:0.57vw;
  color:#a8a8a8;
  font-size:0.76vw;
`;
const StyledD = styled.p`
    margin-bottom:0;
     padding-bottom:0.57vw;
    color:#a8a8a8;
    font-size:0.76vw;
`;
const StyledB=styled.p`
 margin-bottom:0;
    color:#a8a8a8;
    font-size:0.76vw;
`;
const StyledA = styled.a`
  padding-left: 0.71vw;
  padding-right: 0.71vw;
  color: #ffffff;
  &:hover {
    color: #fb0b00 ;
    text-decoration: none;
  }
`;

const StyledLink = styled(Link) `
  padding-left: 0.71vw;
  padding-right: 0.71vw;
  color: #ffffff;
  &:hover {
  color: #fb0b00;
  text-decoration: none;
}
`;

class Footer extends Component {
  render() {
    return (
      <BgDiv className="text-center">
        <StyledP>
          <StyledLink to="/about">公司简介</StyledLink> | <StyledLink to="/#cocase">合作案例</StyledLink>
          | <StyledLink to="/position">全球招聘</StyledLink> | <StyledLink to="/about">联系我们</StyledLink>
        </StyledP>
        <StyledF>中广娱文传媒有限公司</StyledF>
        <StyledD>北京市海淀区知春路7号致真大厦3号</StyledD>
        <StyledB>京ICP备17065852号-1</StyledB>
      </BgDiv>
    );
  }
}

export default Footer;
