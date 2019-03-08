import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";


class App extends Component {
  state = {};

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
      {this.props.smurfs.map( smurf => (
        <div>
          {smurf.name}
        </div>
      ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
