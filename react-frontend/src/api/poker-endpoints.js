const ACNH_POKER_API_URL = 'http://localhost:5000';

export const sendItemToSwitch = async ({
  switchIpAddress,
  itemId,
  itemCount, 
  inventorySlot = 1
}) => {
  await postData(ACNH_POKER_API_URL + '/add', {itemId, itemCount});
}

const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'no-cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });
  return response.json();
}