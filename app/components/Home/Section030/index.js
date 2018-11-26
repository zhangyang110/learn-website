import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';

import imgBG from './3tv背景.png';
import imgTV from './3.tv.png';
import imgEdu from './3.教育图.png';
import imgGame from './3.游戏图.png';
import imgCartoon from './3.娱文卡通.png';


const Section = styled.div`
  position: relative;
  width: 100%;
  padding-top: 51.24%;
  background-image: url(${imgBG});
  background-size: cover;
`;

const Title = styled.div.attrs({
  className: 'text-center',
})`
  width:100%;
  position: absolute;
  top: 82%;
  font-size: 2vw;
  color: #000000;
  line-height: 1.15;
  @media screen and (max-width:414px) {
      font-size:2vw;
      top: 72%;
      margin-bottom:0;
      
}
`;

const Desc = styled.div.attrs({
  className: 'text-center',
})`
  width: 100%;
  position: absolute;
  top: 90.4%;
  font-size: 0.8vw;
  color: #000000;
  @media screen and (max-width:414px) {
  font-size:1.2vw;
  top: 84%;
  margin-bottom:0;
}
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const FadeOut = keyframes`
from {
  opacity: 1;
}
to{
  opacity: 0;
}
`;

const FadeInContentImage = styled.img`
  position: absolute;
  max-width:49%;
  left: 25.5%;
  top: 15.3% ;
  opacity: 1;
  animation: ${FadeIn}  1s linear;
  @media screen and (max-width:414px){
       max-width: 40%;
       left: 30.1%;
       top: 13.7%;
  }
`;

const FadeOutContentImage = styled.img`
  position: absolute;
  max-width:49%;
  left: 25.5%;
  top: 15.3% ;
  opacity: 0;
  animation: ${FadeOut}  1s linear;
  @media screen and (max-width:414px){
          max-width: 40%;
          left: 30.1%;
             top: 13.7%;

  }
`;
const BgImg = styled.img`
  position: absolute; 
  max-width: 52%; 
  left: 24%;
  top: 14%;
  src:${(props) => props.src};
  
  @media screen and (max-width:414px){
       max-width: 42%; 
       left: 29%;
       top: 13%;
  }
`
const StyledSpan1=styled.span`
    role:"link";
    tab-index:-1;
    cursor: pointer;
    font-size: 1.2vw;
    color: #ffffff;
    background-color: #fb0b00;
    border-color: #fb0b00;
    margin: 1vw;
    padding: 0.4vw 1vw 0.4vw 1vw;
    border-radius: 2vw;
    width: 4.57vw;
    @media screen and (max-width:414px){
            padding: 2px 1vw 1px ;
            border-radius: 20px;

  }
`
const StyledSpan2=styled.span`
      width: 4.57vw;
      border-radius: 2vw;
      cursor: pointer;
      font-size: 1.2vw;
      color: #666666;
      margin: 1vw;
      padding: 0.4vw 1vw 0.4vw 1vw;
      @media screen and (max-width:414px){
        padding: 2px 1vw 1px; 
  }
