import React, { Component } from "react";

export class newsitem extends Component {
  render() {
    let { title, descreption, imageurl, newsurl } = this.props;
    return (
      <div>
        <div className="card">
          <img src={!imageurl ? "https://www.istockphoto.com/photos/breaking-news"
            : imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}.</h5>
            <p className="card-text">{descreption}..</p>
            <a href={newsurl} className="btn btn-primary"> Read more </a>
          </div>
        </div>
      </div>
    );
  }
}

export default newsitem;
