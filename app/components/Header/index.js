import React, {Component} from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Waypoint from 'react-waypoint';
import {HashLink as Link} from 'react-router-hash-link';

import logo from 'images/logo.png';

const FixedNav = styled.div.attrs({
  className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
  position: fixed;
  z-index:1030;
  left:0;
  right:0;
  background-color: #090a0c !important;
  opacity:${(props) => props.isTransparent ? 0.95 : 1};
  .navbar-brand{
     margin-left: -2.11vw;
     width: 30%;
 } 

 @media screen and (max-width:414px) {
      .navbar-brand{
        min-width:51%;
        margin-left: -0.11vw;
        padding-top: 0; 
        padding-bottom: 0; 
        img{
            width:73%;
        }
      }
      .navbar-toggler{
        font-size: 0.75rem;
      }
      
      + div{
          padding-bottom:44px !important;
       }
  } 
  
`;


class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isTransparent: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  handleWaypointEnter() {
    this.setState({isTransparent: false});
  }

  handleWaypointLeave() {
    this.setState({isTransparent: true});
  }

  render() {
    return (
      <div>
        <FixedNav isTransparent={this.state.isTransparent}>
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="logo"/>
            </a>
            <button className="navbar-toggler" type="button" onClick={() => {
              this.toggle();
            }}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse pull-right ${this.state.isOpen ? 'show' : ''} `}>
              <ul className="navbar-nav ml-auto" style={{marginRight: '-3.1vw'}}>
                <li className="nav-item " onClick={() => {
                  this.toggle();
                }}>
                  <NavLink exact to="/" className="nav-link" activeStyle={{color: '#fb0b00 '}}>首页 </NavLink>
                </li>
                <div style={{width: 66}}></div>


                <li className="nav-item" onClick={() => {
                  this.toggle();
                }}>
                  {/*<NavLink to="/product" className="nav-link" activeStyle={{ color: '#fddd00' }} >产品 </NavLink>*/}
                  <Link to="/#product" className="nav-link">产品</Link>
                </li>
                <div style={{width: 66}}></div>

                <li className="nav-item  " onClick={() => {
                  this.toggle();
                }}>
                  {/*<NavLink to="/cocase" className="nav-link" activeStyle={{ color: '#fddd00' }} >合作案例 </NavLink>*/}
                  <Link to="/#cocase" className="nav-link">合作案例</Link>
                </li>

                <div style={{width: 66}}></div>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link" activeStyle={{color: '#fb0b00 '}}>关于我们 </NavLink>
                </li>
                <div style={{width: 66}}></div>
                <li className="nav-item">
                  <NavLink to="/position" className="nav-link" activeStyle={{color: '#fb0b00 '}}>工作机会 </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </FixedNav>
        <Waypoint
          onEnter={() => this.handleWaypointEnter()}
          onLeave={() => this.handleWaypointLeave()}
        >
          <div style={{paddingBottom: 64}}/>
        </Waypoint>
      </div>
    );
  }
}


export default Header;