`
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {content: 'cartoon'};
  }

  showContent(name) {
    this.setState({
      content: name,
    });
  }

  /**
   * 根据当前选择的类型名称返回对应的描述文字
   */
  switchDescribeByContent(name) {
    const result = [];
    if (name === 'edu') {
      result.push(
        <div>
          <div>教育板块集成18000小时教育内容，涵盖幼儿、学龄前、K12、成人等领域</div>
          <div>为家庭用户带来足不出户的客厅课堂</div>
        </div>)

    }
    if (name === 'game') {
      result.push(
        <div>
          <div>游戏板块集成超过200款专业客厅游戏，涵盖棋牌、体育、动作、角色扮演、射击、竞速、体感全品类</div>
          <div>享受远不同于手机游戏的大屏感官震撼</div>
        </div>)
    }
    if (name === 'cartoon') {
      result.push(
        <div>
          <div>娱文卡通是中广娱文针对0-6岁儿童打造的专业卡通轮播频道。</div>
          <div>汇聚国内外一线卡通明星，弥补广电卡通内容不足的劣势。</div>
          <div>2018年4月起，娱文卡通将在各地智能机顶盒的中国广电“全国视频云”专区先行试播。</div>
        </div>)
    }
    return result;
  }


  render() {
    const styleSelected = {
      // padding: '0.6vw 1vw 0.4vw 1vw',
      cursor: 'pointer',
      fontSize: '1.2vw',
      color: '#ffffff',
      backgroundColor: '#fb0b00',
      borderColor: '#fb0b00',
      margin: '1vw',
      padding: '0.4vw 1vw 0.4vw 1vw',
      borderRadius: '2vw',
      // display: 'inline-block',
      // height: '1.71vw',
      width: '4.57vw',
      // margin: '0 1vw',
      // textAlign:'center',
      // lineHeight:'1.71vw',
    };
    const styleNormal = {
      // display: 'inline-block',
      // height: '1.71vw',
      // lineHeight:'1.71vw',
      width: '4.57vw',
      // textAlign:'center',
      borderRadius: '2vw',
      cursor: 'pointer',
      fontSize: '1.2vw',
      color: '#666666',
      margin: '1vw',
      // margin: '0 1vw',
      // padding: '0.25vw 1vw 0.25vw 1vw'
      padding: '0.4vw 1vw 0.4vw 1vw',

    };
    return (

      <Section id="product">

        {/*<img src={imgTV} alt="  tv" style={{position: 'absolute', maxWidth: '52%', left: '24%', top: '14%'}}/>*/}
        <BgImg src={imgTV}></BgImg>
        {this.state.content === 'edu' ? <FadeInContentImage src={imgEdu}/> : <FadeOutContentImage src={imgEdu}/>}
        {this.state.content === 'game' ? <FadeInContentImage src={imgGame}/> : <FadeOutContentImage src={imgGame}/>}
        {this.state.content === 'cartoon' ? <FadeInContentImage src={imgCartoon}/> :
          <FadeOutContentImage src={imgCartoon}/>}
        <Title>
          <p>
            {
              this.state.content=='cartoon'?<StyledSpan1 >娱文卡通</StyledSpan1 >:<StyledSpan2 onClick={() => this.showContent('cartoon')}>娱文卡通</StyledSpan2>
            }
            {
              this.state.content=='edu'?<StyledSpan1 >教育</StyledSpan1 >:<StyledSpan2 onClick={() => this.showContent('edu')}>教育</StyledSpan2>
            }
            {
              this.state.content=='game'?<StyledSpan1 >游戏</StyledSpan1 >:<StyledSpan2 onClick={() => this.showContent('game')}>游戏</StyledSpan2>
            }

            {/*<span*/}
              {/*role="link"*/}
              {/*tabIndex="-1"*/}
              {/*style={this.state.content === 'cartoon' ? styleSelected : styleNormal}*/}
              {/*onClick={() => this.showContent('cartoon')}*/}
            {/*>娱文卡通*/}
            {/*</span>*/}
            {/*<span*/}
              {/*role="link"*/}
              {/*tabIndex="-1"*/}
              {/*style={this.state.content === 'edu' ? styleSelected : styleNormal}*/}
              {/*onClick={() => this.showContent('edu')}*/}
            {/*>教育*/}
            {/*</span>*/}
            {/*<span*/}
              {/*role="link"*/}
              {/*tabIndex="-1"*/}
              {/*style={this.state.content === 'game' ? styleSelected : styleNormal}*/}
              {/*onClick={() => this.showContent('game')}*/}
            {/*>游戏*/}
            {/*</span>*/}
          </p>
        </Title>
        <Desc>

          {this.switchDescribeByContent(this.state.content)}

        </Desc>
      </Section>
    );
  }
}

export default Page;
