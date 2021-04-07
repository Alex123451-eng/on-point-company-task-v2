import DownSection from './DownSection';
import Nav from './Nav';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';

import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      startCoord: 0,
      isDownSectionShown: true,
      dotToHighLight: "first"
    };
  }

  // processing of a start touch, getting start touch coordinate
  start = e => {
    const startCoord = e.changedTouches[0].screenY;
    this.setState({ startCoord });
  }
  
  // processing of an end touch, getting end touch coordinate
  end = e => {
    const endCoord = e.changedTouches[0].screenY;
    const diff = endCoord - this.state.startCoord;
    const { dotToHighLight } = this.state;

    // if swipe to the bottom
    if (diff < -10) {
      window.scrollBy({
        "behavior": "smooth",
        "left": 0,
        "top": 768
      });

      switch(dotToHighLight) {
        case "first":
          this.setState({ dotToHighLight: "second" });
          break;
        case "second":
          this.setState({ dotToHighLight: "third", isDownSectionShown: false });
          break;
        case "third":
          this.setState({ dotToHighLight: "third" });
          break;
        default:
          break;
      }

      // if swipe to the top
    } else if (diff > 10) {
      window.scrollBy({
        "behavior": "smooth",
        "left": 0,
        "top": -768
      });

      switch(dotToHighLight) {
        case "first":
          this.setState({ dotToHighLight: "first" });
          break;
        case "second":
          this.setState({ dotToHighLight: "first" });
          break;
        case "third":
          this.setState({ dotToHighLight: "second", isDownSectionShown: true });
          break;
        default:
          break;
      }
    }
  }

  render() {
    const { dotToHighLight } = this.state;
    let firstDotStyle = "nav__item ";
    let secondDotStyle = "nav__item ";
    let thirdDotStyle = "nav__item ";

    switch(dotToHighLight) {
      case "first":
        firstDotStyle += "nav__item_active";
        break;
      case "second":
        secondDotStyle += "nav__item_active";
        break;
      case "third":
        thirdDotStyle += "nav__item_active";
        break;
      default:
        break;
    }

    return (
      <React.Fragment>
        <Nav
          firstDotStyle = {firstDotStyle}
          secondDotStyle = {secondDotStyle}
          thirdDotStyle = {thirdDotStyle}
        />
        
        <Slide1
          start={this.start}
          end={this.end}
        />

        <Slide2 
          start={this.start}
          end={this.end}
        />

        <Slide3 
          start={this.start}
          end={this.end}
        />

        {
          this.state.isDownSectionShown ?
          <DownSection
            phrase="Листайте вниз"
          /> :
          null
        }
      </React.Fragment>
    );
  }
}

export default App;
