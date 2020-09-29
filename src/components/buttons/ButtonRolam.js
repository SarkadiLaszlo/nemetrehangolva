import React, { Component } from "react";
import './ButtonRolam.css';
import buttonRolam from '../../assets/buttonRolam.png'

let buttonClose = 'invisible'

class ButtonRolam extends Component {



  render() {
    return (
      <div id = 'buttonRolam'>
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src = {buttonRolam} ></img>
          </div>
        <div className="flip-box-back">
          <img src = {buttonRolam} onMouseDown={this.props.handleRolam} ></img>
        </div>
      </div>
    </div>
    </div>

    );
  }

}

export default ButtonRolam;
