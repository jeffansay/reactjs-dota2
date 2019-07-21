import React, { Component } from "react";
import Info from "../components/info";
import DotaHero from "../assets/dota.json";
import Content from "../components/content";
import DisplayHero from "../components/displayHero";
import { Row, Col } from "reactstrap";

class Landing extends Component {
  state = {
    heroList: DotaHero,
    idHero: 0
  };

  getId = id => {
    console.log(id, "--get id");
    this.setState({
      idHero: id
    });
  };

  render() {
    // console.log(this.state.heroList, "--landing");
    return (
      <div className="container-fluid pl-0 pr-0">
        <div className="hero-area" style={{ marginBottom: "5rem" }}>
          <div className="container">
            <Info title="Windranger at your service." />
          </div>
        </div>

        <section>
          <div className="container">
            <div className="title-cont ml-auto mr-auto">
              <h2>List of Hero</h2>
              <p>
                Tset <img src="https://www.use.com/OiKjm" alt="" />
              </p>
            </div>
            <Row style={{ padding: "20px" }} className="pl-0">
              <Col>
                <Content
                  heroes={this.state.heroList}
                  id={this.state.heroList.id}
                  getId={this.getId}
                />
              </Col>
              <Col>
                <div className="sticky-top">
                  <DisplayHero
                    idHero={this.state.idHero}
                    heroFile={this.state.heroList}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
