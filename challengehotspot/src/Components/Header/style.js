import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 55px;
  background: ${props => props.theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  color: #fff;
  box-shadow: 2px 4px 10px #bbbbbb;

  svg {
    width: 145px;
    fill: ${props => props.theme.logo};
  }

  div {
    width: 50%;
    display: flex;
    justify-content: space-between;
    span {
      padding: 10px;
    }
  }
`;

export default HeaderWrapper;
