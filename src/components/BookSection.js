import React from 'react';

const BookSection = (props) => {
  console.log(props.books);

  return (
    <div className={`col-lg-4 book-section ${props.style}`}>
      <p>{props.name}</p>
      <ol>
        {props.books.map(book => (
          <li key={book.title}>{book.title}</li>
        ))}
      </ol>
    </div>
  )
}

export default BookSection;