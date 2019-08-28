import styled from 'styled-components';

const Background = () => `
  background: rgba(255, 255, 255, 0.8);
`;

const PopoverWrapper = styled.div`
  .content-popover {
    display: none;
  }
  :hover {
    .title {
      border-bottom: 1px solid #dedede;
      font-weight: 700;
      margin-bottom: 5px;
    }
    .content-popover {
      width: 200px;
      left: ${props => `${props.position.clientX + 40}px`};
      top: ${props => `${props.position.clientY - 5}px`};
      position: absolute;
      display: flex;
      flex-direction: column;
      padding: 10px;
      border-radius: 5px;
      font-size: 14px;
      ${Background}

      :after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        clip-path: polygon(50% 100%, 50% 0, 0 50%);
        left: -12px;
        top: 3px;
        ${Background}
      }
    }
  }
`;

export default PopoverWrapper;
