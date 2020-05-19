import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ItemList from './item-list';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function ItemSearcher({options, onSelectedItemId, selectedItemId}) {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    if (!userInput) { return; }
    const debounceTimeout = window.setTimeout(() => {
      const filteredOptions = options.filter(
        (option) => option.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );      
      setFilteredOptions(filteredOptions);
    }, 500);
    return () => window.clearTimeout(debounceTimeout);
  }, [userInput]);


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
        onChange={(e) => setUserInput(e.target.value)}
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