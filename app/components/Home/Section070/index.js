import React from 'react';
import styled from 'styled-components';

import imgBG from './7.地图.jpg';

const Section = styled.div`
  position: relative;
  width: 100%;
  padding-top: 51.24%;
  background-image: url(${imgBG});
  background-size: cover;
`;

const Title = styled.div.attrs({
  className: 'text-center',
}) `
  width: 100%;
  position: absolute;
  top: 10%;
  font-size: 2vw;
  color: #ffffff;
  line-height: 1.32;
  @media screen and (max-width:414px) {
  font-size:2vw
  }

`;

const Desc = styled.div.attrs({
  className: '  text-center',
}) `
  width: 100%;
  position: absolute;
  top: 18%;
  font-size: 0.8vw;
  color: #ffffff;
  @media screen and (max-width:414px) {
font-size:1.2vw
}
`;

const Page = () => (
  <Section>
    <Title>
      <div>广泛的落地渠道</div>
    </Title>
    <Desc>
      <div>中广娱文平台从中国广电覆盖省份起步，逐步触达全国广电用户</div>
      <div>并在IPTV、智能电视等全渠道实现覆盖</div>

    </Desc>
  </Section >
);


export default Page;

