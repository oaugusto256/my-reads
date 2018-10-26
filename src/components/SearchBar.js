import React, { Component } from 'react';
import { FaChevronLeft, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  handleChange = (event) => {
    this.setState({ query: event.target.value });

    if (this.state.query !== '')
      this.props.searchBook(this.state.query)

    if (this.state.query === '')
      this.props.cleanResult()
  }

  eraseSearch = () => {
    this.setState({ query: '' });
    
    this.props.cleanResult();
  }

  render() {
    return (
      <div className="flex-center">
        <Link to='/' className="button-back">
          <FaChevronLeft size={20} />
        </Link>
        <div className="width-100">
          <DebounceInput
            minLength={3}
            debounceTimeout={500}
            value={this.state.query}
            onChange={(event) => this.handleChange(event)}
            className="search-bar fadeIn animated"
            placeholder="Search for a category' book to add to your bookshelf..."
          />
          <span className="erase-search" onClick={() => this.eraseSearch()}>
            <FaTimes />
          </span>
        </div>
      </div>
    )
  }
}

export default SearchBar;