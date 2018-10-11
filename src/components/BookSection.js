import React from 'react';
import Book from './Book';

const BookSection = (props) => {
  return (
    <div className={`animated fadeIn col-lg-4`} style={props.style}>
      <p className="book-section-header">{props.name}</p>
      <div className="flex-row">
        {props.books.map(book => (
          props.type === book.shelf ?
            (<Book
              key={book.id}
              book={book}
              moveBook={props.moveBook}
            />
            ) : null
        ))}
      </div>
    </div>
  )
}

export default BookSection;