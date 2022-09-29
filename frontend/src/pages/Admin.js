import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import BookCard from './BookCard';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios
      .get('/api/articles')
      .then(res => {
        this.setState({
          articles: res.data
        })
      })
      .catch(err =>{
        console.log('Error from Admin class');
      })
  };


  render() {
    const articles = this.state.articles;
    console.log("PrintArticle: " + articles);
    let articleList;

    // if(!articles) {
    //   articleList = "there is no article record!";
    // } else {
    //   articleList = articles.map((article, k) =>
    //   //need to change this line below:
    //     <BookCard book={article} key={k} />
    //   );
    // }

    return (
      <div className="ShowArticleList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Articles List</h2>
            </div>

            <div className="col-md-11">
              {/* <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Add New Article
              </Link> */}
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {articleList}
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
