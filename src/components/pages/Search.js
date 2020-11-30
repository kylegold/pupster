import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../Container";
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";
import Alert from "../Alert";

class Search extends Component {
  state = {
    search: "",
    breeds: [],
    results: [],
    error: ""
  };

  // api request
  getBreed() {
  API.getBaseBreedsList()
  .then(res => this.setState({ breeds: res.data.message }))
  .catch(err => console.log(err));
  }

  getDogsBreed() {
    API.getDogsOfBreed(this.state.search)
    .then(res => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      this.setState({ results: res.data.message, error: "" });
    })
    .catch(err => this.setState({ error: err.message }));
    }

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
   this.getBreed()
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
  this.getDogsBreed()
  };
  render() {
    return (
      <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center">Search By Breed!</h1>
        <Alert
          type="danger"
          style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
        >
          {this.state.error}
        </Alert>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          breeds={this.state.breeds}
        />
        <SearchResults results={this.state.results} />
      </Container>
    );
  }
}

export default Search;
