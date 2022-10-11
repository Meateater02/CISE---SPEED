import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import Table from "../components/table.js";
import tablecolumns from "../components/searchercolumn.js";
import Styles from "../components/tablestyle";
import Dropdown from "../components/Dropdown.js";

class SearchArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/articles?status=accepted")
      .then((res) => {
        this.setState({
          articles: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from SearchArticle class");
      });
  }

  render() {
    const articles = this.state.articles;
    console.log("PrintArticle: " + articles);

    return (
      <div className="ShowArticleList">
        <div>
          <h2>Database</h2>
          <Dropdown/>
          <Styles>
            <Table data={articles} columns={tablecolumns} />
          </Styles>
        </div>
      </div>
    );
  }
}

export default SearchArticle;
