import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import dota from "./assets/dota.json";
import axios from 'axios'
import Hero from "./pages/Hero";
import Info from "./pages/Info";
import Navbar from "./components/navbar";
import Landing from './pages/Landing'
export default class App extends Component {
  // state = {
  //   heroesInit: [],
  //   urlInit: `https://api.opendota.com/api/heroes`,
  //   search: ""
  // };

  // componentDidMount() {
  //   axios
  //     .get(this.state.urlInit)
  //     .then(response => {
  //       return this.setState({
  //         heroesInit: response.data
  //       });
  //     })
  //     .catch(err => console.log(err, "--error"));
  // }

  render() {
    // console.log(this.state.heroesInit)
    return (
    
      <div>
        <Router>
          <Navbar />
          <main>
            <Switch>
              <Route path="/" exact component={Landing}/>
              <Route path="/hero" exact component={Hero} />
              <Route path="/info/:id" exact component={Info} />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}
