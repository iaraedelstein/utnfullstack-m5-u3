import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';

export default function Contador() {
  const contador = useSelector((state) => state.numero);
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <h1 className="counter__title">Contador</h1>
      <h3 className="counter__detail">{contador}</h3>
      <div className="counter__buttons">
        <button onClick={() => dispatch({ type: 'INCREMENTAR' })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENTAR' })}>-</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Volver a 0</button>
      </div>
    </div>
  );
}
