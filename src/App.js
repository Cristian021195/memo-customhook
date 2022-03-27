import React, { useCallback } from 'react';
import './style.css';
import { Counter } from './Counter';
import { useContador } from './useContador';

export default function App() {
  const contadorA = useContador(10);
  const contadorB = useContador(20);
  const contadorC = useContador(30);

  //Se memoriza el custom hook en general y escucha cambios al contador
  const memoA = useCallback(contadorA, [contadorA.cont]);
  const memoB = useCallback(contadorB, [contadorB.cont]);
  const memoC = useCallback(contadorC, [contadorC.cont]);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <hr />
      <Counter id={1} init={memoA.cont} increment={memoA.increment} />
      <Counter id={2} init={memoB.cont} increment={memoB.increment} />
      <Counter id={3} init={memoC.cont} increment={memoC.increment} />
    </div>
  );
}
