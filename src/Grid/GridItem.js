import React, { Component } from "react";
import styles from "./GridItem.module.css";

export default class GridItem extends Component {
  render() {
    return (
      <div className={styles.card}>
        <h2 className={styles.title}>{this.props.fact.title}</h2>
        <article className={styles.fact}>{this.props.fact.fact}</article>
      </div>
    );
  }
}
