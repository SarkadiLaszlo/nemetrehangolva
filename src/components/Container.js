import React, { Component } from "react";
import './Container.css'
import BackgroundSlider from 'react-background-slider'
import alap1 from '../assets/alap1.jpg'
import alap2 from '../assets/alap2.jpg'
import alap3 from '../assets/alap3.jpg'
import alap4 from '../assets/alap4.jpg'
import alap5 from '../assets/alap5.jpg'
import alap6 from '../assets/alap6.jpg'
import alap7 from '../assets/alap7.jpg'
import alap8 from '../assets/alap8.jpg'
import ButtonRolam from './buttons/ButtonRolam'
import ButtonFeladatok from './buttons/ButtonFeladatok'
import ButtonOktatas from './buttons/ButtonOktatas'
import ButtonVizsga from './buttons/ButtonVizsga'
import Feladatok from './sliders/Feladatok'
import User from './user/User'



let pictures = []

const fillArray = () =>{
      pictures.length = 0
      pictures.push(alap1)
      pictures.push(alap2)
      pictures.push(alap3)
      pictures.push(alap4)
      pictures.push(alap5)
      pictures.push(alap6)
      pictures.push(alap7)
      pictures.push(alap8)
}

class Container extends Component {

    constructor(props) {
      super(props);
      this.state = {
        visibleFeladatok: false,
        visibleRolam: false,
        visibleOktatas: false,
        visibleVizsga: false,
      };
      this.handleFeladatok = this.handleFeladatok.bind(this);
      this.handleRolam = this.handleRolam.bind(this);
      this.handleOktatas = this.handleOktatas.bind(this);
      this.handleVizsga = this.handleVizsga.bind(this);
      this.toggleFeladatok = this.toggleFeladatok.bind(this);
      this.toggleRolam = this.toggleRolam.bind(this);
      this.toggleOktatas = this.toggleOktatas.bind(this);
      this.toggleVizsga = this.toggleVizsga.bind(this);
    }



    handleFeladatok(e) {
      console.log('click Feladatok')
      this.toggleFeladatok();
      e.stopPropagation();
    }

    handleRolam(e) {
      this.toggleRolam();
      e.stopPropagation();
    }

    handleOktatas(e) {
      this.toggleOktatas();
      e.stopPropagation();
    }

    handleVizsga(e) {
      this.toggleVizsga();
      e.stopPropagation();
    }

    toggleFeladatok() {
      this.setState({
        visibleFeladatok: !this.state.visibleFeladatok
      });
    }

    toggleRolam() {
      this.setState({
        visibleRolam: !this.state.visibleRolam
      });
    }

    toggleOktatas() {
      this.setState({
        visibleOktatas: !this.state.visibleOktatas
      });
    }

    toggleVizsga() {
      this.setState({
        visibleVizsga: !this.state.visibleVizsga
      });
    }

    render() {
      return (
        <div>
          {fillArray()}
          <User feladatokVisibility={this.state.visibleFeladatok} />
          <Feladatok handleFeladatok={this.handleFeladatok} feladatokVisibility={this.state.visibleFeladatok} />
          <ButtonRolam handleRolam={this.handleRolam}/>
          <ButtonFeladatok handleFeladatok={this.handleFeladatok}/>
          <ButtonOktatas handleOktatas={this.handleOktatas}/>
          <ButtonVizsga handleVizsga={this.handleVizsga}/>
          <BackgroundSlider
            images={[pictures[0], pictures[1], pictures[2], pictures[3], pictures[4], pictures[5], pictures[6], pictures[7]]}
            duration={10} transition={2} />
        </div>
      );
    }
  }

export default Container;
