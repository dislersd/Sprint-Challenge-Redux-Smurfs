import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, addSmurf, deleteSmurf } from "../actions";

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
    if (e.target.name === "age") {
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

  handleDelete = (e, id) => {
    e.preventDefault();
    this.props.deleteSmurf(id)
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

        <div className="smurfs-container">
          {this.props.smurfs.map(smurf => (
            <div className="smurf-container" key={smurf.name}>
              {smurf.name}
              <hr />
              Age: {smurf.age}
              <hr />
              Height: {smurf.height}
              <hr/>
              <button onClick={e => this.handleDelete(e, smurf.id)}> delete </button>
            </div>
          ))}
        </div>

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
  { getSmurfs, addSmurf, deleteSmurf }
)(App);
