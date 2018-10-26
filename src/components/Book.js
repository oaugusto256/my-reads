import React, { PureComponent } from 'react';
import { FaChevronDown } from 'react-icons/fa';

class Book extends PureComponent {
  state = {
    selectValue: ''
  }

  componentDidMount() {
    this.setState({ selectValue: this.props.book.shelf })
  }

  handleSelection = (event, book) => {
    this.setState({ selectValue: event.target.value })
    this.props.moveBook(book, event.target.value)
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
            onChange={event => this.handleSelection(event, book)}
          >
            <option value="" disabled>Move to...</option>
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