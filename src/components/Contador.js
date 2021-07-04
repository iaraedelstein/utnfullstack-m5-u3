import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Contador() {
  const contador = useSelector((state) => state.numero);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Contador</h1>
      <h3>{contador}</h3>
      <div>
        <button onClick={() => dispatch({ type: 'INCREMENTAR' })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENTAR' })}>-</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Volver a 0</button>
      </div>
    </div>
  );
}
