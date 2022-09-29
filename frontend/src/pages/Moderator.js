import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import Table from "../components/table.js";
import tablecolumns from "../components/admincolumn.js";

// import { Link } from 'react-router-dom';
// import BookCard from './BookCard';

class Moderator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/articles")
      .then((res) => {
        this.setState({
          articles: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from Moderator class");
      });
  }

  render() {
    const articles = this.state.articles;
    console.log("PrintArticle: " + articles);
    let articleList;

    return (
      <div className="ShowArticleList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Articles List</h2>
            </div>
          </div>

          <div className="list">{articleList}</div>
        </div>

        <div>
          <h2>testing if this works</h2>
          <Table data={articles} columns={tablecolumns} />
        </div>
      </div>
    );
  }
}

export default Moderator;
