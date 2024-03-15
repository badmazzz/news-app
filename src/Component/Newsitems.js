import React, { Component } from "react";

export class Newsitems extends Component {
  render() {
    let { title, disc, imageurl, newsurl } = this.props;
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{disc}</p>
            <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Newsitems;
