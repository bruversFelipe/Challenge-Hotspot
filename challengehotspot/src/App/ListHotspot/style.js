import styled from 'styled-components';

const ListHotspotWrapper = styled.div`
  .item {
    color: ${props => props.theme.list.colorList};
    padding: 15px;
    background: ${props => props.theme.list.striped[1]};
    display: flex;
    align-items: center;
    justify-content: space-between;

    i {
      cursor: pointer;
      color: #f00;
    }

    :nth-child(even) {
      background: ${props => props.theme.list.striped[0]};
    }
  }
`;

export default ListHotspotWrapper;
