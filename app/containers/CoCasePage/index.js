import React, { Component } from 'react';
import Header from 'components/Header';

import CoCase from 'components/CoCase';

import Footer from 'components/Footer';

class CasePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <CoCase />
        <Footer />
      </div>
    );
  }
}

export default CasePage;
