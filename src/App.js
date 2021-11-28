import React, { Component } from "react";
import styles from "./App.module.css";
import Background from "./Background/Background";
import Grid from "./Grid/Grid";
import Rocket from "./Rocket/Rocket";
import Smoke from "./Rocket/Smoke";
import Title from "./Title/Title";

import facts from "./data/NASA_facts.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facts,
    };
  }

  render() {
    return (
      <div className={styles.App}>
        <Title />
        <Background />
        <Grid facts={this.state.facts} />
        <Rocket />
        <Smoke />
      </div>
    );
  }
}
