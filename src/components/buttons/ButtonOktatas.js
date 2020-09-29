import React, { Component } from "react";
import './ButtonOktatas.css';
import buttonOktatas from '../../assets/buttonOktatas.png'

let buttonClose = 'invisible'

class ButtonOktatas extends Component {



  render() {
    return (
      <div id = 'buttonOktatas'>
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src = {buttonOktatas} ></img>
          </div>
        <div className="flip-box-back">
          <img src = {buttonOktatas} onMouseDown={this.props.handleOktatas} ></img>
        </div>
      </div>
    </div>
    </div>

    );
  }

}

export default ButtonOktatas;
