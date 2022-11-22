import React, { Component } from "react";
class Wine extends Component {
  render() {
    return (
      <div className="wine">
        <h3>{this.props.type}</h3>
        <p>{this.props.year}</p>
      </div>
    );
  }
}
export default Wine;
