import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import Waypoint from 'react-waypoint';

import imgBG from './9.科技支撑背景.jpg';
import imgAI from './9科技支撑icon-游戏 (2).png';
import imgController from './9科技支撑icon-游戏 (1).png';
import imgMic from './9.科技支撑icon-话筒.png';
import imgDivider from './icon分隔线.png';
import imgDivider2 from './icon分隔线2.png';

const Section = styled.div`
  position: relative;
  width: 100%;
  padding-top: 51.24%;
  background-image: url(${imgBG});
  background-size: cover;
  color: #000000;

`;

const Title = styled.div.attrs({
  className: 'text-center',
})`
  width: 100%;
  position: absolute;
  top: 13%;
  font-size: 2vw;
  color: #000000;
  line-height: 1.32;
 @media screen and (max-width:414px) {
  font-size:2vw
}

`;

const Desc = styled.div.attrs({
  className: '  text-center',
})`
  width: 100%;
  position: absolute;
  top:21%;
  font-size: 0.8vw;
  color: #000000;
   @media screen and (max-width:414px) {
  font-size:1.2vw
}
`;

const Content = styled.div.attrs({
  className: '  text-center',
})`
  width: 80%;
  left: 10%;
  font-size: 1.14vw;
  position: absolute;
  top: 36.11%;
  color: #000000;
  @media screen and (max-width:414px) {
    top: 45%;
    
 }
`;

const SlideUp = keyframes`
from {
  margin-top: 4.76vw;
  opacity: 0;
}

to {
  margin-top: 0px;
  opacity: 1;
}
`;

const SlideUp2 = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`;

const Img = styled.img.attrs({
  className: 'col',
})`
  margin-top: 4.76vw;
  opacity: 0;
  max-width:17vw;
`;

const AnimateImg = styled.img.attrs({
  className: 'col',
})`
  margin-top:4.76vw;
  opacity: 0;
  max-width:17vw;

  animation-name: ${SlideUp};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-delay: ${(props) => props.delay};
  animation-fill-mode: forwards;
`;

const Caption = styled.figcaption`
  opacity: 0;

`;
const AnimateCaption = styled.figcaption`
  opacity: 0;

  animation-name: ${SlideUp2};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-delay: ${(props) => props.delay};
  animation-fill-mode: forwards;
`;
const Img2 = styled.img.attrs({
  className: 'col',
})`
  margin-top: 4.76vw;
  opacity: 0;
  max-height:17vw;
`;
//  @media screen and (max-width:575px) {
//   width:1.61vw;
//   min-width:1px;
//  }
const AnimateImg2 = styled.img.attrs({
  className: 'col',
})`
  margin-top: 4.76vw;
  opacity: 0;
  max-height:17vw;
  animation-name: ${SlideUp};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-delay: ${(props) => props.delay};
  animation-fill-mode: forwards;
  @media screen and (max-width:414px) {
     max-width: 32px;
     
 }
`;


const MinAnimateImg2 = styled.img.attrs({
  className: 'col',
})`

  margin-top: 4.76vw;
  opacity: 0;
  max-height:17vw;
  animation-name: ${SlideUp};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-delay: ${(props) => props.delay};
  animation-fill-mode: forwards;
  @media screen and (max-width:414px) {
     max-height:15vw;
     padding:0.6rem 0 1.6rem 0;
     width:1px !important;
 }
`;

//     max-width:32px;
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasPlayed: false,
    };
  }

  handleWaypointEnter() {
    if (!this.state.hasPlayed) {
      this.setState({hasPlayed: true});
    }
  }

  handleLine = (minSrc, delay1, defaultSrc, defaultDelay) => {
    let clientWidth = document.documentElement.clientWidth;
    // if(clientWidth<=414){
    //   return  <MinAnimateImg2 src={imgDivider2} delay="0.1s"/>
    // }else{
    //   return <AnimateImg2 src={imgDivider} delay="0.1s"/>
    // }
    console.log(9999);
    if (clientWidth <= 414) {

      console.log('min');
      return <MinAnimateImg2 src={minSrc} delay={delay1}/>
    } else {
      return <AnimateImg2 src={defaultSrc} delay={defaultDelay}/>
      console.log('max');

    }
  }

  render() {
    {
    }
    return (
      <Section>
        <Title>
          <div>强有力的科技支撑</div>
        </Title>
        <Desc>
          <div>人工智能内容推荐、手机变身游戏手柄、语音识别指令……</div>
          <div>中广娱文平台将最先进科技运用到客厅</div>
          <div>带给用户最便捷贴心的视听享受</div>
        </Desc>
        <Content>

          <div className="row">
            <div className="col"/>
            <figure>
              {this.state.hasPlayed ? <AnimateImg src={imgAI} delay="0.1s"/> : <Img src={imgAI}/>}
              {this.state.hasPlayed ? <AnimateCaption delay="0.1s">智能推荐</AnimateCaption> : <Caption>智能推荐</Caption>}
            </figure>
            <figure>
              {/*{this.state.hasPlayed ? <AnimateImg2 src={imgDivider} delay="0.1s"/> : <Img2 src={imgDivider}/>}*/}
              {this.state.hasPlayed ? this.handleLine(imgDivider2, 0.1, imgDivider, 0.1) : <Img2 src={imgDivider}/>}
            </figure>
            <figure>
              {this.state.hasPlayed ? <AnimateImg src={imgController} delay="0.2s"/> : <Img src={imgController}/>}
              {this.state.hasPlayed ? <AnimateCaption delay="0.2s">游戏手柄</AnimateCaption> : <Caption>游戏手柄</Caption>}
            </figure>
            <figure>
              {/*{this.state.hasPlayed ? <AnimateImg2 src={imgDivider} delay="0.2s"/> : <Img2 src={imgDivider}/>}*/}
              {this.state.hasPlayed ? this.handleLine(imgDivider2, 0.2, imgDivider, 0.2) : <Img2 src={imgDivider}/>}
            </figure>
            <figure>
              {this.state.hasPlayed ? <AnimateImg src={imgMic} delay="0.3s"/> : <Img src={imgMic}/>}
              {this.state.hasPlayed ? <AnimateCaption delay="0.3s">语音识别</AnimateCaption> : <Caption>语音识别</Caption>}

            </figure>
            <div className="col"/>
          </div>
          <Waypoint onEnter={(e) => this.handleWaypointEnter(e)}/>
        </Content>
      </Section>
    );
  }
}

export default Page;
