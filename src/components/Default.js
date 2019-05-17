import React from "react";
export default class Default extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-3">404 Error</h1>
            <h2>page not found</h2>
            <h3>
              Requested URL{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              was not found.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
