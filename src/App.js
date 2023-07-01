// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Newscomponent from "./components/Newscomponent";
// import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {


  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/general" element={<Newscomponent key={"general"} pagesize="10" category="general" />} />
            <Route exact path="/sports" element={<Newscomponent key={"sports"} pagesize="10" category="sports" />} />
            <Route exact path="/technology" element={<Newscomponent key={"technology"} pagesize="10" category="technology" />} />
            <Route exact path="/health" element={<Newscomponent key={"health"} pagesize="10" category="health" />} />
            <Route exact path="/science" element={<Newscomponent key={"science"} pagesize="10" category="science" />} />
            <Route exact path="/business" element={<Newscomponent key={"business"} pagesize="10" category="business" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
