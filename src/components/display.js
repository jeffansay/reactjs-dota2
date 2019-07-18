import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class display extends Component {
  render() {
    // console.log(this.props.hero.profile, "--check from display");
    const { hero } = this.props;
    console.log(hero, "--naay sud!");

    if (hero.length === 0) {
      return <p>Loading</p>;
    } else {
      return (
        <React.Fragment>
          <div className="content my-5">
            <div className="title text-center mb-3">
              <img src={hero.profile.avatar} alt="avatar" />
              <h6>Name: {hero.profile.personaname}</h6>
              <h6>Steam id: {hero.profile.steamid}</h6>
            </div>
            <ListGroup className="mb-3 mr-auto ml-auto display-info">
              <ListGroupItem
                className="pt-0 pb-0"
                style={{ borderRadius: "0px" }}
              >
                Rank :{" "}
                {hero.rank_tier != null ? hero.rank_tier : "not yet calculated"}
              </ListGroupItem>
              <ListGroupItem
                className="pt-0 pb-0"
                style={{ borderRadius: "0px" }}
              >
                solo rank :{" "}
                {hero.solo_competitive_rank != null
                  ? hero.solo_competitive_rank
                  : "not yet calculated"}
              </ListGroupItem>
              <ListGroupItem
                className="pt-0 pb-0"
                style={{ borderRadius: "0px" }}
              >
                profile url:{" "}
                {hero.profile.url != null ? hero.profile.url : "no profile url"}
              </ListGroupItem>
            </ListGroup>
          </div>
        </React.Fragment>
      );
    }
  }
}
