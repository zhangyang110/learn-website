import React from 'react';
import styled from 'styled-components';

import imgBG from './8.推广资源.jpg';

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
  left: 56.6%;
  top: 54%;
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
  left: 56.6%;
  top: 62%;
  font-size: 0.8vw;
  color: #ffffff;
  @media screen and (max-width:414px) {
font-size:1.2vw
}
`;

const Page = () => (
  <Section >
    <Title>
      <div>丰富的推广资源</div>

    </Title>
    <Desc>
      <div>结合全国广电现有能力，整合线上线下丰富推广资源</div>
      <div>为优质内容快速找到精准受众</div>

    </Desc>
  </Section >
);

export default Page;

