import React from 'react';
import Card from './GridItem';
const Grid = (props) => {
  const PersonCard = props.data.map((item) => {
    return <Card item={item} />;
  });
  return <div className="grid">{PersonCard}</div>;
};

export default Grid;
