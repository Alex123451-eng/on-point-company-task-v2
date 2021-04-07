import React from 'react';

function DownSection(props) {
  const { phrase } = props;

  return (
    <div className="down-section">
      <span className="down-section__text">{phrase}</span>

      <div
        className="down-section__arrow">
      </div>

      <div className="down-section__blured-part"></div>
    </div>
  );
}

export default DownSection