import React from "react";
import { find } from "../../index";
import { newBookRow } from "../../index";
import "./styles.css";
function Search() {
  return (
    <div className="Search">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          <input type="text" id="search-bar"></input>
          <button onClick={find}>Search</button>
          <button onClick={newBookRow}>Add</button>
        </div>
        <div id="content"></div>
      </div>
    </div>
  );
}
export default Search;
