import React, { Component } from "react";
import bg from "../assets/terror.jpg";
import Search from "../components/search";
import Display from "../components/display";
import axios from "axios";

export default class Hero extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  //   axios
  //     .get(this.state.urlInit)
  //     .then(response => {
  //       return this.setState({
  //         heroes: response.data
  //       });
  //     })
  //     .catch(err => console.log(err, "--error"));
  }

  state = {
    heroes: [],
    search: "",
    urlInit: `https://api.opendota.com/api/players/468456260`
  };
  // 172187697
  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="container bg-hero mt-4">
        <div className="row">
          <div className="col">
            <div className="container">
              <Display hero={this.state.heroes} />
            </div>
          </div>
          <div className="col">
            <div className="container">
              <Search
                search={this.state.search}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
