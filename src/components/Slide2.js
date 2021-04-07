import React from 'react';

import ice1 from "../imgs/second/ice1.png";
import ice2 from "../imgs/second/ice2.png";
import ice3 from "../imgs/second/ice3.png";
import ice4 from "../imgs/second/ice4.png";

function Slide2(props) {
  const { start, end } = props;

  const styleIce1 = {
    left: "90px",
    top: "160px",
    width: "50px"
  }

  const styleIce2 = {
    left: "230px",
    top: "440px",
    width: "100px"
  }

  const styleIce3 = {
    left: "690px",
    top: "580px",
    width: "70px"
  }

  const styleIce4 = {
    right: "0px",
    top: "40px",
    width: "140px"
  }

  return (
    <div 
      onTouchStart={start}
      onTouchEnd={end}
      className="slide2 slide"
    >
      <div className="slide2__title">
        Основа терапии - <br />
        патогенез СД2
      </div>

      <img
        className="ice"
        src={ice1}
        style={styleIce1}
        alt="ice"
      />
      
      <img
        className="ice"
        src={ice2}
        style={styleIce2}
        alt="ice"
      />

      <img
        className="ice"
        src={ice3}
        style={styleIce3}
        alt="ice"
      />

      <img
        className="ice"
        src={ice4}
        style={styleIce4}
        alt="ice"
      />
  </div>
  );
}

export default Slide2