import React, { Component } from "react";
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";

export class Newscomponent extends Component {

  constructor() {
    super();
    console.log("i am constructor");
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0

    };

  }
  async update() {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=270cc0951a114e27935cf036d5c46418&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    let change = await data.json();
    console.log(change);
    this.setState({ articles: change.articles, totalresult: change.totalResults });
  }
  async componentDidMount() {
    this.update();
  }
  // backclick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.update();
  // };
  // nextclick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.update();
  // };
  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=270cc0951a114e27935cf036d5c46418&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
    this.setState({ page: this.state.page + 1 })
    let data = await fetch(url);
    let change = await data.json();
    console.log(change);
    this.setState({ articles: this.state.articles.concat(change.articles), totalresult: change.totalResults });
  }
  render() {
    return (
      <>
        <h1 className="text-center " style={{ marginTop: "80px", marginBottom: '40px' }}> Newshub-Top Headline from {this.props.category} category </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
        // loader={<h4>Loading...</h4>}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title.slice(0, 7) : ""}
                      descreption={element.description ? element.description.slice(0, 50) : ""}
                      imageurl={element.urlToImage}
                      newsurl={element.url} />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="footbtn d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-primary mt-3" onClick={this.backclick} >&larr;back</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalpage / 10)} type="button" className="btn btn-primary mt-3" onClick={this.nextclick}>next&rarr;</button>
        </div> */}
      </>
    );
  }
}

export default Newscomponent;
