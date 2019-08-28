import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ListHotspotWrapper from './style';
import Tooltip from '../../Components/Tooltip';
import Card from '../../Components/Card';

const ListHotspot = memo(({ dataSource, deleteItem }) => (
  <Card title="Hotspot - List">
    <ListHotspotWrapper>
      {dataSource.map(item => (
        <div className="item" key={item.key} role="presentation" onClick={() => deleteItem(item.key)}>
          <strong>{item.titulo}</strong>
          <Tooltip title="Excluir">
            <i className="fas fa-times" />
          </Tooltip>
        </div>
      ))}
    </ListHotspotWrapper>
  </Card>
));

ListHotspot.propTypes = {
  dataSource: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default ListHotspot;
