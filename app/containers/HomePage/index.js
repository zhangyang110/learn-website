import React, { Component } from 'react';
import Header from 'components/Header';

import {
  Section010,
  Section020,
  Section030,
  Section040,
  Section050,
  Section051,
  Section060,
  Section061,
  Section070,
  Section080,
  Section090,
  Section100,
} from 'components/Home';

import Footer from 'components/Footer';

class HomePage extends Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }
  render() {
    return (
      <div ref={node => this.node = node}>
        <Header />
        <Section010 />
        <Section020 />
        <Section030 />
        <Section040 />
        <Section050 />
        <Section051 />
        <Section060 />
        <Section061 />
        <Section070 />
        <Section080 />
        <Section090 />
        <Section100 />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
