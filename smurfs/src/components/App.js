import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

class App extends Component {
  state = {
    smurf: {
      name: "",
      age: "",
      height: ""
    }
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <form>
          <input
            type="text"
            name="name"
            value={this.state.smurf.name}
            placeholder="name..."
          />
          <input
            type="text"
            name="age"
            value={this.state.smurf.age}
            placeholder="age..."
          />
          <input
            type="text"
            name="height"
            value={this.state.smurf.height}
            placeholder="height..."
          />

          <button> Add Smurf </button>
        </form>

        {this.props.smurfs.map(smurf => (
          <div className="smurf-container" key={smurf.name}>
            {smurf.name}
            <hr />
            Age: {smurf.age}
            <hr />
            Height: {smurf.height}
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
