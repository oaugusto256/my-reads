import React, { Component } from "react";

class MyReads extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 book-organizer"><p>To read</p></div>
          <div className="col-lg-4 book-organizer"><p>Reading</p></div>
          <div className="col-lg-4 book-organizer"><p>Read</p></div>
        </div>
      </div>
    );
  }
}

export default MyReads;
