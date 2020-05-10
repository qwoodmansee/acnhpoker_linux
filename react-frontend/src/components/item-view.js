import React from 'react';
import PropTypes from 'prop-types';

const getImagePathForItem = (item) => {
  return `/img/${item.category}/${item.name}.png`;
};

export default function ItemView({onClick, item, selected}) {
  return (
    <div style={{display: 'block', cursor:'pointer'}} onClick={onClick}>
      <p key={item.id}>
        {item.name}
      </p>
      <img src={getImagePathForItem(item)} alt=""/>
    </div>
  );
}

ItemView.propTypes = {
  onClick: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
};