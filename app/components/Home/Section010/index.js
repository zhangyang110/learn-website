import React from 'react';
import styled from 'styled-components';

import imgBG from './bg.jpg';

const Section = styled.div`
  position: relative;
  width: 100%;
  padding-top: 51.24%;
  background-image: url(${imgBG});
  background-size: cover;
`;

const Title = styled.div.attrs({
  className: 'text-left',
}) `
  position: absolute;
  left: 44.1%;
  top: 9.2%;
  font-size: 2vw;
  color: #ffffff;
  line-height: 1.32;
   @media screen and (max-width:414px) {
      font-size:2vw
    }
`;

const Desc = styled.div.attrs({
  className: '  text-left',
}) `
  position: absolute;
  left: 44.1%;
  top: 27.5%;
  font-size: 0.8vw;
  color: #ffffff;
   @media screen and (max-width:414px) {
      font-size:1.2vw
    }
`;

const Page = () =>
  (<Section>
    <Title>
      <div>中广娱文</div>
      <div>依托中国广电</div>
      <div>致力于开创中国客厅教育、游戏服务新时代</div>
    </Title>
    <Desc>
      <div>中广娱文传媒有限公司</div>
      <div>为中国广电旗下企业，由国有资本控股</div>
      <div>肩负面向全国大屏用户推荐优秀教育、游戏内容的使命</div>
      <div>是中国广电互联互通平台教育、游戏板块的独家建设、运营公司</div>
    </Desc>
  </Section>);


export default Page;
