import styled from 'styled-components';

const ButtonCircleWrapper = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 2px 4px 10px #bbbbbb;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.primary};
  font-size: 22px;

  :hover {
    background: ${props => props.theme.primary};
    color: #fff;
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;

export default ButtonCircleWrapper;
