import React, { Component } from "react";
import './ButtonOk.css';
import buttonOk from '../../assets/buttonOk.png'


class ButtonOk extends Component {



  render() {
    return (
      <div id = 'buttonOk'>
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src = {buttonOk} alt = 'vissza' width="60vw" height="50vh" ></img>
          </div>
        <div className="flip-box-back">
          <img src = {buttonOk} alt = 'vissza' width="60vw" height="50vh" onMouseDown={this.props.handleOk} ></img>
        </div>
      </div>
    </div>
    </div>

    );
  }

}

export default ButtonOk;
