import React from 'react';
export const Counter = React.memo(({ id, init, increment, reset }) => {
  console.log(`Se renderiza Contador #${id}`);
  return (
    <fieldset style={{ margin: 0, textAlign: 'center' }}>
      <legend>
        ||| Contador #{id} - Valor: {init} |||
      </legend>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Restart</button>
    </fieldset>
  );
});
