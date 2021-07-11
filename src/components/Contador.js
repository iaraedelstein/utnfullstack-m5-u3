import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';

export default function Contador() {
  // agrego la variable global como variable local
  const contador = useSelector((state) => state.numero);
  // defino
  const dispatch = useDispatch();

  const [nombre, setNombre] = useState('Iara');
  const handleChange = (e) => {
    const newName = e.target.value;
    setNombre(newName);
  };
  useEffect(() => {
    console.log('Entró a useEffect');
    setNombre(nombre.toUpperCase());
  }, [nombre]);

  return (
    <div className="counter">
      <h1 className="counter__title">Contador</h1>
      <h3 className="counter__detail">{contador}</h3>
      <div className="counter__buttons">
        <button onClick={() => dispatch({ type: 'INCREMENTAR' })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENTAR' })}>-</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Volver a 0</button>
      </div>

      <label>Nombre</label>
      <input onChange={(e) => handleChange(e)} value={nombre} />
    </div>
  );
}
