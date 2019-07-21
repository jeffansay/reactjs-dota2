import React, { Component } from "react";
import { Card } from "reactstrap";
import wind from "../assets/wind.jpg";
// import am from "/images/heroes/antimage.png";

class DisplayHero extends Component {
  state = {
    toggle: "",
    flag: false
  };

  onClicks = e => {
    this.setState({
      toggle: "expanded",
      flag: true
    });
  };
  render() {
    // console.log(this.props, '--id hero')
    const { idHero, heroFile } = this.props;
    let findHero = heroFile.find(id => id.id === idHero);
    console.log(findHero);
    if (findHero === undefined) {
      return (
        <Card className="card-display">
          <h6>Pick a Hero!</h6>
        </Card>
      );
    } else {
      return (
        <div>
          <Card
            className={`card-display ${
              this.state.toggle !== "" ? this.state.toggle : ""
            }`}
            onClick={this.onClicks}
          >
            <div
              className="ml-auto mr-auto image-box"
              style={{ zIndex: 1, marginTop: "25px" }}
            >
              <img src={`../images/heroes/${findHero.image}.png`} alt="test" />
            </div>
          </Card>
        </div>
      );
    }
    // console.log(findHero, "hero check!!!!!");
  }
}

export default DisplayHero;
