import React, { Component } from "react";
import './ButtonOktatas.css';
import buttonOktatas from '../../assets/buttonOktatas.png'


class ButtonOktatas extends Component {



  render() {
    return (
      <div id = 'buttonOktatas'>
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src = {buttonOktatas} alt = 'oktatas' ></img>
          </div>
        <div className="flip-box-back">
          <img src = {buttonOktatas} alt = 'oktatas' onMouseDown={this.props.handleOktatas} ></img>
        </div>
      </div>
    </div>
    </div>

    );
  }

}

export default ButtonOktatas;
