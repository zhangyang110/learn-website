import React from 'react';
import styled from 'styled-components';

import imgBanner from './banner.png';

const Section = styled.div`
position: relative;
width: 100%;
padding-top: 28.66%;
background-image: url(${imgBanner});
background-size: cover;
`;

const Title = styled.div.attrs({
}) `
  font-size: 1.5vw;
  position: absolute;
  left: 49%;
  top: 44.5%;
  color: #000000;
`;

const P = styled.p`
  margin-bottom: 40px;
  font-size: 16px;
  
`;
const About=styled.h1.attrs({
  className: 'about'
}) `
      margin-top: 86px;
      margin-bottom: 50px;
      @media screen and (max-width:414px){
          font-size:21px;
          margin-top: 49px;
           margin-bottom: 23px;
  }
`;
const about = () => (
  <div>
    <Section id="top">
      <Title>
        <div>依托中国广电</div>
        <div>致力于开创中国客厅教育、游戏服务新时代</div>
      </Title>
    </Section>
    <div className="container" style={{ marginBottom: '190' }}>
      <div className=" row justify-content-center" >
        <div className="col-10" >
          {/*<h1 style={{ marginTop: '86', marginBottom: '50' }} className='about'>*/}
            {/*关于我们*/}
          {/*</h1>*/}
          <About>
            关于我们
          </About>
          <P>&#12288;&#12288;中广娱文传媒有限公司成立于2017年，总部位于北京。由中国广电旗下国资企业——中国有线电视网络有限公司与巴别时代等游戏、教育领域的成功民营企业共同出资成立。中国有线做为大股东，是中广娱文的控股公司。中广娱文肩负面向全国大屏用户推荐优秀教育、游戏内容的使命，是中国广电互联互通平台教育、游戏板块的独家建设、运营公司。</P>
          <P>&#12288;&#12288;中广娱文为中国广电互联互通平台打造专业的游戏、教育内容集成平台。该平台通过汇聚顶尖内容和软硬件建设，未来也将服务于IPTV与各类智能电视。</P>
          <P>&#12288;&#12288;中广娱文平台教育板块集成18000小时教育内容，涵盖幼儿、学龄前、K12、成人等领域。为家庭用户带来足不出户的客厅课堂。数千小时国内外精品益智动画、全方位的天赋培养教育内容。并联手国内最优势资源伙伴，投资数亿元资金，全力打造最高水准的教育内容。包括视频节目、同步学习软件、寓教于乐游戏，横跨电视、PC、移动全平台，独家呈现给中广娱文平台用户，成为市场上优势头部内容的提供者。</P>
          <P>&#12288;&#12288;游戏板块集成超过200款专业客厅游戏，涵盖棋牌、体育、动作、角色扮演、射击、竞速、体感全品类。为用户带来远不同于手机游戏的大屏感官震撼享受。联合业内顶级合作伙伴，精选最高品质游戏内容，全新开发或独家移植娱文平台专属的大屏游戏。并投资制作创新的影游联动剧集、综艺、电竞相关节目。形成面向大屏游戏的全产品阵列。</P>
          <P>&#12288;&#12288;中广娱文平台从中国广电覆盖省份起步，逐步触达全国广电用户。并在IPTV、智能电视等全渠道实现覆盖落地。</P>
          <P>&#12288;&#12288;中广娱文平台结合全国广电现有能力，整合线上线下丰富推广资源，为优质内容快速找到精准受众。</P>
          <P>&#12288;&#12288;人工智能内容推荐、手机变身游戏手柄、语音识别指令...,中广娱文平台将最先进科技运用到客厅，通过强有力地科技支撑，带给用户最便捷贴心的视听享受。</P>
          <P>&#12288;&#12288;面对复杂的广电、电信渠道， 开发商常常倍感手足无措。中广娱文平台瞄准行业痛点，开发了功能完善的一站解决SDK，节约开发商宝贵的开发、商务成本。稳定的回款周期，自动化的结算流程，使得中广娱文平台成为大屏内容开发商最值得信赖的理想伙伴。</P>
          <P>&#12288;&#12288;商务联系： <a href="mailto:contact@yuwenmedia.com">contact@yuwenmedia.com</a>  </P>
        </div>
      </div>
    </div>
  </div >
);


export default about;
