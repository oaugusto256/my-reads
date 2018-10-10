import React, { Component } from 'react';
import Book from './Book';

class BookSection extends Component {
  render() {
    return (
      <div className={`animated fadeIn col-lg-4 ${this.props.style}`}>
        <p className="book-section-header">{this.props.name}</p>
        <div className="flex-collumn">
          {this.props.books.map(book => (
            this.props.type === book.shelf ?
              ( 
                <Book
                  key={book.id} 
                  book={book}
                  moveBook={this.props.moveBook}
                />
              ) : null
          ))}
        </div>
      </div>
    )
  }
}

export default BookSection;