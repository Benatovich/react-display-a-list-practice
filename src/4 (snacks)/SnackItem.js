import React from 'react';
import './SnackItem.css';

export default function SnackItem(props) {
//   cool zone
  return (
    <div className='snack-item'>
      <p className='brand'>Brand: {props.brand}</p>
      <p className='maker'>Maker: {props.maker}</p>
      <div className='flavors'>
        <h3>Flavors:</h3>
        {props.flavors.map((flavors, i) => {
          return (
            <div key={i}>{flavors} </div>
          );
        })}
      </div>
    </div>
  );
}

