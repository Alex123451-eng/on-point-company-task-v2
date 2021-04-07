import React from 'react';

import PeakPhrase from './PeakPhrase';

function Slide1(props) {
  const { start, end } = props;

  const topPeakStyle = {
    left: "560px",
    top: "244px",
    width: "55px",
    height: "55px"
  };

  const leftPeakStyle = {
    left: "277px",
    top: "406px",
    width: "25px",
    height: "25px"
  };

  const rightPeakStyle = {
    left: "819px",
    top: "493px",
    width: "20px",
    height: "20px"
  };

  const bottomPeakStyle = {
    left: "477px",
    top: "514px",
    width: "20px",
    height: "20px"
  };

  const topPhraseStyle = {
    left: "625px",
    top: "255px"
  };

  const leftPhraseStyle = {
    left: "235px",
    top: "375px"
  };

  const rightPhraseStyle = {
    left: "795px",
    top: "460px"
  };

  const bottomPhraseStyle = {
    left: "377px",
    top: "484px"
  };

  return (
    <div
    onTouchStart={start}
    onTouchEnd={end}
    className="slide1 slide"
  >
    <div className="slide1__title">
      Всегда ли цели терапии СД2 <br />
      на поверхности?
    </div>
    <PeakPhrase
      phraseStyle={topPhraseStyle}
      peakStyle={topPeakStyle} 
      phrase="Цель по HbA1c"
    />
    <PeakPhrase
      phraseStyle={leftPhraseStyle}
      peakStyle={leftPeakStyle} 
      phrase="Гипогликемия"
    />
    <PeakPhrase
      phraseStyle={rightPhraseStyle}
      peakStyle={rightPeakStyle} 
      phrase="СС риски"
    />
    <PeakPhrase
      phraseStyle={bottomPhraseStyle}
      peakStyle={bottomPeakStyle} 
      phrase="Осложнения СД"
    />
</div>
  );
}

export default Slide1