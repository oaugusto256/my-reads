import React, { Component } from 'react';
import Book from './Book';
import Loading from './Loading';
import { FaFrown } from 'react-icons/fa';

class SearchResult extends Component {
  componentWillUnmount() {
    this.props.cleanSection();
  }

  renderBooks = (props) => {
    return props.searchedBooks.map(book => (     
      <Book
        book={book}
        key={book.id}
        moveBook={props.moveBook}
      />        
    ))
  }
  
  renderError = () => {
    return (
      <div className="error-section fadeIn animated">
        <p>Nothing has been found. Try again.</p>
        <FaFrown size={50} />
      </div>
    )
  }
  
  renderSearchInstruction = () => {
    return (
      <p className="search-instruction">Type the category of desired book and press 'Enter'.</p>
    )
  }

  render() {
    
    if (this.props.loading) {
      return <Loading size={15} color={'#777'} />
    } else {
      return (
        <div className="search-result-section">
          <div className="flex-collumn">
            {(!this.props.searchedBooks.length && !this.props.error) 
              ? this.renderSearchInstruction() 
              : null}            
            {this.props.error 
              ? this.renderError() 
              : this.renderBooks(this.props)}
          </div>
        </div>
      )
    }
  }
}

export default SearchResult;


