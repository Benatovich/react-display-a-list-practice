import React from 'react';
import CandyItem from './CandyItem';
import './CandiesList.css';

export default function CandiesList(props) {
  return (
    <div className='candies-list'>
      {
        props.candies.map((candies, i) =>
          <CandyItem key={`${candies.brand} + ${i}`} brand={candies.brand} type={candies.type} maker={candies.maker} />)
      }
    </div>
  );
}

