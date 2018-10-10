import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/AddButton";
import BookSection from "../components/BookSection";
import SearchResult from "../components/SearchResult";

import { Route } from "react-router-dom";
import * as BookAPI from "../BooksAPI";

const readStyle = {
  backgroundColor: '#8181EC'
}
const toReadStyle = {
  backgroundColor: '#81ECEC'
}
const readingStyle = {
  backgroundColor: '#81B7EC'
}

class MyReads extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      searchedBooks: [],
      loading: true,
      searchLoading: false,
      errorSearching: false
    };
  }

  componentDidMount() {
    BookAPI.getAll().then(books => {
      this.setState({ books: books, loading: false });
    });
  }

  inTheShelf = (book, shelf) => {
    let bookFound;

    shelf.forEach(bookInShelf => {
      if(bookInShelf.id === book.id) 
        bookFound = bookInShelf
    })

    return bookFound;
  }

  searchBook = query => {
    this.setState({ searchLoading: true })

    BookAPI.search(query).then(searchedBooks => {
      if(!this.searchBook.error === "empty query") {
        searchedBooks = searchedBooks.map(bookToCheck => {
          let bookInTheShelf = this.inTheShelf(bookToCheck, this.state.books);
          
          if(bookInTheShelf === undefined) {
            bookToCheck.shelf = 'none'
            return bookToCheck;
          } else        
            return bookInTheShelf;
        })
      }

      searchedBooks.error === "empty query"
        ? this.setState({ errorSearching: true, searchLoading: false })
        : this.setState({ searchedBooks, errorSearching: false, searchLoading: false });
    });
  };

  moveBook = (book, moveTo) => {
    if (book.shelf !== moveTo) {
      if (moveTo.length !== 0) {
        this.setState({ loading: true });

        BookAPI.update(book, moveTo).then(() => {
          BookAPI.getAll().then(books => {
            this.setState({ books, loading: false });
          })
        })
      }
    }
  };

  eraseSearchedBooks = () => {
    this.setState({ searchedBooks: [] })
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="container-fluid">
          <Header />
          <Loading size={15} color={'#8181EC'} />
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <Header />
          <Route
            exact
            path="/"
            render={() => (
              <div className="row height-100">
                <AddButton />
                <BookSection
                  type="wantToRead"
                  name="Want to read"
                  style={toReadStyle}
                  books={this.state.books}
                  moveBook={this.moveBook}
                />
                <BookSection
                  type="currentlyReading"
                  style={readingStyle}
                  name="Currently reading"
                  books={this.state.books}
                  moveBook={this.moveBook}
                />
                <BookSection
                  type="read"
                  name="Read"
                  style={readStyle}
                  books={this.state.books}
                  moveBook={this.moveBook}
                />
              </div>
            )}
          />
          <Route
            exact
            path="/search"
            render={() => (
              <div className="row height-100">
                <div className="search-section">
                  <SearchBar 
                    searchBook={this.searchBook} 
                    cleanSection={this.eraseSearchedBooks}
                  />
                  <SearchResult
                    moveBook={this.moveBook}
                    booksShelf={this.state.books}
                    error={this.state.errorSearching}
                    loading={this.state.searchLoading}
                    cleanSection={this.eraseSearchedBooks}
                    searchedBooks={this.state.searchedBooks}
                  />
                </div>
              </div>
            )}
          />
          <Footer />
        </div>
      );
    }
  }
}

export default MyReads;
