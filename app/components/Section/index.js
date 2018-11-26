import React, { Component } from 'react';

import styled from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';


export const Section = styled.div`
  position: relative;
  z-index: 1;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const BGImage = styled.img`
max-width: 100%;
height: auto;
`;



export const Billboard = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;


export const SectionContent = styled.div`
margin-left: auto;
margin-right: auto;
width: 100%;
margin-left: auto;
margin-right: auto;
position: relative;
z-index: 1;
height: 100%;
text-align: center;
`;

export function withVisibleAnimation(WrappedComponent, anim) {
  return class extends Component {

    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return (
        <VisibilitySensor>
          {({ isVisible }) =>
            <WrappedComponent {...this.props} style={isVisible ? anim : {}} />
          }
        </VisibilitySensor>
      );
    }
  };
}
