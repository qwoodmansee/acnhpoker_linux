import React, { useCallback, useState } from 'react';
import ItemSearcher from './components/item-searcher';
import InputForm from './components/input-form';
import getItems from './data/items';
import { sendItemToSwitch } from './api/poker-endpoints';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const items = getItems();

function App() {
  const [itemId, setItemId] = useState('');
  const [switchIpAddress, setSwitchIpAddress] = useState('');
  const [itemCount, setItemCount] = useState(1);
  const [isSending, setIsSending] = useState(false);

  const onItemIdInput = useCallback((event) => {
    setItemId(event.target.value);
  }, []);

  const onItemCountInput = useCallback((event) => {
    setItemCount(event.target.value);
  }, []);

  const onSwitchIpInput = useCallback((event) => {
    setSwitchIpAddress(event.target.value);
  }, []);

  const handleSubmit = useCallback(async () => {
    setIsSending(true);
    try {
      await sendItemToSwitch({
        switchIpAddress,
        itemId,
        itemCount,
      })
      setIsSending(false);
    } catch {
      setIsSending(false);
    }
  }, [itemId, itemCount, switchIpAddress]);

  const handleItemSelection = (selectedItemId) => {
    setItemId(selectedItemId);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Animal Crossing New Horizons Item Editor
      </Typography>
      <InputForm
        onSubmit={handleSubmit}
        itemId={itemId}
        onItemIdChange={onItemIdInput}
        itemCount={itemCount}
        onItemCountChange={onItemCountInput}
        switchIp={switchIpAddress}
        onSwitchIpChange={onSwitchIpInput}
      />
      <ItemSearcher
        options={items}
        selectedItem={itemId}
        onSelectedItemId={handleItemSelection}
      />
      {isSending && <h1>Sending Item...</h1>}
    </Container>
  );
}

export default App;
