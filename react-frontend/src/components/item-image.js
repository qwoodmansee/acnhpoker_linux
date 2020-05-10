import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

export default function ItemImage({itemId}) {
  const getImage = useCallback(async () => {
    const itemIdAsDecimal = parseInt(itemId, 16);
    const url = `https://nook.exchange/?c=item#${itemIdAsDecimal}:0`
    const html = (await (await fetch(url)).text()); // html as text
    const doc = new DOMParser().parseFromString(html, 'text/html');
    console.log(doc.body)
  });

  return null;
}

ItemImage.propTypes = {
  itemId: PropTypes.string.isRequired,
};