import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions";

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

  handleChange = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === "age" || e.target.name === "height") {
      value = parseInt(value, 10);
    }
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [e.target.name]: value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf)
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.smurf.name}
            placeholder="name..."
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="age"
            value={this.state.smurf.age}
            placeholder="age..."
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="height"
            value={this.state.smurf.height}
            placeholder="height..."
            onChange={this.handleChange}
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
  { getSmurfs, addSmurf }
)(App);
