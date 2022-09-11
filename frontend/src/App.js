import React from 'react';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";

import SearchArticle from "./pages/SearchArticle";
import SubmitForm from "./pages/SubmitForm";
import Login from "./pages/Login";
import NotFoundPage from "./pages/404";

const App = () =>  {
  return (
      <Router>
      <div>
        <h1>Software Engineering Empirical Evidence Database (SPEED)</h1>
          <ul className="header">
              <li><NavLink exact to = "/">Search an Article</NavLink></li>
              <li><NavLink to = "/SubmitArticle">Submit an Article</NavLink></li>
              <li><NavLink to = "/Login">Login</NavLink></li>
          </ul>
        <div className="content">
          <Route exact path="/" component={SearchArticle}/>
          <Route  path="/SubmitArticle" component={SubmitForm}/>
          <Route  path="/Login" component={Login}/>
          <Route exact path="/404" component={NotFoundPage}/>
          <Redirect to="/404" />
        </div>
      </div>
      </Router>
  );
}

export default App;
