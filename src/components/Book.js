import React, { Component } from 'react';
import { FaChevronDown } from 'react-icons/fa';

class Book extends Component {
  state = {
    selectValue: ''
  }

  handleSelection = (event) => {
    this.setState({ selectValue: event.target.value });
  }

  render() {
    const { book } = this.props;  
    const bookThumbnail = (!book.imageLinks) ? 'https://via.placeholder.com/130x175' : book.imageLinks.thumbnail;

    return (
      <div className="book animated fadeIn" key={book.id}>
        <img className="book-img" src={bookThumbnail} alt={book.title} />
        <p className="book-title">{book.title}</p>
        <p className="book-subtitle">{book.subtitle}</p>
        <div className="book-selection">
          <FaChevronDown size={12.5} />
          <select
            value={this.state.selectValue}
            onChange={this.handleSelection}
            onClick={() => {
              this.props.moveBook(book, this.state.selectValue)
              this.setState({ selectValue: '' });
            }}
          >
            <option>Move to...</option>
            <option value="currentlyReading">Currently reading</option>
            <option value="wantToRead">Want to read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Book;