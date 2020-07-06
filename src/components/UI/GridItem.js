import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img
            style={{ width: '223px', height: '300px' }}
            src={props.item.img}
            alt=""
          />
        </div>
        <div className="card-back">
          <h1>polp</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
