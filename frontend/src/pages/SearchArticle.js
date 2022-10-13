import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import Table from "../components/table.js";
import tablecolumns from "../components/searchercolumn.js";
import Styles from "../components/tablestyle";
import Select from "react-select";

const options = [
  { value: "TDD", label: "TDD" },
  { value: "Mob Programming", label: "Mob Programming" },
  { value: "TFD", label: "TFD" },
  { value: "BDD", label: "BDD" },
];

class SearchArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      selectedOption: null,
    };
  }

  //function to handle the drop down list
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

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

    const { selectedOption } = this.state;

    //filter the data according to the selected option by the user
    const filteredArray = this.state.selectedOption
      ? articles.filter((article) => article.SEmethod === selectedOption.value)
      : articles;

    return (
      <div className="ShowArticleList">
        <div>
          <h2>Database</h2>
          <Select
            value={this.state.selectedOption}
            onChange={this.handleChange}
            options={options}
          />
          <Styles>
            <Table data={filteredArray} columns={tablecolumns} />
          </Styles>
        </div>
      </div>
    );
  }
}

export default SearchArticle;
