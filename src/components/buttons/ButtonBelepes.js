import React, { Component } from "react";
import './ButtonBelepes.css';
import buttonBelepes from '../../assets/buttonBelepes.png'

class ButtonBelepes extends Component {



  render() {
    return (
      <div id = 'buttonBelepes'>
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src = {buttonBelepes} alt = 'belepes' ></img>
          </div>
        <div className="flip-box-back">
          <img src = {buttonBelepes} alt = 'belepes' onMouseDown={this.props.handleBelepes} ></img>
        </div>
      </div>
    </div>
    </div>

    );
  }

}

export default ButtonBelepes;
