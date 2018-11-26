import React from 'react';
import styled, { keyframes } from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';

import imgBG from './6.赛车背景.jpg';
import imgCar from './6.赛车 百分之百.png';

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
  top: 8.5%;
  font-size: 2vw;
  color: #ffffff;
  line-height: 1.32;
 @media screen and (max-width:414px) {
  font-size:2zvw
}
`;

const Desc = styled.div.attrs({
  className: '  text-center',
}) `
  width: 100%;
  position: absolute;
  top: 21.6%;
  font-size: 0.8vw;
  color: #ffffff;
  @media screen and (max-width:414px) {
    font-size:1.2vw
}
`;

const ScaleUp = keyframes`
from { transform: scale(0.8); }
to   { transform: scale(1); }
`;

const ContentImage = styled.img`
  position: absolute;
  max-width: 63%;
  transform: scale(0.8);
  left: 19.80%;
  top: 28.14% ;
`;

const AnimateContentImage = ContentImage.extend`
  position: absolute;
  max-width: 70% ;
  transform: scale(1);
  left: 19.80%;
  top: 28.14% ;
  animation: ${ScaleUp} 0.4s ease-out;
`;

const Page = () => (
  <Section>
    <VisibilitySensor>
      {({ isVisible }) =>
        isVisible ? <AnimateContentImage src={imgCar} /> : <ContentImage src={imgCar} />
      }
    </VisibilitySensor>
    <Title>
      <div>游戏板块</div>
      <div>集成200余款高品质大屏游戏</div>
    </Title>
    <Desc>
      <div>专为电视大屏打造，涵盖棋牌、体育、动作、角色扮演、射击、竞速、体感全品类</div>
      <div>享受远不同于手机游戏的大屏感官震撼</div>
    </Desc>

  </Section >
);

export default Page;

