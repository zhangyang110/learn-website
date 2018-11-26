import React from 'react';
import styled, { keyframes } from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';

import imgBG from './放开那三国.jpg';


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
  top: 12.6%;
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
  top: 20.5%;
  font-size: 0.8vw;
  color: #ffffff;
  @media screen and (max-width:414px) {
font-size:1.2vw
}
`;


const Page = () => (
  <Section>

    <Title>
      <div>独家自制大屏游戏及相关娱乐视频节目</div>
    </Title>
    <Desc>
      <div>联合业内顶级合作伙伴，精选最高品质游戏内容</div>
      <div>全新开发或独家移植娱文平台专属大屏游戏</div>
      <div>投资制作创新的影游联动剧集、综艺、电竞相关节目</div>
    </Desc>

  </Section >
);

export default Page;

