import React, { Component } from "react";
import { Card } from "reactstrap";
import { Button, Label } from "reactstrap";
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
          <Card className={`card-display `}>
            <div className="title-hero text-center text-capitalize pt-4">
              <h6>{findHero.localized_name}</h6>
            </div>
            <div
              className="ml-auto mr-auto image-box"
              style={{ zIndex: 1, marginTop: "5%" }}
            >
              <img src={`../images/heroes/${findHero.image}.png`} alt="test" />
            </div>
            <div className="content-hero text-center">
              <ul className="pl-0">
                {findHero.skills.map((skill, index) => {
                  console.log("skill", skill);
                  return (
                    <Label className="pr-1 pl-1" key={index}>
                      <img
                        src={`../images/spellicons/${skill}.png`}
                        alt="check"
                        style={{ height: "30px", width: "35px" }}
                      />
                    </Label>
                  );
                })}
              </ul>
              <Button color="danger">Details</Button>{" "}
            </div>
          </Card>
        </div>
      );
    }
    // console.log(findHero, "hero check!!!!!");
  }
}

export default DisplayHero;
