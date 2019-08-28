import styled from 'styled-components';

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #dedede;
  position: relative;

  .selector * {
    &:hover {
      border: 1px solid ${props => props.theme.inspect.border};
      box-shadow: inset 0px 0px 10px ${props => props.theme.inspect.shadow};
      border-radius: 5px;
    }
  }

  .content-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default AppWrapper;
