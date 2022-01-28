import React from 'react';

export default function SnackItem(props) {
//   cool zone
  return (
    <div className='snack-item'>
      <p className='brand'>Brand: {props.brand}</p>
      <p className='maker'>Maker: {props.maker}</p>
      <div className='flavors'>
        {props.flavors.map((flavors, i) => {
          return (
            <div key={i}>{flavors}</div>
          );
        })}
      </div>
    </div>
  );
}

