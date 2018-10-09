import React, { Component } from 'react';
import { FaChevronDown } from 'react-icons/fa';

class BookSection extends Component {
  state = {

  }

  render() {
    console.log(this.props.books)

    return (
      <div className={`animated fadeIn col-lg-4 ${this.props.style}`}>
        <p className="book-section-header">{this.props.name}</p>
        <div className="flex-collumn">
          {this.props.books.map(book => (
            <div className="book" key={book.title}>
              <img className="book-img" src={book.imageLinks.thumbnail} alt={book.title} />
              <p className="book-title">{book.title}</p>
              <p className="book-subtitle">{book.subtitle}</p>
              <div className="book-selection">
                <FaChevronDown size={12.5} />
                <select>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently reading</option>
                  <option value="wantToRead">Want to read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default BookSection;