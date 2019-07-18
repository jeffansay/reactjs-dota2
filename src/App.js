import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import dota from "./assets/dota.json";
import Hero from "./pages/Hero";
import Info from "./pages/Info";
import Navbar from "./components/navbar";
export default class App extends Component {
  state = {
    heroes: [],
    urlInit: `https://api.opendota.com/api/heroes`,
    search: ""
  };

  // componentDidMount() {
  //   axios
  //     .get(this.state.urlInit)
  //     .then(response => {
  //       return this.setState({
  //         heroes: response.data
  //       });
  //     })
  //     .catch(err => console.log(err, "--error"));
  // }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <main>
            <Switch>
              <Route path="/" exact component={Hero} />
              <Route path="/info/:id" exact component={Info} />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}
