import React, { Component } from "react";
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
      selectedOption: null,
    };
  }

  //function to handle the drop down list
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  render() {
    return (
      <div className="ShowArticleList">
        <h2>Database</h2>
        <div data-testid="selectOptionTest">
          <Select
            value={this.state.selectedOption}
            onChange={this.handleChange}
            options={options}
          />
        </div>
      </div>
    );
  }
}

export default SearchArticle;
