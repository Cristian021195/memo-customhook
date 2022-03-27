import React from 'react';
import { useState } from 'react';

export const useContador = (init) => {
  const [cont, setCont] = useState(init);

  function increment() {
    setCont(cont + 1);
  }
  function decrement() {
    setCont(cont - 1);
  }
  function reset() {
    setCont(init);
  }
  return {
    cont,
    increment,
    decrement,
    reset,
  };
};
