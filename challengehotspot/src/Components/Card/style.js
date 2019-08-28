import styled from 'styled-components';

const CardWrapper = styled.div`
  background: ${props => props.theme.card.background};
  width: 85%;
  margin-top: 25px;
  padding: 20px;

  h2 {
    border-bottom: 1px solid #dedede;
    padding-bottom: 5px;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 30px;
    color: ${props => props.theme.card.colorTitle};
  }
`;

export default CardWrapper;
