import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import Waypoint from 'react-waypoint';

import imgBG from './2.袋鼠TV平台.jpg';
import imgBook from './2.袋鼠TV平台书.png';
import imgGame from './2.袋鼠TV平台游戏.png';


const Section = styled.div`
position: relative;
width: 100%;
padding-top: 51.24%;
background-image: url(${imgBG});
background-size: cover;
`;

const Title = styled.div.attrs({
  className: 'text-center  ',
}) `
  width: 100%;
  position: absolute;
  top: 14.4%;
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
  top: 22.2%;
  font-size: 0.8vw;
  color: #ffffff;
  @media screen and (max-width:414px) {
  font-size:1.2vw
}
`;


const GameImage = styled.img`
  position: absolute;
  max-width: 26.52%;
  left: 23.19%;
  top: 32.59%;
  margin-top:3.81vw;
`;

const BookImage = styled.img`
  position: absolute;
  max-width: 28.85%;
  left: 47.04%;
  top: 37.03% ;
  margin-top: 3.81vw;
`;

const PlaceHolder = styled.div`
position: absolute;
top: 100% ;
`;

const SlideUp = keyframes`
from {
  margin-top: 3.81vw;
}

to {
  margin-top: 0px;
}
`;

const AnimateGameImage = GameImage.extend`
  margin-top: 0px;
  animation: ${SlideUp} 1s ease-out ;
`;

const AnimateBookImage = BookImage.extend`
  margin-top: 0px;
  animation: ${SlideUp} 1s ease-out ;
`;

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasPlayed: false,
    };
  }

  handleWaypointEnter() {
    this.setState({hasPlayed: true});
  }


  render() {
    return (
      <Section>
        <Title>
          <div>专业的电视游戏、教育内容集成平台</div>
        </Title>
        <Desc>
          <div>中广娱文为中国广电互联互通平台打造专业面向大屏的游戏、教育内容集成平台</div>
          <div>通过汇聚顶尖内容和软硬件建设，未来也将服务于IPTV与各类智能电视</div>
        </Desc>

        <Waypoint
          onEnter={(e) => this.handleWaypointEnter(e)}
        >
          <PlaceHolder/>
        </Waypoint>

        {this.state.hasPlayed ? <AnimateGameImage src={imgGame}/> : <GameImage src={imgGame}/>}
        {this.state.hasPlayed ? <AnimateBookImage src={imgBook}/> : <BookImage src={imgBook}/>}
      </Section>
    );
  }
}

export default Page;

