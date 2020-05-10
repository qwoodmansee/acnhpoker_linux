import React from 'react';
import PropTypes from 'prop-types';
import ItemView from './item-view';

export default function ItemList({onOptionClick, items, selectedItemId}) {
  if (items.length) {
    return (
      <div className="options" style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {items.map((item, index) => {
          return <ItemView 
            onClick={onOptionClick} 
            item={item}
            selected={item.id === selectedItemId}
          />            
        })}
      </div>
    )
  } else {
    return null;
  }
}

ItemList.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  onOptionClick: PropTypes.func.isRequired,
  selectedItemId: PropTypes.string,
};