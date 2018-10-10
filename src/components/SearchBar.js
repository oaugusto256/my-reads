import React, { Component } from 'react';
import { FaChevronLeft, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  state = {
    query: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.searchBook(this.state.query);
  }

  handleChange = (value) => {
    this.setState({ query: value });
  }

  eraseSearch = () => {
    this.setState({ query: '' });
  }

  render() {
    return (
      <div className="flex-center">
        <Link to='/' className="button-back">
          <FaChevronLeft size={20} />
        </Link>
        <div className="width-100">
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.query}
              onChange={(event) => this.handleChange(event.target.value)}
              type="text"
              className="search-bar fadeIn animated"
              placeholder={"Search books to add to your bookshelf..."}
            />
          </form>          
          <span className="erase-search" onClick={() => this.eraseSearch()}>
            <FaTimes />
          </span>
        </div>
      </div>
    )
  }
}

export default SearchBar;