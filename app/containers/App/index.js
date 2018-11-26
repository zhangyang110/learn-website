/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ProductPage from 'containers/ProductPage/Loadable';
import CoCasePage from 'containers/CoCasePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import PositionPage from 'containers/PositionPage/Loadable';

const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  // padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - 中广娱文"
        defaultTitle="中广娱文"
      >
        <meta name="description" content="中广娱文" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/*<Route path="/product" component={ProductPage} />*/}
        {/*<Route path="/cocase" component={CoCasePage} />*/}
        <Route path="/about" component={AboutPage} />
        <Route path="/position" component={PositionPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}
