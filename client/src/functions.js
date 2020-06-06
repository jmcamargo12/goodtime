import axios from "axios";
export function find() {
  var userInput = document.getElementById("search-bar").value;
  var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + userInput;
  return axios.get(queryURL).then((response) => {
    console.log(response.data);
    return response.data;
  });
}
