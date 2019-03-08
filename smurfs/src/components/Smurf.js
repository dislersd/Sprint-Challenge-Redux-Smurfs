import React from "react";
import { deleteSmurf, updateSmurf} from "../actions";
import { connect } from "react-redux";

class Smurf extends React.Component {
  state = {
    isUpdating: false,
    smurf: {
      name: "",
      age: "",
      height: ""
    }
  };

  toggleEdit = () => {
    this.setState(prevState => ({ isUpdating: !prevState.isUpdating }));
  };

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

  handleDelete = (e, id) => {
    e.preventDefault();
    this.props.deleteSmurf(id);
  };

  submitHandler = (e, id) => {
    e.preventDefault();
    this.props.updateSmurf(id, {
      smurf: {
        name: this.state.smurf.name,
        age: this.state.smurf.age,
        height: this.state.smurf.height
      }
    });
    this.setState({
      smurf: {
        name: this.props.name,
        age: this.props.age,
        height: this.props.height
      },
      isUpdating: false
    });
  };

  render() {
    if (!this.state.isUpdating) {
      return (
        <div className="smurf-container">
          {this.props.name}
          <hr />
          Age: {this.props.age}
          <hr />
          Height: {this.props.height}
          <hr />
          <button
            className="delete-button"
            onClick={e => this.handleDelete(e, this.props.id)}
          > delete
          </button>
          <button className="update-button" onClick={this.toggleEdit}>
            update
          </button>
        </div>
      );
    } else {
      return (
        <div className="smurf-container">
          <form onSubmit={ e => this.submitHandler(e, this.props.id)}>
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

            <button className='update-button'> update </button>
          </form>
          <button className="update-button" onClick={this.toggleEdit}> cancel </button>
        </div>
      );
    }
  }
}

export default connect(
  null,
  { deleteSmurf, updateSmurf }
)(Smurf);
