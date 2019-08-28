import styled from 'styled-components';

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 35px;
  right: 25px;
  display: flex;

  div + div {
    margin-left: 20px;
  }
`;

export default FooterWrapper;
