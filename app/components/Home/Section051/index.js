import React from 'react';
import styled from 'styled-components';

import imgBG from './巴别小精灵.jpg';

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
  top: 13%;
  font-size: 2vw;
  color: #000000;
  line-height: 1.32;
 @media screen and (max-width:414px) {
  font-size:2vw;

}
`;
//  font-size:2.6vw
const Desc = styled.div.attrs({
  className: '  text-left',
}) `

  position: absolute;
  left: 21.4%;
  top: 21%;
  font-size: 0.8vw;
  color: #000000;
  @media screen and (max-width:414px) {
  font-size:1.2vw;
}
`;
//    left: 21.4%;
const Page = () => (
  <Section >
    <Title>
      <div>独家自制精品教育内容</div>

    </Title>
    <Desc>
      <div>中广娱文联手国内最优势资源伙伴，投资数亿元资金，全力打造最高水准的教育内容</div>
      <div>包括视频节目、同步学习软件、寓教于乐游戏，横跨电视、PC、移动全平台，</div>
      <div>独家呈现给中广娱文平台用户，成为市场上优势头部内容的提供者</div>
    </Desc>
  </Section >
);


export default Page;
