import React from "react";
import { find } from "../../functions";
import "./styles.css";
function Search() {
  return (
    <div className="Search">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          <input type="text" id="search-bar"></input>
          <button onClick={find}>Search</button>
        </div>
      </div>
    </div>
  );
}
export default Search;
