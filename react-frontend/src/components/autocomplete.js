import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ItemList from './item-list';

export default function Autocomplete({options, onSelectedItemId, selectedItemId}) {
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
    <div className="search">
      <input
        type="text"
        className="search-box"
        onChange={onSearchChange}
        value={userInput}
      />
      <ItemList
        onOptionClick={onOptionClick}
        items={filteredOptions}
        selectedItemId={selectedItemId}
      />
    </div>
  );
}

Autocomplete.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired,
  onSelectedItemId: PropTypes.func,
  selectedItemId: PropTypes.string,
};