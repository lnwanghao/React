import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.less";
import less from "./App.less";
class App extends Component {
  render() {
    return (
      <div className={less.App}>
        <header className={less["App-header"]}>
          <img src={logo} className={less["App-logo"]} alt="logo" />
          <h1 className={less["App-title"]}>Welcome to React</h1>
        </header>
        <p className={less["App-intro"]}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
