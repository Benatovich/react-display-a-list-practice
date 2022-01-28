import React from 'react';
import CandyItem from './CandyItem';
import './CandiesList.css';

export default function CandiesList(props) { 
  console.log(props.candies);
  const candiesEl = props.candies.map((candy, i) => {
    console.log(candy, 'candy');
    return (
      <CandyItem key={`${candy.brand} + ${i}`} brand={candy.brand} type={candy.type} maker={candy.maker} />
    );
  }
  );
  return <ul>
    {candiesEl}
  </ul>; 
}