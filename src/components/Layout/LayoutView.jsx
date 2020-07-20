import React from 'react';
import styled from 'styled-components/macro';

import ContentView from '../Content/ContentView';

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-areas: 'content';
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
  max-height: 100vh;
  font-size: 1rem;
`;

const LayoutView = () => (
  <LayoutWrapper>
    <ContentView />
  </LayoutWrapper>
);

LayoutView.defaultProps = {
};

LayoutView.propTypes = {
};

export default LayoutView;
