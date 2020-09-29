import React, { Component } from "react";
import './ButtonRolam.css';
import buttonRolam from '../../assets/buttonRolam.png'


class ButtonRolam extends Component {



  render() {
    return (
      <div id = 'buttonRolam'>
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src = {buttonRolam} alt = 'rolam' ></img>
          </div>
        <div className="flip-box-back">
          <img src = {buttonRolam} alt = 'rolam' onMouseDown={this.props.handleRolam} ></img>
        </div>
      </div>
    </div>
    </div>

    );
  }

}

export default ButtonRolam;
