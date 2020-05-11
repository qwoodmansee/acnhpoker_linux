import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ItemList from './item-list';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function ItemSearcher({options, onSelectedItemId, selectedItemId}) {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [userInput, setUserInput] = useState('');

  const onSearchChange = useCallback((event) => {
    const userInput = event.currentTarget.value;
    const filteredOptions = options.filter(
      (option) => option.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    
    setFilteredOptions(filteredOptions);
    setUserInput(userInput);
  }, [options]);

  const onOptionClick = useCallback((e) => {
    const itemName = e.currentTarget.innerText.split(':')[0];
    const itemId = options.find(o => o.name === itemName).id
    onSelectedItemId(itemId);
  }, [onSelectedItemId, options]);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
          Search for an item
      </Typography>
      <TextField 
        id="search-box" 
        label="Item Name" 
        variant="outlined" 
        onChange={onSearchChange}
        value={userInput}
      />
      <ItemList
        onOptionClick={onOptionClick}
        items={filteredOptions}
        selectedItemId={selectedItemId}
      />
    </Container>
  );
}

ItemSearcher.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired,
  onSelectedItemId: PropTypes.func,
  selectedItemId: PropTypes.string,
};