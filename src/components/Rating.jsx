import React from 'react';

const Rating = (props) => {
  let rate = Math.round(Number(props.children));

  let filledStars = [...new Array(rate)];
  let emptyStars = [...new Array(5 - rate)];

  return (
    <div>
      {filledStars.map((star, idx) => (
        <i key={idx} className="fa fa-star" aria-hidden="true"></i>
      ))}

      {emptyStars.map((star, idx) => (
        <i key={idx} className="fa fa-star-o" aria-hidden="true"></i>
      ))}
    </div>
  );
};

export default Rating;