import React, { useCallback, useState } from 'react';
import './App.css';
import Autocomplete from './autocomplete';
import getItems from './items';

const ACNH_POKER_API_URL = 'http://localhost:5000';

const items = getItems();

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json'
    },
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function App() {
  const [itemId, setItemId] = useState('');
  const [itemCount, setItemCount] = useState(1);
  const [isSending, setIsSending] = useState(false);

  const onItemIdInput = useCallback((event) => {
    setItemId(event.target.value);
  }, []);

  const onItemCountInput = useCallback((event) => {
    setItemCount(event.target.value);
  }, []);

  const handleSubmit = useCallback(async () => {
    setIsSending(true);
    try {
      await postData(ACNH_POKER_API_URL + '/add', {itemId, itemCount});
      setIsSending(false);
    } catch {
      setIsSending(false);
    }
  }, [itemId, itemCount]);

  const handleAutoCompleteSelection = (selectedItemId) => {
    setItemId(selectedItemId);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the Animal Crossing New Horizons Item Editor
        </p> 
      </header>
      <section className="app-body">
       <form onSubmit={handleSubmit}>
          <label>
            Item ID:
            <input type="text" name="itemId" value={itemId} onChange={onItemIdInput}/>
          </label>
          <label>
            Count:
            <input type="text" name="itemCount" value={itemCount} onChange={onItemCountInput}/>
          </label>
          <input type="submit" value="Send Item" />
        </form>
        <p>Search:</p>
        <Autocomplete
          options={items}
          selectedItem={itemId}
          onSelectedItemId={handleAutoCompleteSelection}
        />
      </section>
      {isSending && <h1>Sending Item...</h1>}
    </div>
  );
}

export default App;
