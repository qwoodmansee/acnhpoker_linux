import React from 'react';
import PropTypes from 'prop-types';
import ItemView from './item-view';
import Grid from '@material-ui/core/Grid';

export default function ItemList({onOptionClick, items, selectedItemId}) {
  if (items.length) {
    return (
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {items.map((item, index) => {
          return <ItemView 
            onClick={onOptionClick} 
            item={item}
            selected={item.id === selectedItemId}
          />    
        })} 
      </Grid>
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