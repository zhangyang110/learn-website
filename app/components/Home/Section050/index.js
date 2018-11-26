import React from 'react';
import styled from 'styled-components';

import imgBG from './5教育频道-儿童.jpg';

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
  left: 21.4%;
  top: 26%;
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
  left: 21.4%;
  top: 34%;
  font-size: 0.8vw;
  color: #000000;
  @media screen and (max-width:414px) {
    font-size:1.2vw
}
`;

const Page = () => (
  <Section>
    <Title>
      <div>精品益智动画</div>

    </Title>
    <Desc>
      <div>数千小时国内外精品益智动画、全方位的天赋培养教育内容</div>
      <div>伴随宝宝健康成长每一天</div>

    </Desc>
  </Section>
);


export default Page;
