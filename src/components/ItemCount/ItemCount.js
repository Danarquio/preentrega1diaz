import { useState } from "react";
  

  const ItemCount = ({ nombre, minimo, stock }) => {
    const [cantidad, setCantidad] = useState(0);
  
    const handleAgregar = () => {
      if (cantidad + minimo <= stock) {
        setCantidad(cantidad + minimo);
      }
    };
  
    const handleQuitar = () => {
      if (cantidad - minimo >= 0) {
        setCantidad(cantidad - minimo);
      }
    };
  
    return (
      <div>
        <button onClick={handleQuitar}>-</button>
        <input
          id={`cantidad-${nombre}`}
          className="cantidad__input"
          type="number"
          value={cantidad}
          min={minimo}
          max={stock}
          step={minimo}
          readOnly
        />
        <button onClick={handleAgregar}>+</button>
      </div>
    );
  };
  
 

export default ItemCount