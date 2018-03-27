import React, { Component } from "react";
import logo from "./logo.svg";
import less from "./home.less";
import { getData } from "../fetch";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    const { dispatch, value1, value2 } = this.props;
    console.log(this.props);
    return (
      <div className={less.App}>
        <header className={less["App-header"]}>
          <img src={logo} className={less["App-logo"]} alt="logo" />
          <h1 className={less["App-title"]}>Welcome to React</h1>
        </header>
        <p className={less["App-intro"]}>
          <span>{`${value1}, ${value2}`}</span>
          <span onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
            +
          </span>
          <span onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
            -
          </span>
        </p>
      </div>
    );
  }
  componentDidMount() {
    getData("./test.json");
  }
}

export default connect(state => ({
  value1: state.increase,
  value2: state.decrease
}))(Home);
