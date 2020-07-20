import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro';

import Home from '../Home/Home';
import PastView from '../Past/PastView';
import HowView from '../How/HowView';

const ContentWrapper = styled.div`
  grid-area: content;
  overflow: hidden auto;
`;

const ContentView = () => (
  <ContentWrapper>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/past" component={PastView} />
      <Route exact path="/how" component={HowView} />
      <Route path="**" component={() => <Redirect to="/" />} />
    </Switch>
  </ContentWrapper>
);

ContentView.defaultProps = {
};

ContentView.propTypes = {
};

export default ContentView;
