import React from 'react';
import styled from 'styled-components';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import imgBanner from './banner.png';

const Section = styled.div`
position: relative;
width: 100%;
padding-top: 28.66%;
background-image: url(${imgBanner});
background-size: cover;
`;

const Title = styled.div.attrs({
  className: 'text-center',
})`
  width: 100%;
  font-size: 1.904vw;
  position: absolute;
  top: 43%;
  color: #000000;
  
`;

const StyledHeader = styled.div`
  padding-top: 28px;
  padding-bottom: 28px;
  font-size: 16px;
`;

const StyledP = styled.div`
font-size: 14px;
`;
const StyledH = styled.h1`

@media screen and (max-width:414px){
  font-size:21px;
  text-align:center;
  margin-top: -150px !important;
  margin-bottom: 0.5rem;
  height: 170px;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
`;

const data = [
  {id: 1, name: '教育内容运营', location: '北京', type: '运营', count: '1', date: '2017-06-06'},
  {id: 2, name: '游戏内容运营', location: '北京', type: '运营', count: '1', date: '2017-06-06'},
  {id: 3, name: 'JS前端工程师', location: '北京', type: '研发', count: '3', date: '2017-06-06'},
  {id: 4, name: 'JS前端工程师', location: '北京', type: '研发', count: '3', date: '2017-06-06'},
  {id: 5, name: 'JS前端工程师', location: '北京', type: '研发', count: '3', date: '2017-06-06'},
  {id: 6, name: 'JS前端工程师', location: '北京', type: '研发', count: '3', date: '2017-06-06'},
  {id: 7, name: 'JS前端工程师', location: '北京', type: '研发', count: '3', date: '2017-06-06'},
  {id: 8, name: 'JS前端工程师', location: '北京', type: '研发', count: '3', date: '2017-06-06'},
  {id: 9, name: 'JS前端工程师', location: '北京', type: '研发', count: '3', date: '2017-06-06'},
  {id: 10, name: 'JS前端工程师', location: '北京', type: '研发', count: '3', date: '2017-06-06'},
  {id: 11, name: 'JS前端工程师', location: '北京', type: '研发', count: '3', date: '2017-06-06'},
  {id: 12, name: 'JS前端工程师', location: '北京', type: '研发', count: '3', date: '2017-06-06'},
  {id: 13, name: 'JS前端工程师', location: '北京', type: '研发', count: '3', date: '2017-06-06'},
];


export class ExpandRow extends React.Component {

  isExpandableRow(row) {
    return true
  }

  expandComponent() {
    return (
      <div style={{margin: -12, paddingLeft: 48, backgroundColor: 'rgb(250,250,250)'}}>
        <StyledHeader>职位描述：</StyledHeader>
        <StyledP>1.负责不同年龄阶层用户研究，协助业务线产品经理优化用户体验 </StyledP>
        <StyledP>2.独立完成产品规划、方案设计，制定迭代计划、落实跟进并评估线上效果。</StyledP>
        <StyledP>3.与设计和开发团队紧密配合，确保产品按时完成并保证质量</StyledP>

        <StyledHeader>任职要求：</StyledHeader>
        <StyledP>1.年以上移动端产品工作经验，有社交，短视频，资讯类app工作经验者优先；</StyledP>
        <StyledP>2.逻辑思维能力强，具有良好的沟通与语言表达能力，良好的团队协作、执行力与学习能力，以及产品相关文案的撰写能力；</StyledP>
        <StyledP>3.热爱生活，对生活充满好奇心，有创意并有强烈将其落地的愿望。</StyledP>
        <StyledP>4.设计，心理学相关专业优先</StyledP>

        <StyledHeader>申请邮箱：</StyledHeader>
        <a href="mailto:yangyang@babeltime.com" target="_top">yangyang@babeltime.com</a>
      </div>
    );
  }

  render() {
    const options = {
      expandBy: 'column', // Currently, available value is row and column, default is row
      onlyOneExpanding: true,
    };
    return (
      <BootstrapTable data={data}
                      options={options}
                      expandableRow={this.isExpandableRow}
                      expandComponent={this.expandComponent}
                      hover
      >
        <TableHeaderColumn dataField="id" isKey>职位编号·</TableHeaderColumn>
        <TableHeaderColumn dataField="name">职位名称</TableHeaderColumn>
        <TableHeaderColumn dataField="location">工作地点</TableHeaderColumn>
        <TableHeaderColumn dataField="type">职位类别</TableHeaderColumn>
        <TableHeaderColumn dataField="count">招聘人数</TableHeaderColumn>
        <TableHeaderColumn dataField="date">发布时间</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

const Opportunity = () => {
  return (
    <div>
      <Section id="top">
        <Title>
          <div>创造中国客厅娱乐新时代</div>
          <div>有你同行风景更美</div>
        </Title>
      </Section>

      <div className="container" style={{marginTop: 220, marginBottom: 220}}>
        <div className=" row justify-content-center">
          <div className="col-10">
            {/*<h1 className="text-center">社会招聘即将启动，敬请期待!</h1>*/}
            {/* <ExpandRow /> */}
            <StyledH>
              社会招聘即将启动，敬请期待!
            </StyledH>
          </div>
        </div>
      </div>



    </div>
  );
};


export default Opportunity;
