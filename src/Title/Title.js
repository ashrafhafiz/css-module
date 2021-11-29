import React, { Component } from "react";
import styles from "./Title.module.css";

export default class Title extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.title}>NASA Facts</h1>
      </div>
    );
  }
}
