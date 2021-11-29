import React, { Component } from "react";
import styles from "./GridItem.module.css";
import Explorer from "./Explorer";
import Badge from "./Badge";

export default class GridItem extends Component {
  render() {
    return (
      <div
        className={styles.card}
        onClick={() => this.props.updateClicked(this.props.fact.id)}
      >
        {this.props.fact.clicked ? <Explorer /> : <Badge />}
        <h2 className={styles.title}>{this.props.fact.title}</h2>
        <article className={styles.fact}>{this.props.fact.fact}</article>
      </div>
    );
  }
}
