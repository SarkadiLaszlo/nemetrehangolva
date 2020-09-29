import React, { Component } from "react";
import './ButtonVizsga.css';
import buttonVizsga from '../../assets/buttonVizsga.png'

let buttonClose = 'invisible'

class ButtonVizsga extends Component {



  render() {
    return (
      <div id = 'buttonVizsga'>
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src = {buttonVizsga} ></img>
          </div>
        <div className="flip-box-back">
          <img src = {buttonVizsga} onMouseDown={this.props.handleVizsga} ></img>
        </div>
      </div>
    </div>
    </div>

    );
  }

}

export default ButtonVizsga;
