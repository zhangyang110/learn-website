import React from 'react';
import styled from 'styled-components';

import imgBG from './4.教育频道.jpg';

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
  left: 34.8%;
  top: 18%;
  font-size: 2vw;
  color: #000000;
  line-height: 1.32;
  @media screen and (max-width:414px) {
  font-size:2vw
}
`;


const Desc = styled.div.attrs({
  className: '  text-left',
}) `
  position: absolute;
  left: 34.8%;
  top: 31%;
  font-size: 0.8vw;
  color: #000000;
  
  @media screen and (max-width:414px) {
  font-size:1.2vw
}
`;

const Page = () => (
  <Section>
    <Title>
      <div>教育板块</div>
      <div>集成18000小时教育内容</div>
    </Title>
    <Desc>
      <div>涵盖幼儿、学龄前、K12、成人等领域</div>
      <div>为您带来足不出户的客厅课堂</div>

    </Desc>
  </Section >
);


export default Page;
