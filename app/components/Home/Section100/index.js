import React from 'react';
import styled from 'styled-components';

import imgBG from './10.合作伙伴支撑.jpg';

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
  color: #ffffff;
   line-height: 1.32;
  @media screen and (max-width:414px) {
  font-size:2vw
}
`;

const Desc = styled.div.attrs({
  className: 'text-left',
}) `
  position: absolute;
  left: 21.4%;
  top: 34%;
  font-size: 0.8vw;
  color: #ffffff;
  @media screen and (max-width:414px) {
  font-size:1.2vw
}
`;


const Page = () => (
  <Section id="cocase">

    <Title>
      <div>全方位的合作伙伴支撑</div>
    </Title>
    <Desc>
      <div>面对复杂的广电、电信渠道， 开发商常常手足无措？</div>
      <div>中广娱文平台拥有功能完善的一站解决SDK，节约您宝贵的开发、商务成本</div>
      <div>稳定的回款周期，自动化的结算流程，</div>
      <div>使得中广娱文平台成为大屏内容开发商最值得信赖的理想伙伴</div>
    </Desc>
  </Section>
);


export default Page;

