import React from 'react';

import schemeLeft from "../imgs/third/left/left-scheme.png";
import iceLeft1 from "../imgs/third/left/ice1.png";
import iceLeft2 from "../imgs/third/left/ice2.png";
import iceLeft3 from "../imgs/third/left/ice3.png";

import schemeMid from "../imgs/third/mid/mid-scheme.png";
import iceMid1 from "../imgs/third/mid/ice1.png";
import iceMid2 from "../imgs/third/mid/ice2.png";
import iceMid3 from "../imgs/third/mid/ice3-2.png";

import schemeRight from "../imgs/third/right/right-scheme.png";
import iceRight1 from "../imgs/third/right/ice1.png";
import iceRight2 from "../imgs/third/right/ice2.png";
import iceRight3 from "../imgs/third/right/ice3.png";

class Slide3 extends React.Component {
  constructor() {
    super();
    this.state = {
      sliderValue: 0,
      sliderTouch: false,
      slideToShow: "left",
    };

    this.rangeInput = React.createRef();
  }

  handleChange = e => {
    let value = e.target.value;

    this.setState({ sliderValue: value });

    // This code shifts block of the bottom horizontal
    // slides according to the value of the slider
    if (value <= 33) {
      this.setState({ slideToShow: "left" });
    }

    if (value > 33 && value < 66) {
      this.setState({ slideToShow: "mid" });
    }

    if (value >= 66) {
      this.setState({ slideToShow: "right" });
    }
  }

  // localStart and localEnd methods check whether the start swipe touch happened
  // on the slider. If so, we don't move up, but change slider's value accordignly.
  // Otherwise, invoke start and end methods of App component to process actual swipe
  localStart = e => {
    let sliderTouch = false;

    if (e.target === this.rangeInput.current) {
      sliderTouch = true;
    }

    this.setState({ sliderTouch });

    if (!sliderTouch) {
      this.props.start(e);
    }
  }

  localEnd = e => {
    const sliderTouch = this.state.sliderTouch;

    if (sliderTouch) {
      let value = this.state.sliderValue;

      // This code is getting slider's thumb to its place based on the value
      if (value >= 66) value = 100;
      if (value <= 33) value = 0;
      if (value > 33 && value < 66) value = 50;
  
      this.setState({ sliderValue: value });
    } else {
      this.props.end(e);
    }
  }

  render() {
    const styleLeftIce1 = {
      left: "25px",
      bottom: "5px",
      opacity: ".35",
      width: "200px"
    }
  
    const styleLeftIce2 = {
      right: "280px",
      top: "230px",
      width: "100px",
      opacity: ".4"
    }
  
    const styleLeftIce3 = {
      right: "55px",
      top: "110px",
      width: "30px",
      opacity: ".44"
    }

    const styleMidIce1 = {
      left: "440px",
      top: "120px",
      opacity: "0.44",
      width: "30px"
    }
  
    const styleMidIce2 = {
      left: "50px",
      top: "250px",
      opacity: ".44",
      width: "90px"
    }
  
    const styleMidIce3 = {
      right: "0px",
      transform: "translateX(40%)",
      bottom: "5px",
      width: "140px",
      opacity: ".55"
    }

    const styleRightIce1 = {
      left: "0px",
      top: "125px",
      opacity: ".8",
      width: "30px"
    }
  
    const styleRightIce2 = {
      left: "200px",
      bottom: "0px",
      width: "170px"
    }
  
    const styleRightIce3 = {
      right: "0px",
      top: "240px",
      width: "70px"
    }

    let slide3BottomSlidesStyle = "slide3__bottom-slides ";
    const { slideToShow } = this.state;

    switch(slideToShow) {
      case "left":
        slide3BottomSlidesStyle += "left";
        break;
      case "mid":
        slide3BottomSlidesStyle += "mid";
        break;
      case "right":
        slide3BottomSlidesStyle += "right";
        break;
      default:
        break;
    }
    
    let inputStyle = "slide3__slider";
    const sliderValue = +this.state.sliderValue;

    if (sliderValue === 100) {
      inputStyle = "slide3__slider right";
    } else if (sliderValue === 0) {
      inputStyle = "slide3__slider left";
    }

    return (
      <div
        className="slide3 slide"
        onTouchStart={this.localStart}
        onTouchEnd={this.localEnd}
      >
        <div className={slide3BottomSlidesStyle}>
          <div className="slide3__left-slide">
            <img src={schemeLeft} className="left-scheme" alt="scheme-1"/>

            <div className="slide3__title">
              Звенья патогенеза СД2
            </div>

            <img
              className="left-ice1 ice"
              src={iceLeft1}
              style={styleLeftIce1}
              alt="ice"
            />
            
            <img
              className="left-ice2 ice"
              src={iceLeft2}
              style={styleLeftIce2}
              alt="ice"
            />

            <img
              className="left-ice3 ice"
              src={iceLeft3}
              style={styleLeftIce3}
              alt="ice"
            />
          </div>

          <div className="slide3__mid-slide">
            <img src={schemeMid} className="mid-scheme"  alt="scheme-2"/>

            <div className="slide3__title">
              Смертельный октет
            </div>

            <img
              className="mid-ice1 ice"
              src={iceMid1}
              style={styleMidIce1}
              alt="ice"
            />
            
            <img
              className="mid-ice2 ice"
              src={iceMid2}
              style={styleMidIce2}
              alt="ice"
            />

            <img
              className="mid-ice3 ice"
              src={iceMid3}
              style={styleMidIce3}
              alt="ice"
            />
          </div>
          
          <div className="slide3__right-slide">
            <img src={schemeRight} className="right-scheme"  alt="scheme-3"/>

            <div className="slide3__title">
              Звенья патогенеза СД2
            </div>

            <img
              className="right-ice1 ice"
              src={iceRight1}
              style={styleRightIce1}
              alt="ice"
            />
            
            <img
              className="right-ice2 ice"
              src={iceRight2}
              style={styleRightIce2}
              alt="ice"
            />

            <img
              className="right-ice3 ice"
              src={iceRight3}
              style={styleRightIce3}
              alt="ice"
            />
          </div>
        </div>

        <input
          className={inputStyle}
          type="range"
          min="0"
          max="100"
          ref={this.rangeInput}
          value={this.state.sliderValue}
          onChange={this.handleChange}
        />

        <div className="slide3__dates-block">
          <span>1988</span>
          <span>2009</span>
          <span>2016</span>
        </div>
      </div>
    );
  }
}

export default Slide3