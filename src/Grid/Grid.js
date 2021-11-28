import React, { Component } from "react";
import styles from "./Grid.module.css";
import GridItem from "./GridItem";

export default class Grid extends Component {
  renderFacts() {
    return this.props.facts.map((item) => (
      <GridItem key={item.id} fact={item} />
    ));
  }

  render() {
    return <section className={styles.grid}>{this.renderFacts()}</section>;
  }
}
