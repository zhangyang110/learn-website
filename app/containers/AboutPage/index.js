import React, { Component } from 'react';
import Header from 'components/Header';

import About from 'components/About';

import Footer from 'components/Footer';

class AboutPage extends Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }

  render() {
    return (
      <div ref={node => this.node = node}>
        <Header />
        <About />
        <Footer />
      </div>
    );
  }
}

export default AboutPage;
