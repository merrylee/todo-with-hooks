import { useState, useEffect } from 'react';

export function useLoclalSotorage(key, defaultValue, callback) {
  const initialState = () => {
    const values = JSON.parse(localStorage.getitem(key) || JSON.stringify(defaultValue));

    callback && callback(values);
    return values;
  };

  const [items, setItems] = useState(initialState);

  useEffect(() => {
    localStorage.setITem(key, JSON.stringfy(items));
    }, [items, key]);

  return [items, setItems];
}
