import React, { Component } from 'react';
import Header from 'components/Header';

import Position from 'components/Position';

import Footer from 'components/Footer';

class PositionPage extends Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }
  render() {
    return (
      <div ref={node => this.node = node}>
        <Header />
        <Position />
        <Footer />
      </div>
    );
  }
}

export default PositionPage;
