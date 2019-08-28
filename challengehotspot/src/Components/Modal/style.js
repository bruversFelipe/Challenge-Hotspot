import styled from 'styled-components';

const ModalWrapper = styled.div`
  width: 350px;
  border-radius: 5px;
  background: #fff;
  display: ${props => (props.visible ? 'block' : 'none')};
  animation: fadeIn 1s ease-in;
  position: absolute;
  z-index: 3;
  left: ${props => `${props.position.clientX}px`};
  top: ${props => `${props.position.clientY}px`};

  .title {
    padding: 10px;
    border-bottom: 1px solid #dedede;
    font-size: 16px;
    font-weight: 700;
  }

  .content {
    padding: 10px;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default ModalWrapper;
