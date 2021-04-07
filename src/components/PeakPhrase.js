import React from 'react';

function PeakPhrase(props) {
  const { peakStyle, phrase, phraseStyle } = props;

  return (
    <React.Fragment>
      <span
        className="phrase-container"
        style={phraseStyle}>{phrase}
      </span>
      <div
        className="peak-container"
        style={peakStyle}
      >
          <span className="wave-center"></span>
          <span className="wave"></span>
          <span className="wave-boundary"></span>
      </div>
    </React.Fragment>
  );
}

export default PeakPhrase