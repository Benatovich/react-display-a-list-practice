import React from 'react';
import SnackItem from './SnackItem';
import './SnackList.css';

export default function SnackList({ snacks }) {
  const snacksEl = snacks.map((snack, i) => {
    return (
      <SnackItem key={snack.brand + i} {...snack} />
    );
  });
  return <div>{snacksEl}</div>;
}

