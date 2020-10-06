import React, { Component } from "react";
import './ButtonBack.css';
import buttonBack from '../../assets/buttonBack.png'


class ButtonBack extends Component {



  render() {
    return (
      <div id = 'buttonBack'>
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src = {buttonBack} alt = 'vissza' width="60vw" height="50vh" ></img>
          </div>
        <div className="flip-box-back">
          <img src = {buttonBack} alt = 'vissza' width="60vw" height="50vh" onMouseDown={this.props.handleBack} ></img>
        </div>
      </div>
    </div>
    </div>

    );
  }

}

export default ButtonBack;
