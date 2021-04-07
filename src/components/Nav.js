import React from 'react';

function Nav(props) {
  const { firstDotStyle, secondDotStyle, thirdDotStyle } = props;

  return (
    <div className="nav">
      <div
        id="first" 
        className={firstDotStyle}>
      </div>

      <div
        id="second" 
        className={secondDotStyle}>
      </div>
      
      <div
        id="third" 
        className={thirdDotStyle}>
      </div>
    </div>
  );
}

export default Nav