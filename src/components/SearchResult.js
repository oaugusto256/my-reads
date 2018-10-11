import React, { Component } from 'react';
import Book from './Book';
import Loading from './Loading';
import { FaFrown } from 'react-icons/fa';

class SearchResult extends Component {
  componentWillUnmount() {
    this.props.cleanResult();
  }

  renderBooks = (props) => {
    if(props.loading) {
      return <Loading size={15} color={'#8181EC'} />
    } else if (props.error) {
      return (
        <div className="error-section fadeIn animated">
          <p>Nothing has been found. Try again.</p>
          <FaFrown size={50} />
        </div>
      )
    } else {
      return props.searchedBooks.map(book => (
        <Book
          book={book}
          key={book.id}
          moveBook={props.moveBook}
        />
      ))
    }
  }

  renderSearchInstruction = () => {
    return (
      <p className="search-instruction">Type the category of desired book to add.</p>
    )
  }

  render() {
    return (         
      <div className="flex-row result-section">
        {this.renderBooks(this.props)}
      </div>
    )
  }
}

export default SearchResult;


