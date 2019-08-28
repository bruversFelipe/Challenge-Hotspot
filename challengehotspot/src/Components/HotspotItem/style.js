import styled from 'styled-components';

const HotspotItemWrapper = styled.div`
  position: absolute;
  left: ${props => `${props.position.clientX}px`};
  top: ${props => `${props.position.clientY}px`};
  width: 18px;
  height: 18px;
  background: ${props => props.theme.badge.background};
  border-radius: 50%;
  z-index: 1;
  animation: fadeShadow 1s linear infinite;

  @keyframes fadeShadow {
    0% {
      box-shadow: 0px 0px 5px ${props => props.theme.badge.shadow[0]};
    }
    100% {
      box-shadow: 0px 0px 10px ${props => props.theme.badge.shadow[1]};
    }
  }
`;

export default HotspotItemWrapper;
