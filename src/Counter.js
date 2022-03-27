import React from 'react';
export const Counter = React.memo(({ id, init, increment }) => {
  console.log(`Se renderiza Contador #${id}`);
  return (
    <fieldset style={{ margin: 0, textAlign: 'center' }}>
      <legend>
        ||| Contador #{id} - Valor: {init} |||
      </legend>
      <button onClick={increment}>+</button>
    </fieldset>
  );
});
