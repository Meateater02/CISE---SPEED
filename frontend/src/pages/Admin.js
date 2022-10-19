import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import Table from "../components/table.js";
import tablecolumns from "../components/admincolumn.js";
import Styles from "../components/tablestyle";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  //get data from mongoDB through axios
  componentDidMount() {
    axios
      .get("/api/articles")
      .then((res) => {
        this.setState({
          articles: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from Admin class");
      });
  }

  render() {
    const articles = this.state.articles;
    console.log("PrintArticle: " + articles);

    return (
      <div className="ShowArticleList">
        <div>
          <h2>Database</h2>
          <Styles>
            <Table data={articles} columns={tablecolumns} />
          </Styles>
        </div>
      </div>
    );
  }
}

export default Admin;
