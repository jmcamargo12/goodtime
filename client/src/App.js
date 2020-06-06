import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import Nav from "./components/Nav";

import Search from "./components/Search";
import Saved from "./components/Saved";
function App() {
  return (
    <Router>
      <Nav />
      <Jumbo />
      <Route exact path="/" component={Search} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/saved" component={Saved} />
      <Footer />
    </Router>
  );
}
export default App;
