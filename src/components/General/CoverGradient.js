import styled from 'styled-components/macro';

const CoverGradient = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(${({ deg }) => deg || 180}deg, rgba(0, 0, 0, .4) 0, transparent 60%);
  z-index: 1;
`;

export default CoverGradient;
