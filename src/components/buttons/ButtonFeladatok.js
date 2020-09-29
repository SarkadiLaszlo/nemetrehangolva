import React, { Component } from "react";
import './ButtonFeladatok.css';
import buttonFeladatok from '../../assets/buttonFeladatok.png'

let buttonClose = 'invisible'

class ButtonFeladatok extends Component {



  render() {
    return (
      <div id = 'buttonFeladatok'>
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src = {buttonFeladatok} ></img>
          </div>
        <div className="flip-box-back">
          <img src = {buttonFeladatok} onMouseDown={this.props.handleFeladatok} ></img>
        </div>
      </div>
    </div>
    </div>

    );
  }

}

export default ButtonFeladatok;
